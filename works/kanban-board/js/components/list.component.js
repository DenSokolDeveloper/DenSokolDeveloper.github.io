import {InsertPosition, renderElement, STATE_EMPTY, StateActions, Status, StatusLabel, Text} from '../utils.js';
import {AbstractComponent} from './abstract.component.js';
import {BasketCleanerComponent} from './basket-cleaner.component.js';
import {EmptyItemComponent} from './empty-item.component.js';
import {TaskComponent} from './task.component.js';

export class ListComponent extends AbstractComponent {
    constructor(status) {
        super();
        this._status = status;
        this._title = StatusLabel[status];
        this._tasks = window.taskService.getByStatus(status);
    }

    _getTemplate() {
        return (
            `<article class="taskboard__group taskboard__group--${this._status}">
                <h3 class="taskboard__group-heading taskboard__group-heading--${this._status}">${this._title}</h3>
                <div class="taskboard__list" id="${this._status}"></div>
            </article>`
        );
    }

    _afterCreateElement() {
        this.makeListDroppable();
        this.addEventListeners();

        if (this._status === Status.BASKET) {
            const basketCleanerComponent = new BasketCleanerComponent();
            const basketCleanerElement = basketCleanerComponent.getElement();
            renderElement(this.getElement(), basketCleanerElement, InsertPosition.BEFOREEND);
        }

        this._renderTasks();
    }

    addEventListeners() {
        window.addEventListener(StateActions.TASK_CREATE, this._onDataChanged.bind(this));
        window.addEventListener(StateActions.TASK_UPDATE_TITLE, this._onDataChanged.bind(this));
        window.addEventListener(StateActions.TASK_UPDATE_POSITION, this._onDataChanged.bind(this));
        window.addEventListener(StateActions.TASK_DELETE, this._onDataChanged.bind(this));
        window.addEventListener(StateActions.BASKET_CLEANUP, this._onDataChanged.bind(this));
        window.addEventListener('elementDragover', this._onElementDragover.bind(this));
    }

    makeListDroppable() {
        const listElement = this._element.querySelector('div.taskboard__list');

        listElement.addEventListener('dragover', this._dragoverHandler.bind(this, listElement));
    }

    _renderTasks() {
        this.getElement().lastChild.previousElementSibling.innerHTML = '';

        if (this._tasks.length > 0) {
            this._tasks.forEach(task => {
                const taskItemComponent = new TaskComponent(task);
                const taskItemElement = taskItemComponent.getElement();

                renderElement(this.getElement().lastChild.previousElementSibling, taskItemElement, InsertPosition.BEFOREEND);
            });
            if (this._tasks.length > 0 && this._status === Status.BASKET) {
                this.getElement().lastChild.removeAttribute('disabled');
            }
        } else if (this._tasks.length === 0 && this._status === Status.BASKET) {
            const emptyItemComponent = new EmptyItemComponent(Text.EMPTY_BASKET, this._status, STATE_EMPTY);
            const emptyItemElement = emptyItemComponent.getElement();
            this.getElement().lastChild.setAttribute('disabled', 'true');

            renderElement(this.getElement().lastChild.previousElementSibling, emptyItemElement, InsertPosition.BEFOREEND);
        } else {
            const emptyItemComponent = new EmptyItemComponent(Text.EMPTY_TASK, this._status, STATE_EMPTY);
            const emptyItemElement = emptyItemComponent.getElement();

            renderElement(this.getElement().lastChild.previousElementSibling, emptyItemElement, InsertPosition.BEFOREEND);
        }
    }

    _onDataChanged() {
        this._tasks = window.taskService.getByStatus(this._status);
        this._renderTasks();
    }

    _dragoverHandler(container, evt) {
        evt.preventDefault();

        const elementUnder = evt.target;

        if (elementUnder === window.draggedElement) {
            return;
        }

        if (elementUnder.classList.contains('task')) {
            console.log('ListComponent._dragoverHandler', this._tasks);
            window.taskService.elementDragover(window.draggedElement);

            container.insertBefore(
                window.draggedElement,
                elementUnder === window.draggedElement.nextElementSibling ? elementUnder.nextElementSibling : elementUnder,
            );

            window.taskStatus = this._extractStatus(elementUnder);
        }

        console.log('ListComponent._dragoverHandler', window.taskStatus);
    }

    _extractStatus(element) {
        if (element.classList.contains('task--backlog')) {
            return Status.BACKLOG;
        } else if (element.classList.contains('task--processing')) {
            return Status.PROCESSING;
        } else if (element.classList.contains('task--done')) {
            return Status.DONE;
        } else if (element.classList.contains('task--basket')) {
            return Status.BASKET;
        }
    }

    _onElementDragover() {
        const status = this._extractStatus(document.querySelector('.task--dragged'));
        if (this._tasks.length === 0) {
            const emptyElement = this.getElement().querySelector(`.task--${STATE_EMPTY}`);
            if (window.taskStatus === null) {
            //     hide emptyElement
                emptyElement.style.display='none';
            } else if (window.taskStatus === status) {
                // show emptyElement
                emptyElement.style.display='none';
            } else {
                emptyElement.style.display='block';
            }
            console.log('ListComponent._onElementDragover', window.taskStatus);
        }
    }
}
