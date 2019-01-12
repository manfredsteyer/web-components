
export class HelloWorldElement extends HTMLElement {

    _name: string;
    
    get name() {    
        return this._name; 
    }

    set name(value: string) { 
        this._name = value; 

        const main = this.shadowRoot.getElementById('main');
        main.innerText = 'Hello ' + this.name;
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML = `
            <style>

                #main {
                    padding-left: 20px;
                    padding-top: 50px;
                    margin: 20px;
                    background-image: url(/assets/badge.png);
                    background-repeat: no-repeat;
                    width:200px;
                    height:100px;
                    font-color: black;
                    font-size:20px;
                    font-family: 'Amaranth', sans-serif;
                }
            </style>
            <div id="main"></div>
        `;
    }

    static get observedAttributes() {
        return ['name'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {
            this.name = newValue;
        }
    }

}

customElements.define('hello-world', HelloWorldElement);