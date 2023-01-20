import initScrapper from "./crawler.init";
const url = "https://www.amazon.com/gp/goldbox";

const getData = async (keyword: string) => {
  const { browser, page } = await initScrapper();
  
  // open the site
  await page.goto(`https://shopee.com.my/search?keyword=${keyword}`, {
    waitUntil: 'networkidle0',
  });

  // all results selector
  const allResultsSelector  = '.shopee-search-item-result__items';
  await page.waitForSelector(allResultsSelector);

  // each result selector
  const resultsSelector = '.shopee-search-item-result__item'
  const results = await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  // const links = await page.evaluate(resultsSelector => {
  //   return document.querySelectorAll(resultsSelector);
  // }, resultsSelector);

  console.log(results);

  // close browser
  browser.close()
};

export default getData;