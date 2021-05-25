## Arena Flowers JS Test

### Part 1

Create a basic Node command line script which consumes the REST Countries API -

http://restcountries.eu

Only returning countries that have the region value of **"Europe"**.
Which takes the argument of a **country name (or partial)**:
Eg node yourScript.js united
Then writes a JSON object to a .json file of just the Country **name** and **Capital city**, with the filename of the input.

Eg ./united.json

```JSON
{
  results: [
    {
      ountryName: "United Kingdom",
      capitalCity: "London"
    },
  ...
  ]
}
```

- To execute the code that corresponds to Part1 (Above), execute the commands below.

```bash
# install dependencies if you haven’t done it yet

yarn
# or
npm install

```

To consume the API and create the .JSON file, execute the command below:

```bash
# Replace the [countryName] parameter with the name of the country to search for.
# Eg. yarn country united

yarn country [countryName]
# or
npm run country [countryName]

```

After executing the command, if the country was found and belongs to Europe, the .json file will be stored in `./src/countries` and a confirmation will be displayed on the console, if it does not meet the specifications, a message will be displayed on the console.

### Part 2

Also create a basic frontend in HTML and ES6, which will take the input country name via a text field, load the matching .json file and then return a UL list of the countries and capitals below the field.
Be sure to use Babel to convert your ES6 code to production ready JS compatible with the following browsers: IE11, Edge 15, Chrome 65, Firefox 60, Safari 9

This test is designed so it shows us that you can interact with external APIs, build backend JS to process that data and also frontend JS to consume that sort of data, within our current stack.

- To execute the code that corresponds to Part2 (Above), execute the commands below.

```bash
# install dependencies if you haven’t done it yet

yarn
# or
npm install

```

To run the frontend execute the command below.

```bash

yarn start
# or
npm run start

```

This will run a local server that will be available at the URL `http://localhost:9000`

**Note:** it is necessary to execute part 1 of the test to make the .json files available in advance for this step to work properly for the proposed test.

Credits:
Rafael Vieweg [https://vieweg.dev](https://vieweg.dev)
