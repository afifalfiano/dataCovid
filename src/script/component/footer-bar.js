

class FooterBar extends HTMLElement{

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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <div class="row mx-auto bg-secondary fixed-bottom">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <p class="pt-2 text-white text-center">Data Covid from https://github.com/mathdroid/covid-19-api</p>
            </div>
        </div>
        
        `
    }
}

customElements.define('footer-bar', FooterBar)