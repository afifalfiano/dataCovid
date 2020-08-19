
class SectionBar extends HTMLElement {
    constructor() {
        super();
        this._shadowDom = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowDom.innerHTML =
        `
        <style>
        @import '../../node_modules/bootstrap/dist/css/bootstrap.css';
        .header {
            /* background-color: #212529; */
            padding-bottom: 7em;
        }
        </style>
        
        <div class="jumbotron jumbotron-fluid header">
        <div class="container">
            <h1 class="display-3 mb-4 text-center">Info Covid</h1>
            
            <!-- Search -->
            <form class="form-inline d-flex justify-content-center">
                <i class="fas fa-search" aria-hidden="true"></i>
                <input class="form-control mr-sm-2 w-50 active-pink" type="search" id="searchElement" placeholder="Cari Data Terdampak Covid" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" id="searchButtonElement" type="submit">Search</button>
              </form>
            <!-- End Search -->

        </div>
    </div>
        `;
    }
}

customElements.define('section-bar', SectionBar)