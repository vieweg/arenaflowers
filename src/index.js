import "./styles.css";

const form = document.getElementById('form');
const errorMessage = document.getElementById('error-msg');
const btnShowCapital = document.getElementById('show-capital');
const table = document.getElementById('result');

// prevents standard form submission
form.addEventListener('submit', e => e.preventDefault());

// listening event click at button
btnShowCapital.addEventListener("click", () => {
  // Get value of input form
  const country = form.elements['country'].value;
  try {
    // load JSON
    const json = require(`../src/countries/${country}`);
    // Checks if JSON is present
    if(typeof json === 'object' && json.results.length > 0){
      errorMessage.innerHTML = "";
      // Add new row at table for each result
      json.results.map(item => {
        const newRow = table.insertRow();

        const newCellCountryName = newRow.insertCell();
        const newCellCountryCapital = newRow.insertCell();

        const newTextCountryName = document.createTextNode(item.countryName);
        const newTextCountryCapital = document.createTextNode(item.capital);

        newCellCountryName.appendChild(newTextCountryName);
        newCellCountryCapital.appendChild(newTextCountryCapital);
      })
    }
  } catch (error) {
    errorMessage.innerHTML = "The requested country was not found in the .JSON files, make sure to previously execute the CLI import command, described in part 1 of the test.";   
  }
}, false);

