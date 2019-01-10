const tmpl = document.createElement('template');
tmpl.innerHTML = `
    <style>
    .checkbox {
        border: 2px black solid;
        display: inline;
        padding:10px;
        cursor: pointer;
    }

    .checkbox-checked {
        background-color: LightSteelBlue
    }
    </style>

    <div class="checkbox"></div>
`;


export class CustomCheckboxElement extends HTMLElement {

    _checked: boolean = false;
    _label: string;
    _clicked: EventListener;

    get checked() { return this._checked; }
    set checked(value: boolean) { 
        this._checked = value 
        const checkbox = this.shadowRoot.querySelector('.checkbox');        
        
        if (value) {
            checkbox.classList.add('checkbox-checked');
        }
        else {
            checkbox.classList.remove('checkbox-checked');
        }

    }

    get label() { return this._label; }
    set label(value: string) { 
        this._label = value; 

        const checkbox = this.shadowRoot.querySelector('.checkbox');
        checkbox.textContent = value;
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
        this.label = 'Yes or No?';
    }

    static get observedAttributes() {
        return ['label', 'checked'];
    }


    connectedCallback() {
        
        const checkbox = this.shadowRoot.querySelector('.checkbox');        
        
        this._clicked = () => {
            this.checked = !this.checked;
            
            // TODO: Dispatch a changed event with detail: this.checked here.
        };

        checkbox.addEventListener('click', this._clicked);
    }

    disconnectedCallback() {
        const checkbox = this.shadowRoot.querySelector('.checkbox');        
        checkbox.removeEventListener('click', this._clicked);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'label') {
            this.label = newValue;
        }
        else if (name == 'checked') {
            this.checked = newValue;
        }
    }

}

