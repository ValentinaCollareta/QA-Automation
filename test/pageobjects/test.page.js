import Page from './page';

class TestPage extends Page {
    get quote() {
        return $('//div[@class="_1jocgGqVNR HOcrWAfzU5 sc-htpNat iSNGhk sc-bdVaJa iHZvIS"]/input[@placeholder="Quote"]');
    }

    get search() {
        return $('//div[@class="_3XTsBmZSmj"]/div[2]');
    }

    get openValue() {
        return $('//div[@class="_1G7n38q1bb sc-bdVaJa lbvrig"][1]/p');
    }

    get marketCapValue() {
        return $('//div[@class="_1G7n38q1bb sc-bdVaJa lbvrig"][11]/p');
    }

    get marketCapValueSDP() {
        return $('//div[@class="_8AXJn4ourf sc-htpNat jtWIOA sc-bdVaJa gRrvFh"]/div[@class="sc-bdVaJa kYmYWE"]');
    }

    get date() {
        return $('//div[@class="_8AXJn4ourf sc-htpNat jtWIOA sc-bdVaJa gRrvFh"]/div[@class="sc-bdVaJa fKInnm"]');
    }

    get companyName() {
        return $('//div[@class="_33MgosRhnB sc-htpNat pyeRb sc-bdVaJa bVTGsP"]/h1');
    }

    open() {
        return super.open();
    }
}

export default new TestPage();
