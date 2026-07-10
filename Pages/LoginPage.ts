import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async gotoLoginPage() {
    await this.page.goto('https://www.google.com');
  }
}
