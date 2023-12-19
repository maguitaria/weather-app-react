import { test, expect } from '@playwright/test';

  


    test('Go through elements and click on 7 days cards', async ({ page }) => {
        await page.goto('https://maguitaria.github.io/weather-app-react/');
        await page.waitForLoadState()
        await page.locator('div').filter({ hasText: /^Weather in Oulu, Finland$/ }).nth(2).click();
        await page.getByText('Current WeatherSnow').click();
        await page.locator('.w-20').click(); // Click on weather icon

        await page.getByText('Today').click(); // Click on first card

        await page.locator('.flex-auto > div > div').first().click(); // Flex element should be visible
        await page.getByText('Wind:').click();
        await page.getByText('UV Index:').click();
        await page.getByText('Precipitation:').click();
        await page.getByText('Sunrise:').click();
        await page.getByText('Sunset:').click();
        // Click on weather icons one by one on 7 cards
        await page.locator('div:nth-child(2) > .bg-light-blue > .w-40').click();
        await page.locator('div:nth-child(3) > .bg-light-blue > .w-40').click();
        await page.locator('div:nth-child(4) > .bg-light-blue > .w-40').click();
        await page.locator('div:nth-child(5) > .bg-light-blue > .w-40').click();
        await page.locator('div:nth-child(6) > .bg-light-blue > .w-40').click();
        await page.locator('div:nth-child(7) > .bg-light-blue > .w-40').click();
        // Go to the chart
        await page.getByRole('heading', { name: 'Hourly chart' }).click();
        await page.locator('canvas').click({
            position: {
                x: 266,
                y: 4
            }
        });
    });
