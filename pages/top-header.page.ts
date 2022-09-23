import { Locator, expect, Page } from '@playwright/test';

export class TopHeader {

    readonly page: Page;
    readonly menuButton: Locator;
    readonly mobileMenuButton: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mobileMenuButton = page.locator("id=MobileMenuButton");
        this.cartIcon = page.locator('#nav - cart > a ')
    }

    async theCartIconIsShown() {
        await this.cartIcon.isVisible();
    }

    async theMobileMenuButtonIsShown() {
        await this.mobileMenuButton.isVisible();
    }
}

