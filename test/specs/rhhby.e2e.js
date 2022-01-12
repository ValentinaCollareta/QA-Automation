import TestPage from '../pageobjects/test.page';

let openValue, marketCapQuotePage, marketCapSecurityPage, companyName, companySymbol, securityDate;

describe('My Test 2', () => {
    beforeAll('QA Automation', async () => {
        await TestPage.open();
    });
    it('should return “RHHBY” quote in quote textbox & search', async () => {
        await TestPage.quote.waitForDisplayed();
        await TestPage.quote.setValue('RHHBY');
        await TestPage.search.waitForClickable();
        await TestPage.search.click();
    });
    it('should navigate to Quote tab', async () => {
        await browser.waitUntil(() => TestPage.quoteTab.isClickable());
        await TestPage.quoteTab.click();
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