const country = require("../helpers/getRandomCountryId");
const urls = require("../testUrls/testUrls")
const {by} = require("protractor");
const {browser} = require("protractor");
const {element} = require("protractor");
const expectedConditionsHelper = require("../helpers/expectedConditionsHelper")
const searchFirstNameInput = element(by.id('first_name'));
const searchLastNameInput = element(by.id('last_name'));
const searchPhoneInput = element(by.id('phone_num'));
const searchEmailInput = element(by.id('user_email'));
const searchRegisterButton = element(by.id('lead-form-submit'));
const popupTitle = element(by.className('nrp__t1'));
const clickOnCountriesDropDown = element(by.className('iti__selected-flag'));
const chooseCountryPrefix = element(by.xpath(country));

const FunnelPage = function () {
  this.get = function () {
    browser.get(urls.funnelMainPage);
  };

  this.setSearchFirstName = function (value) {
    searchFirstNameInput.sendKeys(value);
  };

  this.setSearchLastName = function (value) {
    searchLastNameInput.sendKeys(value);
  };

  this.chooseCountryPrefix = function () {
    expectedConditionsHelper.waitElementToBeClickable(clickOnCountriesDropDown);
    clickOnCountriesDropDown.click();
  };

  this.setCountryPrefix = function () {
    chooseCountryPrefix.click();
  };

  this.setSearchPhone = function (value) {
    searchPhoneInput.sendKeys(value);
  };

  this.setSearchEmail = function (value) {
    searchEmailInput.sendKeys(value);
  };

  this.clickRegisterButton = function () {
    searchRegisterButton.click();
  };

  this.searchPopupTitle = async function () {
    await expectedConditionsHelper.waitElementToBeClickable(popupTitle);
    return popupTitle.getText();
  }

};
module.exports = new FunnelPage();
