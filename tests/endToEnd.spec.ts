import {test , Page , BrowserContext,expect} from "@playwright/test";
import { LoginPage } from "../src/pageObjects/loginPage";

const testData=JSON.parse(JSON.stringify(require('../tests/testData.json')));

let browserContext:BrowserContext;
let page:Page;
let loginPage:LoginPage;

const{
    default_UserName,
    default_Password,
}=process.env;

test.describe('Verify end to end functionality',async()=>{

    test.beforeAll(async({browser})=>{
        browserContext =await browser.newContext();
        page= await browserContext.newPage();
        loginPage=new LoginPage(page);
    })

    test('login using env variables',async()=>{
        await loginPage.login(default_UserName! ,default_Password! );

    })

    for(const data of testData){
        test(`verify end to end scenario for user ${data.username}`,async()=>{
            await loginPage.login(data.username ,data.password );
        })
    }
   
})