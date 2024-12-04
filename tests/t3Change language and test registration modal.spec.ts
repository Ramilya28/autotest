import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Change language and test registration modal', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();

  await homePage.selectLanguage('Russian');
  await homePage.verifyLanguageText('Русский');

  await homePage.openRegistrationModal();

  await homePage.selectLanguage('Kyrgyz');
  await homePage.verifyLanguageText('Кыргыз тили');
});
