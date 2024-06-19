import { expect } from "@playwright/test";
import test from "../../lib/BaseTest";


test.describe('Validate filter tooltip while hovering mouse over filter icon', () => {

    test(`@Smoke Verify filter click functionality and filter page`, async ({ loginPage, filterpage, webActions }) => {
        await loginPage.navigateToURL();
        await loginPage.inputUsername();
        await loginPage.inputPassword();
        await loginPage.clickOnLetsGoButton();
        await loginPage.verifyUserLogo();
        await filterpage.clickFilterIcon()
        await filterpage.validateFilterPageIsOpen();

    })

    test(`@Smoke Verify "Date received" filter functionality`, async ({ loginPage, filterpage, webActions }) => {
        await loginPage.navigateToURL();
        await loginPage.inputUsername();
        await loginPage.inputPassword();
        await loginPage.clickOnLetsGoButton();
        await loginPage.verifyUserLogo();
        await filterpage.clickFilterIcon()
        await filterpage.validateFilterPageIsOpen();
        await filterpage.enterStartAndEndDateReceived("05/01/2024", "06/01/2024");
        await filterpage.validateDataVisible();
    })


    test(`@Smoke Verify "Effective date" filter functionality`, async ({ loginPage, filterpage, webActions }) => {
        await loginPage.navigateToURL();
        await loginPage.inputUsername();
        await loginPage.inputPassword();
        await loginPage.clickOnLetsGoButton();
        await loginPage.verifyUserLogo();
        await filterpage.clickFilterIcon()
        await filterpage.validateFilterPageIsOpen();
        await filterpage.entereffectivedate("05/01/2024", "06/01/2024");
        await filterpage.validateDataVisible();
    })












});


