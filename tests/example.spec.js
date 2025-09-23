const { test, expect } = require('@playwright/test');

test('homepage has a title and screenshot is taken', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Annunciation of the Lord/);

  // Take a screenshot
  await page.screenshot({ path: `screenshot-${test.info().project.name}.png`, fullPage: true });
});
