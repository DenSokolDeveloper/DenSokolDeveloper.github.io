import {InsertPosition, renderElement, Status} from '../utils.js';
import {AbstractComponent} from './abstract.component.js';
import {ListComponent} from './list.component.js';

export class BoardComponent extends AbstractComponent {
    _getTemplate() {
        return (
            `<section class="taskboard">
                <h2 class="visually-hidden">Ваши задачи:</h2>
            </section>`
        );
    }

    _afterCreateElement() {
        Object.values(Status).forEach((status) => {
            const tasklistComponent = new ListComponent(status);
            const tasklistElement = tasklistComponent.getElement();

            // tasklistComponent.makeListDroppable();

            renderElement(this.getElement(), tasklistElement, InsertPosition.BEFOREEND);
        });
    }
}
