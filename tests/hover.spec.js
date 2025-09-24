// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Hover tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hover over Mass Times on Top bar', async ({ page }) => {
    const massTimesLink = page.locator('a', { hasText: 'Mass Times' }).first();
    await massTimesLink.hover();
    await expect(massTimesLink).toBeVisible();
    await page.screenshot({ path: 'tests/screenshots/mass-times-top-bar-hover.png' });
  });

  test('hover over Mass Times button on home page', async ({ page }) => {
    const massTimesButton = page.locator('a.btn', { hasText: 'Mass Times' });
    await massTimesButton.hover();
    await expect(massTimesButton).toBeVisible();
    await page.screenshot({ path: 'tests/screenshots/mass-times-button-hover.png' });
  });
});
