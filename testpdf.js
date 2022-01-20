const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();
        await page.goto('https://pptr.dev/', {
        waitUntil: 'networkidle0',
    })
        await page.waitForSelector('input');
        await page.keyboard.type('pdf');
        await page.keyboard.press('Enter');

        await page.pdf({path: 'page.pdf'});

        await browser.close();

}   catch (error) {
    console.log("Ops... You have error in code");
    await browser.close();
  }
})();