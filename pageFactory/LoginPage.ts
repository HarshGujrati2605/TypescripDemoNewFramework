import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from '../lib/WebActions';
import { testConfig } from '../testConfig';


let webActions: WebActions;

export class LoginPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly USERNAME_EDITBOX: Locator;
    readonly PASSWORD_EDITBOX: Locator;
    readonly LOGIN_BUTTON: Locator;
    readonly USER_LOGO: Locator;
    readonly ERROR_INVALID_LOGIN :Locator;


    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.USERNAME_EDITBOX = page.locator('#Input_Username');
        this.PASSWORD_EDITBOX = page.locator('#Input_Password');
        this.LOGIN_BUTTON = page.locator('#account button[type = "submit"]');
        this.USER_LOGO = page.locator("//button[contains(@id , 'popover')]/span[contains(@class, 'avatar')]");
        this.ERROR_INVALID_LOGIN = page.locator(".text-danger.validation-summary-errors");
    }

    async navigateToURL(){
        await this.page.goto(testConfig.qa);
    }

    async inputUsername(){
        await this.USERNAME_EDITBOX.fill(testConfig.username);
    }

    async inputPassword(){
        await this.PASSWORD_EDITBOX.click()
        await this.PASSWORD_EDITBOX.fill(testConfig.password);
    }
    
    async inputUsername_5001(){
        await this.USERNAME_EDITBOX.fill(testConfig.username_5001);
    }

    async inputPassword_5001(){
        await this.PASSWORD_EDITBOX.click()
        await this.PASSWORD_EDITBOX.fill(testConfig.password_5001);
    }

    async clickOnLetsGoButton(){
        await this.LOGIN_BUTTON.click()
        await this.page.waitForTimeout(1000);
    }

    async verifyUserLogo(){
        // await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState()
        await expect(this.USER_LOGO).toBeVisible();
    }

    async validateInvalidLogin(){
        await this.page.waitForLoadState()
        await expect(this.ERROR_INVALID_LOGIN).toBeVisible();
    }

    async inputWrongPassword(){
        await this.PASSWORD_EDITBOX.click()
        await this.PASSWORD_EDITBOX.fill("454XYZ");
    }
}