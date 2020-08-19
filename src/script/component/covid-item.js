
class CovidItem extends HTMLElement {
    constructor(){ 
        super();
        this._shadowDom = this.attachShadow({mode: 'open'});
    }

    set covid(covid) {
        this._covid = covid;
        this.render();
    }

    render() {
        this._shadowDom.innerHTML = 
        `
        <div class="covid-info">
            <h2>${this._covid.countryRegion}</h2>
            <p>${this._covid.confirmed}</p>
            <p>${this._covid.recovered}</p>
            <p>${this._covid.deaths}</p>

        `

    }
}

customElements.define("covid-item", CovidItem);