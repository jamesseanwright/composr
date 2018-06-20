'use strict';

const {
    composeElement,
    setDomAttribute,
    withChildren,
    setText,
    applyClassToElement,
    mount,
} = require('../');

const app = composeElement(
    withChildren(
        composeElement(
            setText('Hello!'),
            applyClassToElement('greeting'),
            applyClassToElement('greeting--large'),
        )('h1'),

        composeElement(
            withChildren(
                composeElement(
                    setText('My Dog'),
                )('h2'),

                composeElement(
                    setDomAttribute('src', 'https://goo.gl/DHwuqw'),
                )('img'),

                composeElement(
                    setText('Here\'s a picture of my dog.'),
                )('p'),
            )
        )('section'),
    ),
)('main');

mount(app, document.body);
