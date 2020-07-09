import { Browser, Page } from "puppeteer";
const puppeteer = require("puppeteer");

export class BasePage{
    page: Page | undefined;
    constructor() {

    }
    pageLoaded() {}
    async open() {
        let browser: Browser;
        browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox','--lang=it-IT,it'], headless: true, slowMo: 0});
        this.page = await browser.newPage();
        await this.page.setViewport({width: 1366, height: 768});
        return this.page
    }
}
