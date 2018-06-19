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
    // TODO: make into a proxy and remove this crap!
    element[`${eventName}Subscription`] = handler;
    return element;
};

export const notify = source => ({ type, target }) => {
    (source[`${type}Subscription`] || (() => undefined))(target);
};

export const onEvent = func => ({ target }) => func(target);

export const mount = (sourceElement, targetElement) => {
    targetElement.appendChild(sourceElement);
};
