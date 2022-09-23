import { test } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { RunnersPage } from '../pages/runners-page';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
}),

  test('the page shows the main banner', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.theMainBannerIsShown();

  }),
  test('homepage has Nike in title and the Runners helping runners button is clickable', async ({ page }) => {
    const mainPage = new MainPage(page);
    const runnersPage = new RunnersPage(page);

    await mainPage.clickOnCampaingButton();
    await runnersPage.thePageLoads();

  }),

  test('the user clicks on the Meses Sin Intereses Button', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.clickOnTheMesesSinInteresesButton();
  })



