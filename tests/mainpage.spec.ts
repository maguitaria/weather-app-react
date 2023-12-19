import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
    await page.goto('http://localhost:5173/weather-app-react/');
    await page.locator('div').filter({ hasText: /^Weather in Oulu, Finland$/ }).nth(2).click();
    await expect (page.getByRole('button', { name: 'Icon' })).toBeVisible();
    await page.getByRole('button', { name: 'Icon' }).click();
    await expect (page.getByRole('heading', { name: 'Monday' })).toBeVisible();

    await page.locator('.flex-auto > div > div').first().click();
    await page.getByText('Wind speed:').click();
    await page.getByText('UV Index:').click();
    await page.getByText('Precipitation:').click();
    await page.getByText('Sunrise:').click();
    await page.getByText('Sunset:').click();
    
    await page.locator('div:nth-child(3) > .w-full').click();
    await page.getByRole('button', { name: 'weather icon' }).click();
    await page.getByText('Tuesday').click();
    await page.getByRole('button', { name: 'weather icon' }).click();
    await page.getByText('Wednesday').click();
    await page.getByRole('button', { name: 'weather icon' }).click();
    await page.getByText('Thursday').click();
    await page.getByRole('button', { name: 'weather icon' }).click();
    await page.getByText('Friday').click();
    await page.getByRole('button', { name: 'weather icon' }).click();
    await page.getByText('Saturday').click();
    await page.getByRole('button', { name: 'weather icon' }).click();
    await page.getByText('Sunday').click();
    await page.getByRole('button', { name: 'weather icon' }).click();
});