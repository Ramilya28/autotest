import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Change language to Kyrgyz and back to Russian on Lalafo.kg', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();

  // Переключение на русский язык и проверка
  await homePage.selectLanguage('Russian');
  await homePage.verifyLanguageText('Русский');

  // Переключение на кыргызский язык и проверка
  await homePage.selectLanguage('Kyrgyz');
  await homePage.verifyLanguageText('Кыргыз тили');
});
