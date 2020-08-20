
class SectionBar extends HTMLElement {
    constructor() {
        super();
        this._shadowDom = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        console.log(this._shadowDom.querySelector('#searchElement').value);
        return this._shadowDom.querySelector('#searchElement').value;
    }

    render() {
        this._shadowDom.innerHTML =
        `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style>
        .header {
            /* background-color: #212529; */
            padding-bottom: 7em;
        }
        </style>
        
        <div class="jumbotron jumbotron-fluid header">
        <div class="container">
            <h1 class="display-3 mb-4 text-center">Info Covid</h1>
            
            <div class="form-inline d-flex justify-content-center sticky-top"" id="search-container">
                <i class="fas fa-search" aria-hidden="true"></i>
                <input class="form-control mr-sm-2 w-50 active-pink" type="search" id="searchElement" placeholder="Search Data Covid" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" id="searchButtonElement" type="submit">Search</button>
            </div>

        </div>
    </div>
        `;

        this._shadowDom.querySelector("#searchButtonElement").addEventListener('click', this._clickEvent);
    }
}

customElements.define('section-bar', SectionBar)