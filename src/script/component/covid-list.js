
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
        
        `
        this._covids.forEach(covid => {
            const covidItemElement = document.createElement("covid-item");
            covidItemElement = covid;
            this._shadowDom.appendChild(covidItemElement);
        })
    }

    renderError(message) {
        this._shadowDom.innerHTML = "";
        this._shadowDom.innerHTML += `<h2>${message}</h2>`
    }
}

customElements.define("covid-list", CovidList);