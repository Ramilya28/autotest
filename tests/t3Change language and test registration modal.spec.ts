import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test('Change language and test registration modal', async ({ page }) => {
    const mainPage = new MainPage(page);
  
    // Переход на сайт
    await mainPage.navigate();
  
    // Открыть и закрыть модальное окно входа
    await mainPage.openLoginModal();
    await mainPage.closeModal();
  
    // Переключение языка с русского на кыргызский
    await mainPage.changeLanguageToRussian();
    await mainPage.changeLanguageToKyrgyz();
  
    // Проверка наличия текста на кыргызском языке и открытие формы регистрации
    await page.getByText('Кирүү•Катталуу').click();
    await page.getByText('Катталуу', { exact: true }).click();
    await page.waitForSelector('.modal__close > .LFIcon > svg');
    await mainPage.closeModal();
  });
