import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test('Switch language to Kyrgyz and verify categories on Lalafo.kg', async ({ page }) => {
  const mainPage = new MainPage(page);

  // Переход на сайт
  await mainPage.navigate();

  // Переключение языка на кыргызский
  await mainPage.changeLanguageToKyrgyz();

  // Проверка, что текст на странице на кыргызском языке
  await mainPage.verifyTextOnPage('Баардык категориялар');

  // Проверка открытия и закрытия меню категорий
  await page.getByRole('button', { name: 'Баардык категориялар' }).click();
  await page.getByRole('button', { name: 'Баардык категориялар' }).click();
});

