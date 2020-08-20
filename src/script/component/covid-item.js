
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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }           
        
        </style>

        <div class="covid-info card mx-auto shadow-sm p-3 m-3 bg-white rounded">
            <h2 class="card-title">${this._covid.countryRegion}</h2>
            <p class="card-text bg-warning text-white p-1">Confirmed: ${this._covid.confirmed}</p>
            <p class="card-text bg-success text-white p-1">Recovered: ${this._covid.recovered}</p>
            <p class="card-text bg-danger text-white p-1">Deaths: ${this._covid.deaths}</p>
        </div>
        `;

    }
}

customElements.define("covid-item", CovidItem);