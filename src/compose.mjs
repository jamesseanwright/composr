export const composeElement = (...funcs) => elementType => (
    funcs.reduce(
        (result, func) => func(result),
        document.createElement(elementType),
    )
);

export const withChildren = (...children) => element => {
    children.forEach(child => element.appendChild(child));
    return element;
};
