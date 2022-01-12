import TestPage from '../pageobjects/test.page';

let openValue, marketCapQuotePage, marketCapSecurityPage, companyName, companySymbol, securityDate;

describe('OTCM TEST', () => {
    beforeAll('Visit Main Page', async () => {
        await TestPage.open();
    });
    it('should return “OTCM” quote in quote textbox & search', async () => {
        await TestPage.quote.waitForDisplayed();
        await TestPage.quote.setValue('OTCM');
        await TestPage.search.waitForClickable();
        await TestPage.search.click();
    });
    it('should navigate to Quote tab', async () => {
        await browser.waitUntil(() => TestPage.quoteTab.isClickable());
        await TestPage.quoteTab.click();
        await expect(TestPage.quoteTab).toHaveUrlContaining('quote');
    });
    it('should capture Open & Market Cap values', async () => {
        await TestPage.openValue.waitForDisplayed();
        openValue = await TestPage.openValue.getText();
        await TestPage.marketCapQuotePage.waitForDisplayed();
        marketCapQuotePage = await TestPage.marketCapQuotePage.getText();
        console.log(openValue, marketCapQuotePage);
    });
    it('should assert the Company Name & Symbol', async () => {
        await TestPage.companyName.waitForDisplayed();
        companyName = await TestPage.companyName.getText();
        await TestPage.companySymbol.waitForDisplayed();
        companySymbol = await TestPage.companySymbol.getText();
        console.log(companyName, companySymbol);
    });
    it('should navigate to “Security Details” tab', async () => {
        await browser.waitUntil(() => TestPage.securityDetailsTab.isClickable());
        await TestPage.securityDetailsTab.click();
        await expect(TestPage.securityDetailsTab).toHaveUrlContaining('security');
    });
    it('should assert Market Cap on Quote Page matches with Security Detail Page', async () => {
        await TestPage.marketCapSecurityPage.waitForDisplayed();
        marketCapSecurityPage = await TestPage.marketCapSecurityPage.getText();
        await TestPage.securityDate.waitForDisplayed();
        securityDate = await TestPage.securityDate.getText();
        console.log('Market Cap $', marketCapSecurityPage, ' on ', securityDate);
        expect(marketCapSecurityPage).toEqual(marketCapQuotePage);
    });
});