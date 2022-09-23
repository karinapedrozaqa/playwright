import { Locator, expect, Page } from '@playwright/test';

export class MainPage {

    //Locators
    readonly page: Page;
    readonly campaignButton: Locator;
    readonly mainBanner: Locator;
    readonly mesesSinInteresesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.campaignButton = page.locator('[aria-label="Comprar (https://www.nike.com/mx/w/running-37v7j)"]');
        this.mainBanner = page.locator('href', { hasText: '/sitio-web-oficial-de-nike.jpg' })
        this.mesesSinInteresesButton = page.locator('[aria-label="Comprar (https://www.nike.com/mx/help/a/meses-sin-intereses)"]');

    }

    async theMainBannerIsShown() {
        await this.mainBanner.isVisible();
    }

    async clickOnCampaingButton() {
        await this.campaignButton.click();
    }

    async clickOnTheMesesSinInteresesButton() {
        await this.mesesSinInteresesButton.click();

    }
}
