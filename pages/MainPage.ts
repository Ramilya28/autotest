import { test, expect, Page } from '@playwright/test';
export class MainPage {
  private page: Page;
  private loginButton: any;
  private languageButton: any;
  private closeModalButton: any;
  private registrationButton: any;
  private phoneField: any;
  private passwordField: any;
  private submitButton: any;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = this.page.locator('text=Войти•Регистрация');
    this.languageButton = this.page.locator('role=banner').locator('role=img').nth(1); // Кнопка выбора языка
    this.closeModalButton = this.page.locator('.modal__close > .LFIcon > svg');
    this.registrationButton = this.page.locator('text=Регистрация');
    this.phoneField = this.page.locator('[placeholder="XXX XXXXXX"]');
    this.passwordField = this.page.locator('[placeholder="Пароль"]');
    this.submitButton = this.page.locator('button:has-text("Регистрация")');
  }

  // Метод для перехода на главную страницу
  async navigate(): Promise<void> {
    await this.page.goto('https://lalafo.kg/', { waitUntil: 'domcontentloaded' });
  }

  // Метод для открытия модального окна входа/регистрации
  async openLoginModal(): Promise<void> {
    await this.loginButton.click();
  }

  // Метод для закрытия модального окна
  async closeModal(): Promise<void> {
    await this.closeModalButton.click();
  }

  // Метод для переключения языка на русский
  async changeLanguageToRussian(): Promise<void> {
    await this.languageButton.click();
    const russianOption = this.page.locator('p', { hasText: 'Русский' });
    await russianOption.click();
  }

  // Метод для переключения языка на кыргызский
  async changeLanguageToKyrgyz(): Promise<void> {
    const kyrgyzOption = this.page.locator('role=link', { hasText: 'Кыргыз тили' });
    await kyrgyzOption.click();
  }

  // Метод для заполнения формы регистрации (номер телефона и пароль)
  async fillRegistrationForm(phone: string, password: string): Promise<void> {
    await this.phoneField.fill(phone);
    await this.passwordField.fill(password);
  }

  // Метод для отправки формы регистрации
  async submitRegistration(): Promise<void> {
    await this.submitButton.click();
  }

  // Метод для проверки ошибки валидации пароля
  async checkPasswordValidationError(): Promise<void> {
    const errorText = this.page.locator('text=Пароль минимум 5 символов');
    await errorText.waitFor({ state: 'visible' });
  }

  // Метод для проверки, что текст на странице соответствует заданному
  async verifyTextOnPage(text: string): Promise<void> {
    await this.page.locator('body').waitFor({ state: 'visible' }); // Ожидаем, что тело страницы будет видно
    await expect(this.page.locator('body')).toContainText(text);
  }
}
