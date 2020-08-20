
import '../component/section-bar.js';
import '../component/covid-list.js';
import '../component/footer-bar.js';
import DataSource from '../data/data-source.js';


const main = () => {
    const searchElement = document.querySelector("section-bar");
    const covidListElement = document.querySelector("covid-list");
    const lastUpdateElement = document.getElementById('lastUpdate');

    const onButtonSearchClicked = () => {
        console.log(searchElement.value);
        DataSource.searchInfo(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    };

    const renderResult = results => {
    //   const sliceArray = results.splice(50, 3843).sort();
      covidListElement.covids = results;
    }

    const renderUpdate = results => {
        const cutString = results.lastUpdate.substring(0, 10);
        lastUpdateElement.textContent = 'Last Update : ' + cutString;
    }

    const lastUpdate = () => {
        DataSource.lastUpdate()
        .then(renderUpdate)
        .catch(fallbackResult);
    }

    const fallbackResult = message => {
        covidListElement.renderError(message);
    }

    lastUpdate();
    DataSource.dataCovid().then(renderResult).catch(fallbackResult);
    searchElement.clickEvent = onButtonSearchClicked;



    
    // console.log(data);
    
}


export default main;