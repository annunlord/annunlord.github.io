const { test, expect } = require('@playwright/test');

test('visual regression test for home page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot();
});
