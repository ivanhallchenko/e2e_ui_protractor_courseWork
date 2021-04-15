const getRandomEmail = require("../helpers/getRandomEmail");
const testData = {
    firstName: "Tester",
    lastName: "Testing",
    fullName: "Tester Testing",
    phoneNumber: "123123123",
    email: getRandomEmail(),
    popupText: "¡Gracias por registrarse!"
}
module.exports = testData;
