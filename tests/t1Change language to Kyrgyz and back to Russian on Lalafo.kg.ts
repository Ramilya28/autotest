import { test, expect } from '@playwright/test';

test('Change language to Kyrgyz and back to Russian on Lalafo.kg', async ({ page }) => {
  // Переход на сайт с ожиданием, пока все сетевые запросы завершатся
  await page.goto('https://lalafo.kg/', { waitUntil: 'networkidle' });

  // Нажать на баннер для выбора языка
  await page.getByRole('banner').getByRole('img').nth(1).click();

  // Ожидание видимости элемента и клик на "Русский" язык
  const russianOption = page.locator('.LFDropdownLinksList-title-text >> text=Русский');
  await russianOption.waitFor({ state: 'visible', timeout: 10000 });
  await russianOption.click();

  // Проверка, что текст "Русский" виден на странице
  await expect(page.locator('body')).toContainText('Русский');

  // Ожидание видимости элемента и клик на "Кыргыз тили"
  const kyrgyzOption = page.getByRole('link', { name: 'Кыргыз тили' });
  await kyrgyzOption.waitFor({ state: 'visible', timeout: 10000 });
  await kyrgyzOption.click();
  
  // Проверка, что текст "Кыргыз тили" виден на странице
  await expect(page.locator('body')).toContainText('Кыргыз тили');
});

