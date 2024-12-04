
import { test, expect } from '@playwright/test';


test('Change language and test registration modal', async ({ page }) => {
  // Переход на сайт с ожиданием загрузки основного содержимого
  await page.goto('https://lalafo.kg/', { waitUntil: 'domcontentloaded' });
  // Открыть модальное окно входа
  await page.getByText('Войти•Регистрация').click();
 // Вывести HTML-контент страницы 
  await page.click('.open-modal-button'); // Замените на реальный селектор кнопки
  await page.waitForSelector('.modal__open', { timeout: 180000 });
   // Тайм-аут 3 минуты
  // Ожидание модального окна
  await page.locator('.modal__close > .LFIcon > svg').click();
  // Переключение языка с русского на кыргызский
  await page.getByRole('banner').getByRole('img').nth(1).click();
  const russianOption = page.locator('p', { hasText: 'Русский' });
  await russianOption.click();
  const kyrgyzOption = page.getByRole('link', { name: 'Кыргыз тили' });
  await kyrgyzOption.waitFor({ state: 'visible' });
  await kyrgyzOption.click();
  // Проверка наличия текста на кыргызском и открытие формы регистрации
  await page.getByText('Кирүү•Катталуу').click();
  await page.getByText('Катталуу', { exact: true }).click();
  await page.waitForSelector('.modal__close > .LFIcon > svg'); // Убедиться, что модальное окно открылось
  // Закрытие модального окна
  await page.locator('.modal__close > .LFIcon > svg').click();
});