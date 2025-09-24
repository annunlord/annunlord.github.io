const { test, expect } = require('@playwright/test');

const pages = [
  '/',
  '/information/',
  '/information/adoration/',
  '/information/bulletins/',
  '/information/contact_us/',
  '/information/directions/',
  '/information/email_list/',
  '/information/links/',
  '/information/liturgical_minister_schedule/',
  '/information/mass_times/',
  '/information/parish_history/',
  '/information/policies/',
  '/terms/',
  '/404'
];

for (const pageUrl of pages) {
  test(`visual regression test for ${pageUrl}`, async ({ page }) => {
    await page.goto(pageUrl);
    await page.waitForLoadState("networkidle"); // Be sure that the network is idle
    await page.waitForTimeout(1100); // Animation Delay at 2 times the slowest animation
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
}
