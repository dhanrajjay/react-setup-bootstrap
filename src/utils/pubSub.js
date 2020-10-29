const subscribersList = {};
function initSubscriber(eventName, callback) {
    if(eventName && !subscribersList[eventName]) {
         subscribersList[eventName] = {};
         subscribersList[eventName].cb = callback;
    }
}
export function unsubscribe(eventName) {
    if (subscribersList[eventName]) {
        delete subscribersList[eventName];
    }
}
export function subscribe(eventName, callback) {
    initSubscriber(eventName, callback);
}

export function publish(eventName, data) {
    if (!subscribersList[eventName])
        return;
    subscribersList[eventName].cb(data);
}