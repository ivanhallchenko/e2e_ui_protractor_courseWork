const countries = require("../testData/countriesId");

const country = countries[Object.keys(countries)[Math.floor(Math.random()*Object.keys(countries).length)]];

module.exports = country;
