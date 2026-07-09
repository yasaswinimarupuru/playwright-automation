import {test, expect} from '@playwright/test';
import { LoginPage } from './pages/Loginpage';//
test('BT Login using POM', async ({page}) => {
const loginPage = new LoginPage(page);
await loginPage.gotoLoginPage();
await loginPage.login('testuser@btoa.com','Test@123');
await expect(loginPage.errorMessage).toBeVisible();
await expect(page).toHaveURL(/.*login/);
});