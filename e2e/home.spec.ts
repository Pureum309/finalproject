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

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(HomePage);
        await expect(page).toHaveTitle('Moody');
    })

    test('The meta tag', async ({ page }) => { 
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(HomePage)

        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', 'Moody is an app recommending the perfect outfit for any weather at your location.');
    })

    test('The link tag', async ({ page }) => {
        await page.goto(HomePage)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/moodyicon.svg')
    })
})

test.describe('Weather', () => {
    test('Main', async({ page }) => {
        await page.goto(HomePage)

        await expect(page.locator('#recommendText')).toContainText('This how we recommend for you today!');
    })
})

test.describe('Logo', () => {
    test('Number of li under Menu', async({ page }) => {
        await page.goto(HomePage)

        await expect(page.locator('#hamburgerlines > span')).toHaveCount(3);
    })

    test('Should contain list for menu', async ({ page }) => {
        await page.goto(HomePage);
        await expect(page.locator('#menuitems > li')).toContainText(["Home", "Product","Recommend"]);
    })

    test('Should contain a for li', async ({ page }) => {
        await page.goto(HomePage);
        await expect(page.locator('li > a')).toHaveCount(3);
    })
})

test.describe('Linking to another page', () => {
    test('Should contain a link to Recomend Page', async ({page}) => {
        await page.goto(HomePage);
        await page.click('text=Recommend Page');
        await expect(page).toHaveURL(RecommendPage);
    })
})