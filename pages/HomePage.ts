// import { Page, Locator, expect } from '@playwright/test';

// export class HomePage {
//   readonly page: Page;
//   readonly languageBanner: Locator;
//   readonly russianOption: Locator;
//   readonly kyrgyzOption: Locator;
//   readonly categoriesButton: Locator;
//   readonly loginButton: Locator;
//   readonly russianLanguageIcon: Locator;
//   readonly registrationModal: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.languageBanner = page.getByRole('banner').getByRole('img').nth(1);
//     this.russianOption = page.locator('.LFDropdownLinksList-title-text >> text=Русский');
//     this.kyrgyzOption = page.getByRole('link', { name: 'Кыргыз тили' });
//     this.categoriesButton = page.getByRole('button', { name: 'Все категории' });
//     this.loginButton = page.getByText('Войти•Регистрация'); // Кнопка для входа/регистрации
//     this.russianLanguageIcon = page.locator('p', { hasText: 'Русский' }); // Иконка русского языка
//     this.registrationModal = page.locator('div.modal'); // Локатор для модального окна регистрации (предполагаемый локатор)
//   }

//   async navigate() {
//     await this.page.goto('https://lalafo.kg/', { waitUntil: 'networkidle' });
//   }

//   // async selectLanguage(language: 'Russian' | 'Kyrgyz') {
//   //   await this.languageBanner.click();
//   //   if (language === 'Russian') {
//   //     await this.russianOption.waitFor({ state: 'visible', timeout: 10000 });
//   //     await this.russianOption.click();
//   //   } else {
//   //     await this.kyrgyzOption.waitFor({ state: 'visible', timeout: 10000 });
//   //     await this.kyrgyzOption.click();
//   //   }
//   // }

//   async selectLanguage(language: 'Russian' | 'Kyrgyz') {
//     console.log(`Попытка переключить язык на ${language}`);
    
//     // Ожидаем, пока не станет видимым баннер с выбором языка
//     await this.languageBanner.click();
//     console.log('Баннер языка кликнут.');

//     if (language === 'Russian') {
//       // Ждем, пока не станет видимым элемент для русского языка
//       console.log('Выбираем русский язык...');
//       await this.russianOption.waitFor({ state: 'visible', timeout: 10000 });
//       await this.russianOption.click();
//       console.log('Язык переключен на Русский');
//     } else {
//       // Ждем, пока не станет видимым элемент для кыргызского языка
//       console.log('Выбираем кыргызский язык...');
//       await this.kyrgyzOption.waitFor({ state: 'visible', timeout: 10000 });
//       await this.kyrgyzOption.click();
//       console.log('Язык переключен на Кыргызский');
//     }
//   } 
//   async verifyLanguageText(expectedText: string) {
//     await expect(this.page.locator('body')).toContainText(expectedText);
//   }

//   async toggleCategoriesMenu() {
//     const categoriesButton = this.page.locator('button.all-categories-button');
//     await categoriesButton.waitFor({ state: 'visible', timeout: 10000 });
//     await categoriesButton.click();
//     console.log("Кнопка 'Все категории' успешно нажата.");
//   }

//   // Метод для клика по кнопке "Войти•Регистрация"
//   async openRegistrationModal() {
//     await this.loginButton.click();
//     await expect(this.registrationModal).toBeVisible(); // Проверка, что модальное окно открылось
//   }
// }


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
  console.log(`Попытка переключить язык на ${language}`);

  // Проверка, что баннер с языками видим и доступен для клика
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

  // Ожидаем, пока не станет видимым и доступным элемент для выбора языка
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

  // Метод для клика по кнопке "Войти•Регистрация"
  async openRegistrationModal() {
    await this.loginButton.click();
    await expect(this.registrationModal).toBeVisible(); // Проверка, что модальное окно открылось
  }
}
