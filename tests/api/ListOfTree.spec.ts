import { test, expect, request } from '@playwright/test';
import { describe } from 'node:test';
const REPO = 'test-repo-1';
const USER = 'github-username';

// test('should create a bug report', async ({ request }) => {
//   const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
//     data: {
//       title: '[Bug] report 1',
//       body: 'Bug description',
//     }
//   });
//   expect(newIssue.ok()).toBeTruthy();

//   const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
//   expect(issues.ok()).toBeTruthy();
//   expect(await issues.json()).toContainEqual(expect.objectContaining({
//     title: '[Bug] report 1',
//     body: 'Bug description'
//   }));
// });

test.describe('List of tree', () => {
  test('Get list of tree', async ({ request }) => {
    const ListOfTree = await request.get("https://lalafo.kg/api/proxy/catalog/v3/categories/tree", {
      headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU3MTUyNjAsImFjY2Vzc190b2tlbiI6IlpGN0s1MmNQRm9DZmFKZTZWUEt5RXBoalJFX1dUTjJyIiwiYXZhdGFyIjoiaHR0cHM6XC9cL2ltZzUubGFsYWZvLmNvbVwvaVwvYXZhdGFyXC8yNVwvNGNcL2UzXC84ZTIxNDkwMTA4YTQxZDVjN2JkYTk4OTg4NC5qcGVnIiwidXNlcm5hbWUiOiJSYW1pbGlhIFNhdmFyb3ZhIiwicHJvIjpmYWxzZX0.dkej3zihOGlVp4JoToqn423PSpMUB1ip_dkcRNzEEC4",
        "Country-Id": "12",
        Device: "pc",
        Experiment: "discountlevelpurchase-discountlevelpurchase-partition-3",
        Language: "ru_RU",
        Referer: "https://lalafo.kg/account/settings",
        "User-Hash": "e73c5746-3f93-4d49-8240-9fce6165380a",
        Cookie: "affinity=1733415078.144.75.183774|77d10e9a236642c6efd4b9ec0942933d",
      },
    });
    expect(ListOfTree.ok()).toBeTruthy();
    expect((await ListOfTree.text()).includes("work"));
  });
});
