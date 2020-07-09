import {registerAllureReporter} from "jest-allure/dist/setup";
import * as JestAllureReporter from "jest-allure/dist";


const puppeteer = require('puppeteer');

describe("Google",() => {
    let browser,page;
    beforeEach(async () => {
        browser = await puppeteer.launch({headless:false});
        page = await browser.newPage();
        await page.goto('https://google.com');
    })
    it('sample test4',async () =>{
        await expect(page.title()).resolves.toMatch('Google');
    })
    it('sample test5',async () =>{
        await page.screenshot({ path: './PuppeteerTests/results/unsplash.jpeg' });
        await expect(page.title()).resolves.toMatch('Google');
    })
    it('sample test6',async () =>{
        await page.screenshot({ path: './PuppeteerTests/results/unsplash.png' });
        await expect(page.title()).resolves.toMatch('Google');
    })

    afterEach(async () =>{
        await browser.close();
    })
});



