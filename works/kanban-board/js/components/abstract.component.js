import {createElement} from '../utils.js';

export class AbstractComponent {
    constructor() {
        if (new.target === AbstractComponent) {
            throw new Error(`It's AbstractComponent, we dont need to create them!`);
        }
        this._element = null;
    }

    _getTemplate() {
        throw new Error(`It's AbstractComponent method, please implement it! `);
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this._getTemplate());
            this._afterCreateElement();
        }

        return this._element;
    }

    removeElement() {
        this._element = null;
        this._afterRemoveElement();
    }

    _afterCreateElement() {
        // abstract hook method
    }

    _afterRemoveElement() {
        // abstract hook method
    }
}
