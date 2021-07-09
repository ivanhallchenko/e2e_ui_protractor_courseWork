const getRandomEmail = require("../helpers/getRandomEmail");

const testDataRegister = {
  firstName: "Tester",
  lastName: "Testing",
  fullName: "Tester Testing",
  phoneNumber: "123123123",
  email: getRandomEmail()
}
const popupTexts = {
  popupTextES: "¡Gracias por registrarse!",
  popupTextEN: "EN TEST",
}

module.exports = {testDataRegister, popupTexts};
//module.exports = popupTexts;


