import {AddTaskComponent} from './components/add-task.component.js';
import {BoardComponent} from './components/board.component.js';
import {HeaderComponent} from './components/header.component.js';
import {TasksService} from './services/task.service.js';
import {InsertPosition, renderElement} from './utils.js';

export class App {
    constructor() {
        window.taskService = new TasksService();
    }

    init() {
        const headerComponent = new HeaderComponent('Канбан-доска');
        const headerElement = headerComponent.getElement();
        const bodyElement = document.querySelector('body.board-app');

        renderElement(bodyElement, headerElement, InsertPosition.AFTERBEGIN);

        const addTaskComponent = new AddTaskComponent();
        const addTaskElement = addTaskComponent.getElement();

        const boardAppInnerElement = document.querySelector('main>div.board-app__inner');

        const taskboardComponent = new BoardComponent();
        const taskboardElement = taskboardComponent.getElement();

        renderElement(boardAppInnerElement, addTaskElement, InsertPosition.AFTERBEGIN);
        renderElement(boardAppInnerElement, taskboardElement, InsertPosition.BEFOREEND);
    }
}
