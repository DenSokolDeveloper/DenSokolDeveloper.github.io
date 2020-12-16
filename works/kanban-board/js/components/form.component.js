import {MIN_TITLE_LENGTH} from '../utils.js';
import {AbstractComponent} from './abstract.component.js';

export class FormComponent extends AbstractComponent {
    constructor(label) {
        super();
        this._label = label;
    }

    _getTemplate() {
        return (
            `<form aria-label="Форма добавления задачи" class="add-task__form">
                <div class="add-task__input-wrapper">
                    <label for="add-task">${this._label}</label>
                    <input id="add-task" name="task-name" placeholder="Название задачи..." type="text">
                </div>
                <button class="add-task__button button" type="submit">
                    <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="white" height="14.6667" width="1.83333" x="10.0833" y="3.66663"/>
                        <rect fill="white" height="14.6667" transform="rotate(90 18.3333 10.0833)" width="1.83333" x="18.3333" y="10.0833"/>
                    </svg>
                    <span>Добавить</span>
                </button>
            </form>`
        );
    }

    _afterCreateElement() {
        this.addEventListeners();
    }

    addEventListeners() {
        this.getElement().addEventListener('submit', this.onFormSubmit.bind(this));
    }

    onFormSubmit(event) {
        event.preventDefault();

        const inputElement = this.getElement().querySelector('#add-task');
        const title = inputElement.value.trim();

        if (title.length > MIN_TITLE_LENGTH) {
            window.taskService.create({title});
            inputElement.value = '';
        } else {
            alert(`Минимальное количество символов для ввода ${MIN_TITLE_LENGTH}, вы ввели ${title.length}`);
        }
    }
}

