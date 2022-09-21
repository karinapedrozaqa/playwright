import { Locator, expect, Page } from '@playwright/test';

export class RunnersPage {

    readonly page: Page;
    readonly menuButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuButton = page.locator("id=MobileMenuButton");
    }

    async theMenuButtonIsShown() {
        await this.menuButton.isVisible();

    }

    async thePageLoads() {
        await expect(this.page).toHaveTitle(/Running. Nike MX/);
    }
}
