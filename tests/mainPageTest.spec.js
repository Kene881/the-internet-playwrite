import { test, expect } from '@playwright/test';
import * as theInternetData from '../data/theInternetData.json';

test.describe('Test the-internet-herokuapp website main page is loaded', () => {
  test('The main page has a title', async ({ page }) => {
    await page.goto(theInternetData.mainPageTestData.mainPageUrl);

    await expect(page.locator('//h1[@class="heading"]')).toContainText(theInternetData.mainPageTestData.titleText);
  });
})

