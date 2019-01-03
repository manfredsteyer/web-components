
export class HelloWorldElement extends HTMLElement {

    _name: string;
    
    get name() { 
        return this._name; 
    }

    set name(value: string) { 
        this._name = value; 
        this.updateNameBinding();
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        
        this.shadowRoot.innerHTML = `
            <style>
                #main {
                    border: 2px solid black;
                    padding: 20px;
                    margin: 20px;
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

    _counter = 0;

    connectedCallback() {
        const main = this.shadowRoot.getElementById('main');
        main.addEventListener('click', () => {
            this._counter++;
            this.dispatchEvent(new CustomEvent('counted', { detail: this._counter}))
        });
    }

    disconnectedCallback() {
        // Remove EventListener here, 
        // e. g. main.removeEventListener(...)
    }

    private updateNameBinding() {
        const main = this.shadowRoot.getElementById('main');
        main.innerText = 'Hello ' + this.name;
    }
}

customElements.define('hello-world', HelloWorldElement);