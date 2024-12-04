import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Switch language to Kyrgyz and verify categories on Lalafo.kg', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();

  // Открытие и закрытие меню категорий
  await homePage.toggleCategoriesMenu();

  // Переключение на русский язык
  await homePage.selectLanguage('Russian');
  await homePage.verifyLanguageText('Все категории');

  // Переключение на кыргызский язык
  await homePage.selectLanguage('Kyrgyz');
  await homePage.verifyLanguageText('Баардык категориялар');

  // Открытие и закрытие меню категорий на кыргызском языке
  await homePage.toggleCategoriesMenu();
});
