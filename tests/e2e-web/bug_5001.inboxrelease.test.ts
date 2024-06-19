import test from '@lib/BaseTest';

test.beforeAll(async () => {
});

test.describe('Suture Wallet login scenarios', () => {

    test(`@Smoke Verify User is able to login successfully`, async ({ loginPage, webActions }) => {
            await loginPage.navigateToURL();
            await loginPage.inputUsername_5001();
            await loginPage.inputPassword_5001();
            // await this.LOGIN_BUTTON.getByText("Let's Go");
            // await this.page.waitForTimeout(1000);
    }); 
        


})