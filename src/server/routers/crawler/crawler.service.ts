import initScrapper from "./crawler.init";
const url = "https://www.amazon.com/gp/goldbox";

const getData = async (keyword: string) => {
  const { browser, page } = await initScrapper();
  
  // open the site
  await page.goto(`https://shopee.com.my/search?keyword=${keyword}`, {
    waitUntil: 'networkidle0',
  });

  // wait for content loaded
  await page.waitForNavigation({waitUntil: "domcontentloaded"});

  // language selector pop-up selector 
  const languageSelector = '.language-selection__list-item > button';
  await page.waitForSelector(languageSelector);
  const english = await page.evaluate( () => document.querySelectorAll('.language-selection__list-item > button') )[0];

  console.log(english);

  await page.click(languageSelector);

  // all results selector
  const allResultsSelector  = '.shopee-search-item-result__items';
  await page.waitForSelector(allResultsSelector);

  // each result selector
  const resultsSelector = '.shopee-search-item-result__item'
  await page.waitForSelector(resultsSelector);
  const results = await page.evaluate( () => document.querySelectorAll('.shopee-search-item-result__item') );

  // Extract the results from the page.
  // const links = await page.evaluate(resultsSelector => {
  //   return document.querySelectorAll(resultsSelector);
  // }, resultsSelector);

  console.log(results);


  // close browser
  browser.close()
};

export default getData;