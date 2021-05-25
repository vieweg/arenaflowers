#!/usr/bin/env node

const fs = require('fs');
const https = require('https');

// Receives submitted arguments
const args = process.argv.slice(2);

https.get(`https://restcountries.eu/rest/v2/name/${args[0]}`, (response) => {

  let data = '';
  const path = './src/countries';

  if (response.statusCode === 200){
    // Joins the pieces of text received
    response.on('data', (chunk) => {
      data += chunk;
    });

    // Treat the data received at the end of the transmission
    response.on('end', () => {

      // Convert data in JSON
      const parsedData = JSON.parse(data);

      // Filters the data to take only specific fields from European countries
      const countries = {
        results: parsedData.filter(item => item.region === 'Europe').map(item => ({countryName: item.name, capital: item.capital}))
      }
      
      if(countries.results.length > 0){
        // Convert to string and save the file
        fs.writeFile(`${path}/${args[0]}.json`, JSON.stringify(countries), 'utf8', function (err) {
          if (err) return console.log(err);
          console.log(`${args[0]} Countrie(s) > ${path}/${args[0]}.json`);
        });
      }

    });
  } else {
    console.log(`Country ${args[0]}, not located or outside the region of europe`)
  }
  

}).on("error", (err) => {
  console.log("Error: " + err.message);
});