import TestPage from '../pageobjects/test.page';

describe('My Test', () => {
    beforeAll('QA Automation', async () => {
        await TestPage.open();
    });
    it('should return “OTCM” quote in quote textbox & search', async () => {
        await TestPage.quote.waitForDisplayed();
        await TestPage.quote.setValue('OTCM');
        await browser.pause(2000);
        await TestPage.search.click();
    });
    it('should navigate to Quote tab', async () => {
        const navQuote = await $('//div[@class="_2H94cIcGl1 sc-bdVaJa fSzdHl"]/a[1]');
        await browser.waitUntil(() => navQuote.isClickable());
        await browser.pause(2000);
        await navQuote.click();
    });
    it('should capture Open & Market Cap values', async () => {
        const openValue = await TestPage.openValue.getText();
        const marketCapValue = await TestPage.marketCapValue.getText();
        console.log(openValue, marketCapValue);
    });
    it('should assert the Company Name & Symbol', async () => {
        await TestPage.companyName.waitForDisplayed();
        const companyName = await TestPage.companyName.getText();
        console.log(companyName);
        await expect(companyName).toBe('OTCM');
    });
    it('should navigate to “Security Details” tab', async () => {
        const securityDetailsTab = await $('//div[@class="_2H94cIcGl1 sc-bdVaJa fSzdHl"][3]/a');
        await browser.waitUntil(() => securityDetailsTab.isClickable());
        await browser.pause(2000);
        await securityDetailsTab.click();
    });
    it('should assert Market Cap on Quote Page matches with Security Detail Page', async () => {
        const marketCapValueSDP = await TestPage.marketCapValueSDP.getText();
        await expect(marketCapValue).isEqual(marketCapValueSDP);
    });
    it('should Print log “Market Cap $x on $date”', async () => {
        const marketCapValueSDP = await TestPage.marketCapValueSDP.getText();
        const date = await TestPage.date.getText();
        console.log('Market Cap $', marketCapValueSDP, ' on ', date);
    });
});