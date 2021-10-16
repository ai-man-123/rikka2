async function ssweb(url, fpage = false) {
async function getBrowser(opts = {}) {
    const chromeOptions = {
        headless: false,
       defaultViewport: {
            width: 1920,
            height: 1080
        },
        timeout: 120000,
        ...opts
    }
    return await require('puppeteer').launch(chromeOptions)
}
const browser = await getBrowser()
                const page = await browser.newPage()
                await page.goto(url, {
                    waitUntil: 'networkidle2',
                    timeout: 300000
                })
const screenshot = await page.pdf({
                    format: 'a4'
                })
await browser.close()
return screenshot 
}

module.exports = ssweb