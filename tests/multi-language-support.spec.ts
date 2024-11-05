// // import { test, expect } from '@playwright/test';

// // test.describe('Password Recovery Modal', () => {
// //     test('Check Password Recovery Functionality', async ({ page }) => {
        
// //         await page.goto('https://lalafo.kg/'); 
// //         await page.locator('text=Забыли пароль?').click(); 
// //         await expect(page.locator('.ForgotPasswordModal.desktop')).toBeVisible();
// //         await expect(page.locator('.forgot_password__text')).toHaveText('Пароль будет отправлен на email или номер телефона...');
// //         await page.locator('.LFInput__input').fill('malikakurmanbekova1818@gmail.com'); 
// //         await page.locator('.LFButton.primary-green').click();
// //         await expect(page.locator('text=Пароль был отправлен')).toBeVisible(); 
// //     });
// // });
// import { test, expect } from '@playwright/test';

// test.describe('Search filtering', () => {
//     test('Check', async ({ page }) => {
//         await page.goto('https://lalafo.kg/');
        
//         // Заполнение поля поиска
//         await page.locator('input[type="text"].search-input[placeholder="Я ищу..."]').fill('Офисные столы');
        
//         // Клик по кнопке поиска
//         await page.locator('button[type="button"].search-input-button').click();
        
//         // Ожидание заголовков объявлений
//         await page.waitForSelector('.ad-tile-horizontal-header-link-title', { timeout: 30000, state: 'visible' });
        
//         // Проверка, сколько объявлений загружено
//         const adsCount = await page.locator('.ad-tile-horizontal-header-link-title').count();
//         console.log(`Количество загруженных объявлений: ${adsCount}`);

//         // Заполнение цен
//         await page.locator('input[type="number"].LFInput__input[placeholder="Цена от"]').fill('5000');
//         await page.locator('input[type="number"].LFInput__input[placeholder="Цена до"]').fill('15000');
        
//         // Клик по кнопке фильтрации
//         await page.locator('button[type="button"].LFButton.medium.primary-green').click();

     
//         await page.waitForTimeout(20000);
//     });
// });

// const { test, expect } = require('@playwright/test');

// test.describe('Multi-Language Support', () => {

//   test.beforeEach(async ({ page }) => {
//     // Переход на сайт перед каждым тестом
//     await page.goto('https://www.lalafo.kg');
//   });

//   test('Switch to Kyrgyz language', async ({ page }) => {
//     // Найти селектор языка и переключиться на кыргызский
//     await page.click('#language-selector-id');
//     await page.click('option[value="ky"]');

//     // Проверка изменения текста на кыргызский
//     const header = await page.locator('h1.title');
//     await expect(header).toHaveText('Текст на кыргызском');
//   });

//   test('Switch to Russian language', async ({ page }) => {
//     // Найти селектор языка и переключиться на русский
//     await page.click('#language-selector-id');
//     await page.click('option[value="ru"]');

//     // Проверка изменения текста на русский
//     const header = await page.locator('h1.title');
//     await expect(header).toHaveText('Текст на русском');
//   });
// });



// import { test, expect } from '@playwright/test';

// test.describe('Multi-language support on Lalafo', () => {

//   // Тест переключения языка на кыргызский
//   test('should change language to Kyrgyz', async ({ page }) => {
//     await page.goto('https://lalafo.kg');
//     await page.waitForLoadState('networkidle');

//     // Открываем меню выбора языка
//     await page.click('#language-menu');

//     // Выбираем кыргызский язык
//     await page.click('#kyrgyz-language-option');

//     // Проверяем изменение текста на кыргызский
//     const textOnPage = await page.innerText('#header-text');
//     expect(textOnPage).toContain('Текст на кыргызском');
//   });

//   // Тест переключения языка на русский
//   test('should change language to Russian', async ({ page }) => {
//     await page.goto('https://lalafo.kg');
//     await page.waitForLoadState('networkidle');

//     // Открываем меню выбора языка
//     await page.click('#language-menu');

//     // Выбираем русский язык
//     await page.click('#russian-language-option');

//     // Проверяем изменение текста на русский
//     const textOnPage = await page.innerText('#header-text');
//     expect(textOnPage).toContain('Текст на русском');
//   });

// });
