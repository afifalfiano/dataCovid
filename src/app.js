
const lastUpdate = document.querySelector('#lastUpdate');
const countryCovid = document.querySelector('#countryCovid');
const recoveryCovid = document.querySelector('#recoveryCovid');
const deadCovid = document.querySelector('#deadCovid');
const containerItem = document.querySelector('#containerItem');
const searchElement = document.querySelector('#searchElement');
let dataItem = [];
let dataPagination = [];





// Get Data Public
function getLastUpdate() {
    fetch('https://covid19.mathdro.id/api', {
    method: 'GET'
    })
    .then(response => {
    return response.json()
    })
    .then(responseJson => {
        const lastUpdated = 'Last Updated: ' + responseJson.lastUpdate.substring(0, 10);
        lastUpdate.textContent = lastUpdated;
    });
}

// Get Data Convirmed
function getData() {
    fetch('https://covid19.mathdro.id/api/confirmed', {
    method: 'GET'
    })
    .then(response => {
    return response.json();
    })
    .then(responseJson => {
        dataItem = responseJson;
        dataItem.forEach(item => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card mx-auto shadow-sm p-3 m-3 bg-white rounded');
            card.id = 'cardData';
            card.style = `width: 12rem; margin-right: 1.2rem;`;

            const h5 = document.createElement('h5');
            h5.setAttribute('class', 'card-title');
            h5.id = 'country'
            h5.textContent = item.countryRegion;

            const confirmed = document.createElement('p');
            confirmed.setAttribute('class', 'card-text bg-warning text-white p-1');
            confirmed.textContent = 'Confirmed: ' + item.confirmed;

            const recovered = document.createElement('p');
            recovered.setAttribute('class', 'card-text bg-success text-white p-1');
            recovered.textContent = 'Recovered: ' + item.recovered;

            const deaths = document.createElement('p');
            deaths.setAttribute('class', 'card-text bg-danger text-white p-1');
            deaths.textContent = 'Deaths: ' + item.deaths;
            // countryCovid.textContent = item.countryRegion;

            containerItem.appendChild(card);
            card.appendChild(h5);
            card.appendChild(confirmed);
            card.appendChild(recovered);
            card.appendChild(deaths);
        });
    }).catch(error => {
        console.warn('Something went wrong.', error);
        containerItem.innerHTML = 'Data Not Found!';
    });
}

function testFunction() {
    console.log('test');
}

console.log(dataPagination);
var current_page = 1;
var records_per_page = 2;

var objJson = [
    { adName: "AdName 1"},
    { adName: "AdName 2"},
    { adName: "AdName 3"},
    { adName: "AdName 4"},
    { adName: "AdName 5"},
    { adName: "AdName 6"},
    { adName: "AdName 7"},
    { adName: "AdName 8"},
    { adName: "AdName 9"},
    { adName: "AdName 10"}
]; // Can be obtained from another source, such as your objJson variable

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML += objJson[i].adName + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};




getLastUpdate();
getData();



// document.addEventListener("DOMContentLoaded", main);