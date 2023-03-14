import { test, expect } from '@playwright/test'

let ProductItemPage = "http://localhost:3000/productItem";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});



test.describe('Size Chart', () => {
    test('Count number of button in the #sizechart', async ({page}) => {
        await page.goto(ProductItemPage)

        await expect(page.locator('#sizechart > button')).toHaveCount(1);
    })
})