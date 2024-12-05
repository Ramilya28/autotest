import { test, expect, request } from '@playwright/test';
import { describe } from 'node:test';
const REPO = 'test-repo-1';
const USER = 'github-username';


test.describe('Profiles', () => {
    test('Profiles', async ({ request }) => {
      const Profiles = await request.get("https://lalafo.kg/api/user/v3/profiles", {
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU3MTUyNjAsImFjY2Vzc190b2tlbiI6IlpGN0s1MmNQRm9DZmFKZTZWUEt5RXBoalJFX1dUTjJyIiwiYXZhdGFyIjoiaHR0cHM6XC9cL2ltZzUubGFsYWZvLmNvbVwvaVwvYXZhdGFyXC8yNVwvNGNcL2UzXC84ZTIxNDkwMTA4YTQxZDVjN2JkYTk4OTg4NC5qcGVnIiwidXNlcm5hbWUiOiJSYW1pbGlhIFNhdmFyb3ZhIiwicHJvIjpmYWxzZX0.dkej3zihOGlVp4JoToqn423PSpMUB1ip_dkcRNzEEC4",
            "Cache-Control": "no-cache",
            Cookie: "event_user_hash=e73c5746-3f93-4d49-8240-9fce6165380a; _fbp=fb.1.1725903615201.792573110654598079; onboarding_wallet_balance_in_header=true; jwt_token_spa=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU3MTUyNjAsImFjY2Vzc190b2tlbiI6IlpGN0s1MmNQRm9DZmFKZTZWUEt5RXBoalJFX1dUTjJyIiwiYXZhdGFyIjoiaHR0cHM6XC9cL2ltZzUubGFsYWZvLmNvbVwvaVwvYXZhdGFyXC8yNVwvNGNcL2UzXC84ZTIxNDkwMTA4YTQxZDVjN2JkYTk4OTg4NC5qcGVnIiwidXNlcm5hbWUiOiJSYW1pbGlhIFNhdmFyb3ZhIiwicHJvIjpmYWxzZX0.dkej3zihOGlVp4JoToqn423PSpMUB1ip_dkcRNzEEC4; event_session_id=a7252adbb0dc78935b825490483639dc",
            "Country-Id": "12",
            Device: "pc",
            Language: "ru_RU",
            Referer: "https://lalafo.kg/account/settings",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
          },
      });
  
      expect(Profiles.ok()).toBeTruthy();
    const responseData = await Profiles.json();
    expect(responseData).toHaveProperty('username');
    expect(responseData.username).toBe('Ramilia Savarova');
    });
  });
  