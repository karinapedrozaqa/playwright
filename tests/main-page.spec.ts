import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { RunnersPage } from '../pages/runners-page';


test('homepage has Nike in title and the Runners helping runners button is clickable', async ({ page }) => {
  const mainPage = new MainPage(page);
  const runnersPage = new RunnersPage(page);

  await mainPage.goto();
  await mainPage.clickOnCampaingButton();
  await runnersPage.thePageLoads();


})


