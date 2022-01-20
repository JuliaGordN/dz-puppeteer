const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
  });
  try {
    const page = await browser.newPage();
    await page.goto('https://pptr.dev/', {
      waitUntil: 'networkidle0',
    });
    const toolbar = await page.$('body > toolbar-component');
    const sidebar = await page.$('body > sidebar-component');

    await toolbar.evaluate((el) => {
      const toolbarStyle = el;
      toolbarStyle.style.background = '#1F54C0';
      return toolbarStyle.style.background;
    });

    await sidebar.evaluate((el) => {
      const sidebarStyle = el;
      sidebarStyle.style.background = '#1F54C0';
      return sidebarStyle.style.background;
    });

    await page.screenshot({ path: 'img-with-background.png' });
    await browser.close();
  } catch (error) {
    console.log('Ops... You have error in code');
    await browser.close();
  }
})();
