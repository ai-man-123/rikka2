async function ssweb(url, fpage = false) {
async function getBrowser(opts = {}) {
    const chromeOptions = {
        headless: true,
       defaultViewport: {
            width: 1920,
            height: 1080
        },
       args: [
      "--incognito",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
      "no-cache"
     ],
        timeout: 120000,
        ...opts
    }
    return await require('puppeteer').launch(chromeOptions)
}
const browser = await getBrowser()
                const page = await browser.newPage()
                await page.goto(url, {
                    waitUntil: 'networkidle0',
                    timeout: 300000
                })
const screenshot = await page.screenshot({
                    type: 'png',
                    fullPage: fpage
                })
await browser.close()
return screenshot 
}

module.exports = ssweb