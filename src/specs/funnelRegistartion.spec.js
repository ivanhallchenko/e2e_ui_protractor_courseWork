const funnelPage = require ('../pages/funnelPage');
const testData = require ('../testData/testData');
const {browser} = require("protractor");

describe('Funnel lead registration', function() {
    it('Load funnel page', function() {
        //browser.sleep(5000);
        funnelPage.get();
        expect(browser.getTitle()).toEqual("Floralital Marketing");
    });

    it('Register user', function() {
        funnelPage.setSearchFirstName(testData.firstName);
        funnelPage.setSearchLastName(testData.lastName);
        funnelPage.chooseCountryPrefix();
        funnelPage.setCountryPrefix();
        funnelPage.setSearchPhone(testData.phoneNumber);
        funnelPage.setSearchEmail(testData.email);
        funnelPage.checkBoxIsTrue();
        funnelPage.clickRegisterButton();
        browser.sleep(5000);
        expect(funnelPage.searchPopupTitle()).toEqual(testData.popupText);
        //browser.sleep(5000);
    });
});
