import { test, expect } from '@playwright/test'

let HomePage = "http://localhost:3000";
let RecommendPage = "http://localhost:3000/recommend";
let ProductPage = "http://localhost:3000/product";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});


test.describe('Weather', () => {
    test('Main', async({ page }) => {
        await page.goto(RecommendPage)

        await expect(page.locator('h2')).toContainText("Search Location, We'll find your match!");
    })
})

test.describe('Linking to HomePage', () => {
    test('Should contain a link to HomePage', async ({page}) => {
        await page.goto(RecommendPage);
        await page.click('img');
        await expect(page).toHaveURL(HomePage);
    })
})