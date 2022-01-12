import Page from './page';

class TestPage extends Page {
    get quote() {
        return $('//input[@placeholder="Quote"][1]');
    }

    get search() {
        return $('//input[@placeholder="Quote"]/parent::node()/following-sibling::div/div[1]/div[2]');
    }

    get companyName() {
        return $('h1:nth-child(1)');
    }

    get companySymbol() {
        return $('h1:nth-child(2)');
    }

    get quoteTab() {
        return $('a[href$="quote"]');
    }

    get securityDetailsTab() {
        return $('a[href$="security"]');
    }

    get openValue() {
        return $('//label[contains(.,"Open")]/following-sibling::p');
    }

    get marketCapQuotePage() {
        return $('div > span + p');
    }

    get marketCapSecurityPage() {
        return $('h4 + div > div:nth-child(2)');
    }

    get securityDate() {
        return $('h4 + div > div:nth-child(3)');
    }

    open() {
        return super.open();
    }
}

export default new TestPage();