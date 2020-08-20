import "regenerator-runtime";
import "./style/style.css"; 
import main from './script/view/main.js';

document.addEventListener("DOMContentLoaded", main);








// const lastUpdate = document.querySelector('#lastUpdate');
// const countryCovid = document.querySelector('#countryCovid');
// const recoveryCovid = document.querySelector('#recoveryCovid');
// const deadCovid = document.querySelector('#deadCovid');
// const containerItem = document.querySelector('#containerItem');
// const searchElement = document.querySelector('#searchElement');
// let dataItem = [];
// let dataPagination = [];





// // Get Data Public
// function getLastUpdate() {
//     fetch('https://covid19.mathdro.id/api', {
//     method: 'GET'
//     })
//     .then(response => {
//     return response.json()
//     })
//     .then(responseJson => {
//         const lastUpdated = 'Last Updated: ' + responseJson.lastUpdate.substring(0, 10);
//         lastUpdate.textContent = lastUpdated;
//     });
// }

// // Get Data Convirmed
// function getData() {
//     fetch('https://covid19.mathdro.id/api/confirmed', {
//     method: 'GET'
//     })
//     .then(response => {
//     return response.json();
//     })
//     .then(responseJson => {
//         dataItem = responseJson;
//         dataItem.forEach(item => {
//             const card = document.createElement('div')
//             card.setAttribute('class', 'card mx-auto shadow-sm p-3 m-3 bg-white rounded');
//             card.id = 'cardData';
//             card.style = `width: 12rem; margin-right: 1.2rem;`;

//             const h5 = document.createElement('h5');
//             h5.setAttribute('class', 'card-title');
//             h5.id = 'country'
//             h5.textContent = item.countryRegion;

//             const confirmed = document.createElement('p');
//             confirmed.setAttribute('class', 'card-text bg-warning text-white p-1');
//             confirmed.textContent = 'Confirmed: ' + item.confirmed;

//             const recovered = document.createElement('p');
//             recovered.setAttribute('class', 'card-text bg-success text-white p-1');
//             recovered.textContent = 'Recovered: ' + item.recovered;

//             const deaths = document.createElement('p');
//             deaths.setAttribute('class', 'card-text bg-danger text-white p-1');
//             deaths.textContent = 'Deaths: ' + item.deaths;
//             // countryCovid.textContent = item.countryRegion;

//             containerItem.appendChild(card);
//             card.appendChild(h5);
//             card.appendChild(confirmed);
//             card.appendChild(recovered);
//             card.appendChild(deaths);
//         });
//     }).catch(error => {
//         console.warn('Something went wrong.', error);
//         containerItem.innerHTML = 'Data Not Found!';
//     });
// }

// function testFunction() {
//     console.log('test');
// }

// getLastUpdate();
// getData();



// // document.addEventListener("DOMContentLoaded", main);