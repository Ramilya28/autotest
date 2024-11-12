import { test, expect } from '@playwright/test';
test('Switch language to Kyrgyz and verify categories on Lalafo.kg', async ({ page }) => {
  // Переход на главную страницу
  await page.goto('https://lalafo.kg/', { waitUntil: 'networkidle' });
  // Открыть меню категорий
  await page.getByRole('button', { name: 'Все категории' }).click();

  // Закрыть меню категорий, чтобы освободить экран для выбора языка
  await page.getByRole('button', { name: 'Все категории' }).click();
  
  // Нажать на баннер и выбрать "Русский" язык
  await page.getByRole('banner').getByRole('img').nth(1).click();
  const russianOption = page.locator('p').filter({ hasText: 'Русский' }).getByRole('img').nth(1);
  await russianOption.waitFor({ state: 'visible' });
  await russianOption.click();

  // Переключение на кыргызский язык
  await page.getByRole('link', { name: 'Кыргыз тили' }).click();

  // Проверка, что язык переключился на кыргызский
  await expect(page.locator('body')).toContainText('Баардык категориялар');

  // Открыть и закрыть меню категорий на кыргызском языке
  await page.getByRole('button', { name: 'Баардык категориялар' }).click();
  await page.getByRole('button', { name: 'Баардык категориялар' }).click();

  // Проверка, что меню категорий открылось и закрылось без ошибок
  await expect(page.getByRole('button', { name: 'Баардык категориялар' })).toBeVisible();
});
