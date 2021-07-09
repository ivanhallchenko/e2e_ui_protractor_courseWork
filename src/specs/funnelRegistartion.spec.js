const funnelPage = require('../pages/funnelPage');
const testDataCourseWork = require('../testData/testDataCourseWork');
const {browser} = require("protractor");

describe('Funnel lead registration', function () {
  it('Load funnel page', function () {
    funnelPage.get();
    expect(browser.getTitle()).toEqual("Floralital Marketing");
  });

  it('Register user', function () {
    funnelPage.setSearchFirstName(testDataCourseWork.testDataRegister.firstName);
    funnelPage.setSearchLastName(testDataCourseWork.testDataRegister.lastName);
    funnelPage.chooseCountryPrefix();
    funnelPage.setCountryPrefix();
    funnelPage.setSearchPhone(testDataCourseWork.testDataRegister.phoneNumber);
    funnelPage.setSearchEmail(testDataCourseWork.testDataRegister.email);
    funnelPage.clickRegisterButton();
    expect(funnelPage.searchPopupTitle()).toEqual(testDataCourseWork.popupTexts.popupTextES);
  });
});
