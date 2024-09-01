import { test, expect } from '@playwright/test';

const titleText = 'Welcome to the-internet';

test.describe('Test the-internet-herokuapp website main page is loaded', () => {
  test('The main page has a title', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page.locator('//h1[@class="heading"]')).toContainText(titleText);
  });
})

