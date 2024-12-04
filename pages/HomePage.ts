import { Page, Locator, expect } from '@playwright/test';


export class HomePage {
  readonly page: Page;
  readonly languageBanner: Locator;
  readonly russianOption: Locator;
  readonly kyrgyzOption: Locator;
  readonly categoriesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.languageBanner = page.getByRole('banner').getByRole('img').nth(1);
    this.russianOption = page.locator('.LFDropdownLinksList-title-text >> text=Русский');
    this.kyrgyzOption = page.getByRole('link', { name: 'Кыргыз тили' });
    this.categoriesButton = page.getByRole('button', { name: 'Все категории' });
  }

  async navigate() {
    await this.page.goto('https://lalafo.kg/', { waitUntil: 'networkidle' });
  }

  async selectLanguage(language: 'Russian' | 'Kyrgyz') {
    await this.languageBanner.click();
    if (language === 'Russian') {
      await this.russianOption.waitFor({ state: 'visible', timeout: 10000 });
      await this.russianOption.click();
    } else {
      await this.kyrgyzOption.waitFor({ state: 'visible', timeout: 10000 });
      await this.kyrgyzOption.click();
    }
  }

  async verifyLanguageText(expectedText: string) {
    await expect(this.page.locator('body')).toContainText(expectedText);
  }

  // async toggleCategoriesMenu() {
  //   if (await this.categoriesButton.isVisible()) {
  //     await this.categoriesButton.click();
  //   }
  //   if (await this.categoriesButton.isVisible()) {
  //     await this.categoriesButton.click();
  //   }
  // }
  async toggleCategoriesMenu() {
    const categoriesButton = this.page.locator('button.all-categories-button');
    
    // Убедитесь, что кнопка существует и видима
    await categoriesButton.waitFor({ state: 'visible', timeout: 10000 });
  
    // Нажмите на кнопку
    await categoriesButton.click();
    console.log("Кнопка 'Все категории' успешно нажата.");
  }
  
}
