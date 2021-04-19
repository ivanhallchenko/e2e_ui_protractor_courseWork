const funnelPage = require('../pages/funnelPage');
const testDataCourseWork = require('../testData/testDataCourseWork');
const {browser} = require("protractor");

describe('Funnel lead registration', function () {
  it('Load funnel page', function () {
    //browser.sleep(5000);
    funnelPage.get();
    expect(browser.getTitle()).toEqual("Floralital Marketing");
  });

  it('Register user', function () {
    funnelPage.setSearchFirstName(testDataCourseWork.firstName);
    funnelPage.setSearchLastName(testDataCourseWork.lastName);
    funnelPage.chooseCountryPrefix();
    funnelPage.setCountryPrefix();
    funnelPage.setSearchPhone(testDataCourseWork.phoneNumber);
    funnelPage.setSearchEmail(testDataCourseWork.email);
    funnelPage.checkBoxIsTrue();
    funnelPage.clickRegisterButton();
    browser.sleep(5000);
    expect(funnelPage.searchPopupTitle()).toEqual(testDataCourseWork.popupText);
    //browser.sleep(5000);
  });
});
