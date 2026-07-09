import { Page, Locator} from '@playwright/test'
 export class LoginPage {
    readonly page: Page ;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
     readonly myBtHeading: Locator;
     readonly errorMessage:Locator;
 constructor(page: Page){
    this.page =page;
    this.usernameInput =page.getByRole('textbox',{name:'Email or username'});
    this.passwordInput =page.getByRole('textbox',{name:'password'});
    this.loginButton =page.getByRole('button',{name:'Log in'});
    this.myBtHeading =page.getByRole('heading',{name:'My BT'});
    this.errorMessage =page.getByText('Incorrect Email address and password');
}
async gotoLoginPage(){
    await this.page.goto('https://www.bt.com');
    await this.page.getByRole('link',{name:'Log in'}).click();
    await this.page.getByRole('button',{name: 'Accept all cookies'}).click({timeout: 5000}).catch(() =>{});
}
async login(username: string, password: string){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}
 }