import {InsertPosition, renderElement, Text} from '../utils.js';
import {AbstractComponent} from './abstract.component.js';
import {FormComponent} from './form.component.js';

export class AddTaskComponent extends AbstractComponent {
    _getTemplate() {
        return (
            `<section class="add-task">
                <h2 class="visually-hidden">${Text.NEW_TASK}</h2>
            </section>`
        );
    }

    _afterCreateElement() {
        this._formComponent = new FormComponent(Text.NEW_TASK);

        renderElement(this.getElement(), this._formComponent.getElement(), InsertPosition.BEFOREEND);
    }
}
