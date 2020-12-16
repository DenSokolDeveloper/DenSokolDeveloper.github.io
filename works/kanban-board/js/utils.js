export const InsertPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
};

export const StateActions = {
    TASK_CREATE: 'task-create',
    TASK_UPDATE_TITLE: 'task-update-title',
    TASK_UPDATE_POSITION: 'task-update-position',
    TASK_DELETE: 'task-delete',
    BASKET_CLEANUP: 'basket-cleanup',
};
export const Status = {
    BACKLOG: 'backlog',
    PROCESSING: 'processing',
    DONE: 'done',
    BASKET: 'basket',
};

export const STATE_EMPTY = 'empty';

export const Text = {
    EMPTY_TASK: 'Перетащите карточку',
    EMPTY_BASKET: 'Корзина пуста',
    NEW_TASK: 'Новая задача',
};

export const MIN_TITLE_LENGTH = 2;

export const StatusLabel = {
    [Status.BACKLOG]: 'Бэклог',
    [Status.PROCESSING]: 'В процессе',
    [Status.DONE]: 'Готово',
    [Status.BASKET]: 'Корзина',
};

export function createElement(template) {
    const element = document.createElement(`div`);
    element.innerHTML = template;

    return element.firstChild;
}

export function renderElement(container, element, insertPosition = InsertPosition.BEFOREEND) {
    switch (insertPosition) {
        case (InsertPosition.BEFOREEND):
            container.append(element);
            break;
        case (InsertPosition.AFTERBEGIN):
            container.prepend(element);
            break;
    }
}

export function renderContent(container, content, place = InsertPosition.BEFOREEND) {
    container.insertAdjacentHTML(place, content);
}

export function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

export function getRandomInteger(max, min = 0) {
    return min + Math.floor(Math.random() * (max + 1 - min));
}

export function getRandomArrayElement(arr) {
    return arr[getRandomInteger(arr.length - 1)];
}
