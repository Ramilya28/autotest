import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test('Change language to Kyrgyz and back to Russian on Lalafo.kg', async ({ page }) => {
  const mainPage = new MainPage(page);

  // Переход на сайт
  await mainPage.navigate();

  // Переключение языка на русский
  await mainPage.changeLanguageToRussian();

  // Проверка, что текст на странице на русском
  await mainPage.verifyTextOnPage('Русский');

  // Переключение языка на кыргызский
  await mainPage.changeLanguageToKyrgyz();

  // Проверка, что текст на странице на кыргызском
  await mainPage.verifyTextOnPage('Кыргыз тили');
});