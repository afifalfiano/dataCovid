
const lastUpdate = document.querySelector('#lastUpdate');
const countryCovid = document.querySelector('#countryCovid');
const recoveryCovid = document.querySelector('#recoveryCovid');
const deadCovid = document.querySelector('#deadCovid');
const containerItem = document.querySelector('#containerItem');
const searchElement = document.querySelector('#searchElement');

// Get Data Public
fetch('https://covid19.mathdro.id/api', {
    method: 'GET'
})
.then(response => {
    return response.json()
})
.then(responseJson => {
    lastUpdate.textContent = responseJson.lastUpdate;
});

// Get Data Convirmed
fetch('https://covid19.mathdro.id/api/confirmed', {
    method: 'GET'
})
.then(response => {
    return response.json();
})
.then(responseJson => {
    const data = responseJson;
    data.forEach(item => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card mx-auto p-3 m-3');
        card.style = `width: 12rem`;

        const h5 = document.createElement('h5');
        h5.setAttribute('class', 'card-title');
        h5.textContent = item.countryRegion;

        const confirmed = document.createElement('p');
        confirmed.setAttribute('class', 'card-text');
        confirmed.textContent = item.confirmed;

        const recovered = document.createElement('p');
        recovered.setAttribute('class', 'card-text');
        recovered.textContent = item.recovered;

        const deaths = document.createElement('p');
        deaths.setAttribute('class', 'card-text');
        deaths.textContent = item.deaths;
        // countryCovid.textContent = item.countryRegion;

        containerItem.appendChild(card);
        card.appendChild(h5);
        card.appendChild(confirmed);
        card.appendChild(recovered);
        card.appendChild(deaths);
    });
})


// document.addEventListener("DOMContentLoaded", main);