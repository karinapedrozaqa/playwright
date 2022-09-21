import { Locator, expect, Page } from '@playwright/test';


export class MainPage {

    //Locators
    readonly page: Page;
    readonly campaignButtonLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.campaignButtonLabel = page.locator('[aria-label="Comprar (https://www.nike.com/mx/w/running-37v7j)"]');
    }

    async goto() {
        await this.page.goto('https://www.nike.com/');
        await expect(this.page).toHaveTitle(/Sitio web oficial de Nike. Nike MX/);
    }

    async clickOnCampaingButton() {
        await this.campaignButtonLabel.click();
    }
}
