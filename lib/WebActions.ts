
import type { Locator, Page } from '@playwright/test';
import { BrowserContext, expect } from '@playwright/test';
import { testConfig } from '../testConfig'; 

export class WebActions {
    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    async delay(time: number) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }

  
}