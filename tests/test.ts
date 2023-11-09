import { expect, test } from '@playwright/test';

test('index page has expected offers', async ({ page }) => {
	test.setTimeout(25000);
	await page.goto('/');

	const freeOffer = page.getByTestId('free');
	await expect(freeOffer).toBeVisible();
	await expect(freeOffer.getByTestId("price")).toBeVisible();
	await expect(freeOffer.getByTestId("price")).toHaveText("Free");

	const startupOffer = page.getByTestId('startup');
	await expect(startupOffer).toBeVisible();
	await expect(startupOffer.getByTestId("price")).toBeVisible();
	await expect(startupOffer.getByTestId("price")).toHaveText('$ 49');

	const enterpriseOffer = page.getByTestId('enterprise');
	await expect(enterpriseOffer).toBeVisible();
	await expect(enterpriseOffer.getByTestId("price")).toBeVisible();
	await expect(enterpriseOffer.getByTestId("price")).toHaveText('$ 99');

	const scaleUpOffer = page.getByTestId('scaleUp');
	await expect(scaleUpOffer).toBeVisible();
	await expect(scaleUpOffer.getByTestId("price")).toBeVisible();
	await expect(scaleUpOffer.getByTestId("price")).toHaveText('$ 249');
});
