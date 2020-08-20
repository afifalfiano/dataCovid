import './covid-item.js';
class CovidList extends HTMLElement{
    constructor() {
        super();
        this._shadowDom = this.attachShadow({mode: 'open'});
    }

    set covids(covids) {
        this._covids = covids;
        this.render();
    }

    render() {
        this._shadowDom.innerHTML = 
        `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
         }
        </style>
        `
        this._covids.forEach(covid => {
            const covidItemElement = document.createElement("covid-item");
            covidItemElement.covid = covid;
            this._shadowDom.appendChild(covidItemElement);
        })
    }

    renderError(message) {
        this._shadowDom.innerHTML = "";
        this._shadowDom.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
}

customElements.define("covid-list", CovidList);