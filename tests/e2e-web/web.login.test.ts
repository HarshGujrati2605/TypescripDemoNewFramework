import test from "../../lib/BaseTest";
test.beforeAll(async () => {
});

test.describe('Suture Wallet login scenarios', () => {

    test(`@Smoke Verify User is able to login successfully`, async ({ loginPage, webActions }) => {
            await loginPage.navigateToURL();
            await loginPage.inputUsername();
            await loginPage.inputPassword();
            await loginPage.clickOnLetsGoButton();
            await loginPage.verifyUserLogo();
    }); 
        
    test(`@Smoke Verify User is not able to login successfully if username or password is incorrect`, async ({ loginPage, webActions }) => {
            await loginPage.navigateToURL();
            await loginPage.inputUsername();
            await loginPage.inputWrongPassword();
            await loginPage.clickOnLetsGoButton();
            await loginPage.validateInvalidLogin();
    }); 

})