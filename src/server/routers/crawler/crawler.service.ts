import initScrapper from "./crawler.init";
const url = "https://www.amazon.com/gp/goldbox";

const getData = async () => {
  const { browser, page } = await initScrapper();
  
  // open the site
  await page.goto('https://shopee.com.my/', {
    waitUntil: 'networkidle0',
  });

  // get page content
  let content = await page.content();
  console.log(content);

  // close browser
  browser.close()
};

export default getData;