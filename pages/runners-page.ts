import { Locator, expect, Page } from '@playwright/test';

export class RunnersPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async thePageLoads() {
        await expect(this.page).toHaveURL('/running/'); //I have to regex this
        await expect(this.page).toHaveTitle(/Running. Nike MX/);
    }
}
