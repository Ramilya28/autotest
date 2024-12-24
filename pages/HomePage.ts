import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly languageBanner: Locator;
  readonly russianOption: Locator;
  readonly kyrgyzOption: Locator;
  readonly categoriesButton: Locator;
  readonly loginButton: Locator;
  readonly russianLanguageIcon: Locator;
  readonly registrationModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.languageBanner = page.getByRole('banner').getByRole('img').nth(1);
    this.russianOption = page.locator('.LFDropdownLinksList-title-text >> text=Русский');
    this.kyrgyzOption = page.getByRole('link', { name: 'Кыргыз тили' });
    this.categoriesButton = page.getByRole('button', { name: 'Все категории' });
    this.loginButton = page.getByText('Войти•Регистрация'); 
    this.russianLanguageIcon = page.locator('p', { hasText: 'Русский' }); 
    this.registrationModal = page.locator('div.modal');
  }

  async navigate() {
    await this.page.goto('https://lalafo.kg/', { waitUntil: 'networkidle' });
  }

async selectLanguage(language: 'Russian' | 'Kyrgyz') {
  console.log(`Попытка переключить язык на ${language}`);

  try {
    const isBannerVisible = await this.languageBanner.isVisible();
    const isBannerEnabled = await this.languageBanner.isEnabled();

    if (!isBannerVisible || !isBannerEnabled) {
      throw new Error('Баннер языка не виден или не доступен для клика');
    }

    await this.languageBanner.click();
    console.log('Баннер языка кликнут.');
  } catch (error) {
    console.error('Ошибка при клике на баннер языка:', error);
    throw error;
  }

  try {
    if (language === 'Russian') {
      await this.russianOption.waitFor({ state: 'visible', timeout: 15000 });
      await this.russianOption.click();
      console.log('Язык переключен на Русский');
    } else {
      await this.kyrgyzOption.waitFor({ state: 'visible', timeout: 15000 });
      await this.kyrgyzOption.click();
      console.log('Язык переключен на Кыргызский');
    }
  } catch (error) {
    console.error('Ошибка при выборе языка:', error);
    throw error;
  }
}


  async verifyLanguageText(expectedText: string) {
    await expect(this.page.locator('body')).toContainText(expectedText);
  }

  async toggleCategoriesMenu() {
    const categoriesButton = this.page.locator('button.all-categories-button');
    await categoriesButton.waitFor({ state: 'visible', timeout: 10000 });
    await categoriesButton.click();
    console.log("Кнопка 'Все категории' успешно нажата.");
  }

  async openRegistrationModal() {
    await this.loginButton.click();
    await expect(this.registrationModal).toBeVisible(); 
  }
}
