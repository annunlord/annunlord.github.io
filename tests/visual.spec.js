const { test, expect } = require('@playwright/test');

test('visual regression test for home page', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(1100); // Animation delay is 0.25s and animation is 0.3s. So, 1100ms is double the expected time
  await expect(page).toHaveScreenshot();
});
