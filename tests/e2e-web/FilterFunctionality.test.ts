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


     test(`@Smoke Verify "Select All" priority filter functionality`, async ({ loginPage, filterpage, webActions }) => {
        await loginPage.navigateToURL();
        await loginPage.inputUsername();
        await loginPage.inputPassword();
        await loginPage.clickOnLetsGoButton();
        await loginPage.verifyUserLogo();
        await filterpage.clickFilterIcon()
        await filterpage.validateFilterPageIsOpen();
        await filterpage.clickSelectAllPriority();
        await filterpage.validateDataVisible();

    })


    test(`@Smoke Verify "Select All" Document type filter functionality`, async ({ loginPage, filterpage, webActions }) => {
        await loginPage.navigateToURL();
        await loginPage.inputUsername();
        await loginPage.inputPassword();
        await loginPage.clickOnLetsGoButton();
        await loginPage.verifyUserLogo();
        await filterpage.clickFilterIcon()
        await filterpage.validateFilterPageIsOpen();
        await filterpage.clickSelectAllDocType();
        await filterpage.validateDataVisible();

    })


    test(`@Smoke Verify "Select All" approval filter functionality`, async ({ loginPage, filterpage, webActions }) => {
        await loginPage.navigateToURL();
        await loginPage.inputUsername();
        await loginPage.inputPassword();
        await loginPage.clickOnLetsGoButton();
        await loginPage.verifyUserLogo();
        await filterpage.clickFilterIcon()
        await filterpage.validateFilterPageIsOpen();
        await filterpage.clickSelectAllApproval();
        await filterpage.validateDataVisible();

    })


    test(`@Smoke Verify "Select All" Signer filter functionality`, async ({ loginPage, filterpage, webActions }) => {
        await loginPage.navigateToURL();
        await loginPage.inputUsername();
        await loginPage.inputPassword();
        await loginPage.clickOnLetsGoButton();
        await loginPage.verifyUserLogo();
        await filterpage.clickFilterIcon()
        await filterpage.validateFilterPageIsOpen();
        await filterpage.clickSelectAllSigner();
        await filterpage.validateDataVisible();

    })



    test(`@Smoke Verify "Select All" collobartor filter functionality`, async ({ loginPage, filterpage, webActions }) => {
        await loginPage.navigateToURL();
        await loginPage.inputUsername();
        await loginPage.inputPassword();
        await loginPage.clickOnLetsGoButton();
        await loginPage.verifyUserLogo();
        await filterpage.clickFilterIcon()
        await filterpage.validateFilterPageIsOpen();
        await filterpage.clickSelectAllColab();
        await filterpage.validateDataVisible();

    })


    test(`@Smoke Verify "Select All" patients filter functionality`, async ({ loginPage, filterpage, webActions }) => {
        await loginPage.navigateToURL();
        await loginPage.inputUsername();
        await loginPage.inputPassword();
        await loginPage.clickOnLetsGoButton();
        await loginPage.verifyUserLogo();
        await filterpage.clickFilterIcon()
        await filterpage.validateFilterPageIsOpen();
        await filterpage.clickSelectAllPatient();
        await filterpage.validateDataVisible();

    })


    test(`@Smoke Verify "Select All" senders filter functionality`, async ({ loginPage, filterpage, webActions }) => {
        await loginPage.navigateToURL();
        await loginPage.inputUsername();
        await loginPage.inputPassword();
        await loginPage.clickOnLetsGoButton();
        await loginPage.verifyUserLogo();
        await filterpage.clickFilterIcon()
        await filterpage.validateFilterPageIsOpen();
        await filterpage.clickSelectAllSender();
        await filterpage.validateDataVisible();

    })














});


