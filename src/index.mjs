export const setText = text => element => {
    element.textContent = text;
    return element;
};

export const setDomAttribute = (name, value) => element => {
    element[name] = value;
    return element;
};

export const applyClassToElement = className => element => {
    element.classList.add(className);
    return element;
};

export const addEventListener = (eventName, handler) => element => {
    element.addEventListener(eventName, handler);
    return element;
};

export const onEventNotification = (eventName, handler) => element => {
    // TODO: replace to allow multiple subscriptions
    element[`${eventName}Subscription`] = handler;
    return element;
};

export const notify = source => ({ type, target }) => {
    // TODO: replace to allow multiple subscriptions
    (source[`${type}Subscription`] || (() => undefined))(target);
};

export const onEvent = func => ({ target }) => func(target);

export const mount = (sourceElement, targetElement) => {
    targetElement.appendChild(sourceElement);
};

export const composeElement = (...funcs) => elementType => (
    funcs.reduce(
        (result, func) => func(result),
        document.createElement(elementType),
    )
);

export const withChildren = (...children) => element => {
    children.forEach(child => mount(child, element));
    return element;
};
