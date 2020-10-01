#!/usr/bin/env node

const isCountry = require('is-country');
const { getCode } = require('country-list');
const axios = require('axios');


async function main() {
    const currentYear = new Date().getFullYear()
    let myArgs = process.argv.slice(2);

    if (await isCountry(myArgs)) {
        let countryIsoCode = getCode(myArgs.join());
        console.log(countryIsoCode);
        try {
            const response = await axios.get(`https://date.nager.at/api/v2/PublicHolidays/${currentYear}/${countryIsoCode}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log("Accepted country language: English")
    }
}

main();