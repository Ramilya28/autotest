import { test, expect } from '@playwright/test';
test('Change language and test registration modal', async ({ page }) => {
  await page.goto('https://lalafo.kg/');
  await page.getByText('Войти•Регистрация').click();
  await page.getByText('Войти•Регистрация').click();
  await page.waitForSelector('.modal', { timeout: 10000 });
  const closeButton = page.locator('.modal__close > .LFIcon > svg');
  if (await closeButton.isVisible()) {
    await closeButton.click();
  } else {
    console.log('Кнопка закрытия не найдена, попробуйте нажать Escape');
    await page.keyboard.press('Escape'); 
  }
  await page.getByRole('banner').getByRole('img').nth(1).click();
  await page.locator('p').filter({ hasText: 'Русский' }).click();
  await page.getByRole('link', { name: 'Кыргыз тили' }).click();
  await expect(page.locator('body')).toContainText('Кыргыз тили');
});
