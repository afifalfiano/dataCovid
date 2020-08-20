
import '../component/section-bar.js';
import '../component/covid-list.js';
import '../component/footer-bar.js';
import DataSource from '../data/data-source.js';


const main = () => {
    const searchElement = document.querySelector("section-bar");
    const covidListElement = document.querySelector("covid-list");
    const lastUpdateElement = document.getElementById('lastUpdate');

    const onButtonSearchClicked = () => {
        DataSource.searchInfo(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    };

    const renderResult = results => {
      const sliceArray = results.splice(100, 3843).sort();
      console.log(results);
      console.log(sliceArray);
      covidListElement.covids = sliceArray;
    }

    const fallbackResult = message => {
        covidListElement.renderError(message);
    }

    searchElement.clickEvent = onButtonSearchClicked;
}


export default main;