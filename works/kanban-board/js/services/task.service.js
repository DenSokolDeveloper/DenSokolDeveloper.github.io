import {generateId, StateActions, Status} from '../utils.js';

export class TasksService {
    tasks = [
        {id: '1', title: 'Выучить JS', status: Status.BACKLOG},
        {id: '2', title: 'Выучить React', status: Status.BACKLOG},
        {id: '3', title: 'Позвонить маме', status: Status.DONE},
        {id: '4', title: 'Выпить смузи', status: Status.PROCESSING},
        {id: '5', title: 'Сходить погулять', status: Status.BASKET},
        {id: '6', title: 'Перестать тупить', status: Status.PROCESSING},
        {id: '7', title: 'Сделать домашку', status: Status.BACKLOG},
        {id: '8', title: 'Прочитать Войну и Мир', status: Status.BASKET},
        {id: '9', title: 'Погладить Кекса', status: Status.DONE},
    ];

    create(task) {
        task.id = generateId();
        task.status = Status.BACKLOG;
        this.tasks.push(task);

        this._emitEvent(StateActions.TASK_CREATE, task);
    }

    updateTitle(task) {
        const taskIndex = this.tasks.findIndex((el) => el.id === task.id);

        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1, task);
        }
        this._emitEvent(StateActions.TASK_UPDATE_TITLE, task);
    }

    updatePosition(task, prevTaskId) {

        const taskIndex = this.tasks.findIndex((el) => el.id === task.id);

        if (prevTaskId !== undefined) {
            this.tasks.splice(taskIndex, 1);
            const prevTaskIndex = this.tasks.findIndex((el) => el.id === prevTaskId);
            this.tasks.splice(prevTaskIndex + 1, 0, task);
        } else {
            this.tasks.splice(taskIndex, 1);
            this.tasks.unshift(task);
        }
        this._emitEvent(StateActions.TASK_UPDATE_POSITION, task);
    }

    delete(task) {
        let taskIndex = this.tasks.findIndex(el => el.id === task.id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
        }

        this._emitEvent(StateActions.TASK_DELETE, task);
    }

    cleanupBasket() {
        this.tasks = this.tasks.filter(task => task.status !== Status.BASKET);
        this._emitEvent(StateActions.BASKET_CLEANUP);
    }

    getByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }

    elementDragover() {
        this._emitEvent('elementDragover');
    }

    _emitEvent(type, data) {
        // console.log('state updated', type, data, this.tasks);
        window.dispatchEvent(new CustomEvent(type, data));
    }
}
