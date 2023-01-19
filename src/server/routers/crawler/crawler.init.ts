import {createRequire} from "module";
const require = createRequire(import.meta.url);

const puppeteer = require('puppeteer-extra');
const hidden = require('puppeteer-extra-plugin-stealth')

// require executablePath from puppeteer
const {executablePath} = require('puppeteer')


export default async function initScrapper() {

  // Launch sequence
  puppeteer.use(hidden())
  const browser = await puppeteer.launch({
    args: ['--no-sandbox',],
    headless: false,
    ignoreHTTPSErrors: true,
    // add this
    executablePath: executablePath(),
  })

  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1280,
    deviceScaleFactor: 1,
  });

  return { browser, page };
}