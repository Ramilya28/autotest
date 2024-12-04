import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Переход на главную страницу
  await page.goto('https://lalafo.kg/');
  
  // Клик на "Войти•Регистрация"
  await page.getByText('Войти•Регистрация').click();
  
  // Ожидание появления баннера и клик на изображение для выбора языка
  await page.getByRole('banner').getByRole('img').nth(1).click();
  
  // Ожидание видимости текста "Русский" и клик на его иконку
  const russianLanguageIcon = page.locator('p').filter({ hasText: 'Русский' }).locator('path').nth(2);
  await russianLanguageIcon.waitFor({ state: 'visible', timeout: 20000 }); // Увеличен тайм-аут
  await russianLanguageIcon.click();
  
  // Переход на страницу с кыргызским языком
  await page.goto('https://lalafo.kg/ky');
  
  // Клик на "Кирүү•Катталуу"
  await page.getByText('Кирүү•Катталуу').click();
  
  // Закрытие модального окна на новой странице
  // await page.locator('.modal__close > .LFIcon > svg > path').click();
  
  // Проверка, что на странице есть текст на кыргызском языке
  await expect(page.locator('body')).toContainText('Кыргыз тили');
});
