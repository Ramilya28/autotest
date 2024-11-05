import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

















// // import { test, expect } from '@playwright/test';

// // const baseUrl = 'https://lalafo.kg/';

// // test.describe('Тесты поддержки нескольких языков на Lalafo.kg', () => {

// //   test('Проверка видимости кнопки выбора языка', async ({ page }) => {
// //     await page.goto(baseUrl);

// //     // Увеличим таймаут и добавим ожидание загрузки страницы
// //     await page.waitForSelector('text=Русский', { timeout: 10000 });
// //     await expect(page.locator('text=Русский')).toBeVisible({ timeout: 10000 });
// //   });

// //   test('Переключение на кыргызский язык', async ({ page }) => {
// //     await page.goto(baseUrl);

// //     // Ожидание кнопки и переключение на кыргызский язык
// //     await page.waitForSelector('text=Кыргыз тили', { timeout: 10000 });
// //     await page.locator('text=Кыргыз тили').click();

// //     // Переключение обратно на русский
// //     await page.waitForSelector('text=Русский', { timeout: 10000 });
// //     await page.locator('text=Русский').click();
// //   });

// //   test('Переключение обратно на русский язык', async ({ page }) => {
// //     await page.goto(baseUrl);

// //     // Переключение на кыргызский язык
// //     await page.waitForSelector('text=Кыргыз тили', { timeout: 10000 });
// //     await page.locator('text=Кыргыз тили').click();

// //     // Переключение обратно на русский язык
// //     await page.waitForSelector('text=Русский', { timeout: 10000 });
// //     await page.locator('text=Русский').click();
// //   });

// // });
