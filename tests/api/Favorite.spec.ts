import { test, expect, request } from '@playwright/test';
import { describe } from 'node:test';
const REPO = 'test-repo-1';
const USER = 'github-username';

test.describe('Favorites', () => {
  test('Favorites', async ({ request }) => {

    const Favorites = await request.get('https://lalafo.kg/api/search/v3/feed/my/favorite?expand=url&per-page=40', {
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU3MTUyNjAsImFjY2Vzc190b2tlbiI6IlpGN0s1MmNQRm9DZmFKZTZWUEt5RXBoalJFX1dUTjJyIiwiYXZhdGFyIjoiaHR0cHM6XC9cL2ltZzUubGFsYWZvLmNvbVwvaVwvYXZhdGFyXC8yNVwvNGNcL2UzXC84ZTIxNDkwMTA4YTQxZDVjN2JkYTk4OTg4NC5qcGVnIiwidXNlcm5hbWUiOiJSYW1pbGlhIFNhdmFyb3ZhIiwicHJvIjpmYWxzZX0.dkej3zihOGlVp4JoToqn423PSpMUB1ip_dkcRNzEEC4",
            "Cache-Control": "no-cache",
            "Cookie": "event_user_hash=e73c5746-3f93-4d49-8240-9fce6165380a; _fbp=fb.1.1725903615201.792573110654598079; onboarding_wallet_balance_in_header=true; jwt_token_spa=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU3MTUyNjAsImFjY2Vzc190b2tlbiI6IlpGN0s1MmNQRm9DZmFKZTZWUEt5RXBoalJFX1dUTjJyIiwiYXZhdGFyIjoiaHR0cHM6XC9cL2ltZzUubGFsYWZvLmNvbVwvaVwvYXZhdGFyXC8yNVwvNGNcL2UzXC84ZTIxNDkwMTA4YTQxZDVjN2JkYTk4OTg4NC5qcGVnIiwidXNlcm5hbWUiOiJSYW1pbGlhIFNhdmFyb3ZhIiwicHJvIjpmYWxzZX0.dkej3zihOGlVp4JoToqn423PSpMUB1ip_dkcRNzEEC4; event_session_id=a7252adbb0dc78935b825490483639dc; experiment=discountlevelpurchase-discountlevelpurchase-partition-3; language_spa=ru_RU; cf_clearance=Sj1RzpVvnsN.UXrEN7o99ecoe.e_UbUAuT6iADJ4Jb0-1733332826-1.2.1.1-skWHDlOLDtosoH5XQpimWneyTFI6Kej1woLHR3BM4Z6a_HoKCwo.6zMfOY9Tc6SPNUlNpc23BDUFlCMLXcP62YoVm4tVnGITND94V5yUU_hP4wNPf8EPoQWUrqUZCncgfovCztWk0UwztfBoSWO08vW2dpoguWl1SwQMb07GTxPn6T_OEQkYYIr3CB63Q3byxZZrY6YmGFHR6IycUxEi4UB6zgWxcEIe7jj_LTXe7hoJp6pWRjcCTdQLO4TvktDzJ12i8DTFCYWuVCj8DQyqacWYsJauGlaBPmEZp.aoOxtZbesXZsvruA3hCREpJockUzSsJ15sC.nOi6RQdYTIiCaTeYpWJWRo7roOGor5ZG.hHaDZvZySd06d1IRbQtWZ; lastAnalyticsEvent=home:page:attribution:page:view; device_fingerprint=5721ba8d1006d28e6a049034da95a5e6",
            "Country-Id": "12",
            "Device": "pc",
            "Language": "ru_RU",
            "Referer": "https://lalafo.kg/account/settings",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
          },
    });

    expect(Favorites.ok()).toBeTruthy();
    const responseData = await Favorites.json();
    expect(responseData).toHaveProperty('_meta');
    expect(responseData._meta.currentPage).toBe(1);
    expect(responseData.items).toBeDefined();    
  });
});
