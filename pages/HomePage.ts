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
    this.loginButton = page.getByText('Войти•Регистрация'); // Кнопка для входа/регистрации
    this.russianLanguageIcon = page.locator('p', { hasText: 'Русский' }); // Иконка русского языка
    this.registrationModal = page.locator('div.modal'); // Локатор для модального окна регистрации (предполагаемый локатор)
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

  async toggleCategoriesMenu() {
    const categoriesButton = this.page.locator('button.all-categories-button');
    await categoriesButton.waitFor({ state: 'visible', timeout: 10000 });
    await categoriesButton.click();
    console.log("Кнопка 'Все категории' успешно нажата.");
  }

  // Метод для клика по кнопке "Войти•Регистрация"
  async openRegistrationModal() {
    await this.loginButton.click();
    await expect(this.registrationModal).toBeVisible(); // Проверка, что модальное окно открылось
  }
}
