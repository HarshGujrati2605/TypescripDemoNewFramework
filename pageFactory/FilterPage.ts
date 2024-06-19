import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from '../lib/WebActions';
import { testConfig } from '../testConfig';
import { assert, error } from 'console';
import { text } from 'stream/consumers';
let webActions: WebActions;

export class FilterPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly FILTER_ICON: Locator;
    readonly FILTER_TOOLTIP: Locator;
    readonly CLEAR_FILTER_BUTTON: Locator;
    readonly START_DATE_FOR_RECEIVED: Locator;
    readonly END_DATE_FOR_RECEIVED: Locator;
    readonly CLOSE_DATE_SELECTOR_BUTTON: Locator;
    readonly DATA_DISPLAYED: Locator;
    readonly DATA_COUNT_DISPLAYED: Locator;
    readonly START_DATE_EFFECTIVE: Locator;
    readonly END_DATE_EFFECTIVE: Locator;
    readonly SELECT_ALL_PRIORITY: Locator;
    readonly SELECT_ALL_DOCTYPE: Locator;
    readonly SELECT_ALL_APPROVAL: Locator;
    readonly SELECT_ALL_SIGNER: Locator;
    readonly SELECT_ALL_COLLABRATOR: Locator;
    readonly SELECT_ALL_PATIENT: Locator;
    readonly SELECT_ALL_SENDER: Locator;



    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.FILTER_ICON = page.locator('.documents-filters p');
        this.FILTER_TOOLTIP = page.locator("//div[contains(@aria-describedby, 'tooltip')]");
        this.CLEAR_FILTER_BUTTON = page.getByRole("button", { name: 'Clear All Filters' })
        this.START_DATE_FOR_RECEIVED = page.locator("//p[text() = 'Date Received']/ancestor::div[contains(@class , 'item')]//input[@placeholder = 'Start Date']");
        this.END_DATE_FOR_RECEIVED = page.locator("//p[text()='Date Received']/ancestor::div[contains(@class,'item')]//input[@placeholder='End Date']");
        this.CLOSE_DATE_SELECTOR_BUTTON = page.locator("//section[contains(@id , 'popover') and contains(@style , 'visibility: visible')]/button");
        this.DATA_DISPLAYED = page.locator("//div[@id='document-summaries-virtuoso-container']//div[@data-test-id='virtuoso-item-list']/div");
        this.DATA_COUNT_DISPLAYED = page.locator("//span[contains(text() , 'Select All')]");
        this.START_DATE_EFFECTIVE = page.locator("//p[text() = 'Effective Date']/ancestor::div[contains(@class , 'item')]//input[@placeholder = 'Start Date']");
        this.END_DATE_EFFECTIVE = page.locator("//p[text() = 'Effective Date']/ancestor::div[contains(@class , 'item')]//input[@placeholder = 'End Date']");
        this.SELECT_ALL_PRIORITY = page.locator("//button[text()='Priority']/ancestor::div[contains(@class,'item')]//button[text()='Select All']");
        this.SELECT_ALL_DOCTYPE = page.locator("//button[text()='Document Type']/ancestor::div[contains(@class,'item')]//button[text()='Select All']");
        this.SELECT_ALL_APPROVAL = page.locator("//button[text()='Approval']/ancestor::div[contains(@class,'item')]//button[text()='Select All']");
        this.SELECT_ALL_SIGNER = page.locator("//button[text()='Signers']/ancestor::div[contains(@class,'item')]//button[text()='Select All']");
        this.SELECT_ALL_COLLABRATOR = page.locator("//button[text()='Collaborators']/ancestor::div[contains(@class,'item')]//button[text()='Select All']");
        this.SELECT_ALL_PATIENT = page.locator("//button[text()='Patients']/ancestor::div[contains(@class,'item')]//button[text()='Select All']");
        this.SELECT_ALL_SENDER = page.locator("//button[text()='Senders']/ancestor::div[contains(@class,'item')]//button[text()='Select All']");
    
    }


    async clickFilterIcon() {
        await this.FILTER_ICON.waitFor({ state: 'visible' })
        await this.FILTER_ICON.click();
    }

    async validateFilterPageIsOpen() {

        await expect(this.CLEAR_FILTER_BUTTON).toBeVisible();
    }

    async clickClearAllButton() {
        await this.CLEAR_FILTER_BUTTON.click();
    }

    async enterStartAndEndDateReceived(startdate: string, enddate: string) {
        await this.START_DATE_FOR_RECEIVED.fill(startdate);
        await this.END_DATE_FOR_RECEIVED.fill(enddate);
        await this.CLOSE_DATE_SELECTOR_BUTTON.click()

    }

    async entereffectivedate(startdate: string, enddate: string) {
        await this.START_DATE_EFFECTIVE.fill(startdate);
        await this.END_DATE_EFFECTIVE.fill(enddate);
        await this.CLOSE_DATE_SELECTOR_BUTTON.click()

    }


    async validateDataVisible() {
        await this.DATA_COUNT_DISPLAYED.waitFor({ state: 'visible' });
        const countofdatadisplayedinrows = await this.DATA_DISPLAYED.count();
        const finalcountofdatadisplayed = Number((await this.DATA_COUNT_DISPLAYED.textContent()).replace("Select All", "").trimStart());
        console.log(await countofdatadisplayedinrows);
        console.log(await finalcountofdatadisplayed);

        if ((countofdatadisplayedinrows +1) === (finalcountofdatadisplayed +1)) {
            console.log("The number of data displayed correctly")

        }
        else {
            throw new Error("Data is mismatched");
        }
    }


    async clickSelectAllPriority() {

        await this.SELECT_ALL_PRIORITY.click();

    }

    async clickSelectAllDocType() {

        await this.SELECT_ALL_DOCTYPE.click();

    }

    async clickSelectAllApproval() {

        await this.SELECT_ALL_APPROVAL.click();

    }


    async clickSelectAllSigner() {

        await this.SELECT_ALL_SIGNER.click();

    }

    async clickSelectAllColab() {

        await this.SELECT_ALL_COLLABRATOR.click();

    }


    async clickSelectAllPatient() {

        await this.SELECT_ALL_PATIENT.click();

    }

    async clickSelectAllSender() {

        await this.SELECT_ALL_SENDER.click();

    }








}





