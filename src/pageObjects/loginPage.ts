import {test , Page , expect} from "@playwright/test";

const userNameField = '#userEmail';
const passwordField = '#userPassword';
const loginButton = '#login';
export class LoginPage{

    page:Page;

    constructor(page:Page){
        this.page=page;
    }

    public async login(username:string , password:string){

        await this.page.goto('/client');
        await this.page.locator(userNameField).isVisible();
        await this.page.locator(userNameField).fill(username);
        await this.page.locator(passwordField).isVisible();
        await this.page.locator(passwordField).fill(password);
        await this.page.locator(loginButton).isEnabled();
        await this.page.locator(loginButton).click();
    }
}