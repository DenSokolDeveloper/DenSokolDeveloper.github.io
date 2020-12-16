import {AbstractComponent} from './abstract.component.js';

export class TaskComponent extends AbstractComponent {
    constructor(task) {
        super();
        this._task = task;
    }

    _getTemplate() {
        return (
            `<div class="taskboard__item task task--${this._task.status}" data-id="${this._task.id}">
                <p>${this._task.title}</p>
                <button aria-label="Изменить" class="task__edit" type="button"></button>
            </div>`
        );
    }

    _afterCreateElement() {
        this.makeTaskEditable();
        this.makeTaskDraggable();
    }

    makeTaskEditable() {
        const taskEditElement = this.getElement().querySelector('.task__edit');
        const taskTitleElement = this.getElement().querySelector('p');
        let startTextElement = taskTitleElement.innerText;

        taskEditElement.addEventListener(`click`, () => {
            if (this.getElement().classList.contains('task--active')) {
                this.getElement().classList.remove('task--active');
                taskTitleElement.removeAttribute('contenteditable');
                taskTitleElement.blur();
                this._task.title = taskTitleElement.innerText;
                startTextElement = taskTitleElement.innerText;
                window.taskService.updateTitle(this._task);
            } else {
                this.getElement().classList.add('task--active');
                taskTitleElement.contentEditable = true;
                taskTitleElement.focus();
            }
        });

        this.getElement().addEventListener(`keydown`, (evt) => {
            if (evt.keyCode === 13
                && evt.shiftKey === false
                && evt.ctrlKey === false
                && evt.altKey === false) {
                this.getElement().classList.remove('task--active');
                taskTitleElement.removeAttribute('contenteditable');
                taskTitleElement.blur();
                this._task.title = taskTitleElement.innerText;
                startTextElement = taskTitleElement.innerText;
                window.taskService.updateTitle((this._task));
            } else if (evt.keyCode === 27) {
                taskTitleElement.innerText = startTextElement;
                this.getElement().classList.remove('task--active');
                taskTitleElement.removeAttribute('contenteditable');
                taskTitleElement.blur();
                window.taskService.updateTitle((this._task));
            }
        });
    }

    makeTaskDraggable() {
        window.draggedElement = null;
        window.taskStatus = null;
        this._element.draggable = true;

        this.getElement().addEventListener('dragstart', () => {
            window.draggedElement = this.getElement();
            window.draggedElement.classList.add('task--dragged');
        });

        this.getElement().addEventListener('dragend', () => {
            const prevTaskId = this.getElement().previousElementSibling ? this.getElement().previousElementSibling.dataset.id : undefined;
            window.draggedElement.classList.remove('task--dragged');
            window.draggedElement = null;
            if (window.taskStatus) {
                this._task.status = window.taskStatus;
                window.taskService.updatePosition(this._task, prevTaskId);
            }
        });
    }
}
