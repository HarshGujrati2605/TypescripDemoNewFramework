import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pageFactory/LoginPage';
import { WebActions } from './WebActions'; 
import { FilterPage } from '@pages/FilterPage';


const test = baseTest.extend<{
    webActions: WebActions;
    loginPage: LoginPage;
    filterpage: FilterPage;
}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },

    filterpage: async({page , context} , use) =>{
       await use(new FilterPage(page , context)) ;
    }


})

export default test;