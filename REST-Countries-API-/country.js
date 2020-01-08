'use strict'

function getCountryDetail() {
    const country = JSON.parse(decodeURIComponent(sessionStorage.getItem('country')));
    const countryInfo = document.getElementById('countryInfo')

    let output = '';
    output += `
        <div id="countryInfo">
            <img src=${country.flag}> 
            <h3><strong>${country.name}</strong></h3>
            <ul class="groupOne">
                <li><strong>Native Name:</strong>${country.nativeName}</li>
                <li><strong>Population:</strong>${country.population}</li>
                <li><strong>Region:</strong>${country.region}</li>
                <li><strong>Sub Region:</strong>${country.subregion}</li>
                <li><strong>Capital:</strong>${country.capital}</li>
            </ul>
            <ul class="groupTwo">
                <li><strong>Top Level Domain:</strong>${country.topLevelDomain}</li>
                <li><strong>Currencies:</strong>${country.currencies[0].name}</li>
                <li><strong>Languages:</strong>${country.languages[0].name}</li>
            </ul>
        </div>    
    `;
    countryInfo.innerHTML = output;
    fetchBorderDetail(country);
}
window.onload = getCountryDetail;

function fetchBorderDetail(country) {
    const allCountriesData = JSON.parse(decodeURIComponent(sessionStorage.getItem('allCountriesData')));
    // console.log(allCountriesData)
    // console.log(country.borders);
    const borderCountries = allCountriesData.filter(countryData =>
        country.borders.includes(countryData.alpha3Code));

    console.log(borderCountries)
    let output = '';
    borderCountries.forEach(country => {
        output += `
            <li><a href="#" data-country="${encodeURIComponent(JSON.stringify(country))}">${country.name}</a></li>
        `;
    })
    document.getElementById('borderInfo').innerHTML = output;
    document.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', (event) => {
            sessionStorage.setItem('country', event.currentTarget.dataset.country);
            window.location = 'country.html'
        })
    })
}

document.querySelector('#backButton').addEventListener('click', (event) => {
    window.location = 'index.html';
})