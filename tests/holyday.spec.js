import { test, expect } from '@playwright/test';

test.describe('Holy Day Mass Times', () => {
  // Set the date to May 17, 2025
  test.use({
    contextOptions: {
      now: new Date('2025-05-17T12:00:00Z').getTime(),
    },
  });

  test('home page should show holy day banner', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1100);
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('mass times page should show holy day schedule', async ({ page }) => {
    await page.goto('/information/mass_times/');
    await page.waitForTimeout(1100);
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});
