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
    it('sample test',async () =>{
        reporter.feature('Test');
        reporter.description("sample");
        reporter.startStep("Create Attachment");
        await page.screenshot({ path: './PuppeteerTests/results/unsplash.jpeg' });
        reporter.startStep("Assertion");
        await expect(page.title()).resolves.toMatch('Google');
    })
    it('sample test2',async () =>{
        reporter.feature('Test2');
        reporter.description("sample");
        reporter.startStep("Create Attachment");
        await page.screenshot({ path: './PuppeteerTests/results/unsplash.jpeg' });
        reporter.startStep("Assertion");
        await expect(page.title()).resolves.toMatch('Google');
    })
    it('sample test3',async () =>{
        reporter.feature('Test3');
        reporter.description("sample");
        reporter.startStep("Create Attachment");
        await page.screenshot({ path: './PuppeteerTests/results/unsplash.png' });
        reporter.startStep("Assertion");
        await expect(page.title()).resolves.toMatch('Google');
    })

    afterEach(async () =>{
        await browser.close();
    })
});



