import { page } from '@playwright/test';
export class LoginPage {
  constructor (private Page: Page) {}
  async goto LoginPage() {
    await this. page. goto ('https:// google.com');
  }
}
