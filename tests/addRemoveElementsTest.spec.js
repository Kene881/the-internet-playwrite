import { test, expect } from '@playwright/test';
import * as theInternetData from '../data/theInternetData.json';

test.describe('Add/Remove elements page testing', () => {
    test('Add/Remove elements test', async ({ page }) => {
        await page.goto(theInternetData.mainPageTestData.mainPageUrl);

        await page.locator('//a[@href="/add_remove_elements/"]').click();

        await expect(page.locator('//h3[text()="Add/Remove Elements"]')).toBeVisible();

        for (let i = 0; i < theInternetData.addRemovePageTestData.addButtonClickCount; i++) {
            await page.locator('//button[@onclick="addElement()"]').click();
        }

        await expect(page.locator('//button[@onclick="deleteElement()"]')).toHaveCount(theInternetData.addRemovePageTestData.addButtonClickCount);

        let deleteButtons = await page.$$('//button[@onclick="deleteElement()"]');

        for await (let deleteButton of deleteButtons) {
            await deleteButton.click();
        }

        await expect(page.locator('//button[@onclick="deleteElement()"]')).toHaveCount(0);
    })
})