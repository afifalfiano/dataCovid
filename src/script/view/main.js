
import '../component/section-bar.js';
import '../component/covid-list.js';
import DataSource from '../data/data-source.js';


const main = () => {
    const searchElement = document.querySelector("section-bar");
    const covidVictims = document.querySelector("covid-list");

    const onBUttonSearchClicked = () => {
        DataSource.searchInfo(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    };

    const renderReusl = result => {

    }
}