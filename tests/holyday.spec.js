import { test, expect } from '@playwright/test';

test.describe('Holy Day Mass Times', () => {
  // The date to be mocked in the browser
  const mockedDate = new Date('2025-08-14T12:00:00Z');

  test('home page should show holy day banner', async ({ page }) => {
    // Mock the date before navigating to the page
    await page.clock.setFixedTime(mockedDate);

    await page.goto('/');
    // You may not need this timeout if the script runs quickly on DOMContentLoaded
    await page.waitForTimeout(1100); 
    await expect(page.locator('#holyday-banner-alert')).toBeVisible();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('mass times page should show holy day schedule', async ({ page }) => {
    // Mock the date before navigating to the page
    await page.clock.setFixedTime(mockedDate);
    
    await page.goto('/information/mass_times/');
    await expect(page.locator('#holyday-schedule-card')).toBeVisible();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});