import { notify } from './notifier.js';
import { order } from './grocer.js';

export function onSuccess() {
    notify({ message: 'SUCCESS' });
}

export function onError() {
    notify({ message: 'ERROR' });
}

export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
    order(query, onSuccessCallback, onErrorCallback);
}

export function postOrder(variety, quantity) {
    orderFromGrocer({ variety, quantity }, onSuccess, onError);
}