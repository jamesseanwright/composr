# Composr

Composr is a proof-of-concept library for declaratively manipulating the DOM via function composition. I wrote this on CodePen before adapting it for my [Manchester Frontend Meetup](https://www.meetup.com/Manchester-Frontend-Meetup/) talk, _Bundling ES Modules for Frontend Web Apps_.

```js
import {
    composeElement,
    setDomAttribute,
    withChildren,
    setText,
    applyClassToElement,
    mount,
} from '../';

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
```

## Local development

First, you'll need to run:

```shell
git clone https://github.com/jamesseanwright/composr.git
cd composr
nvm install/use
npm i
```

Then run one of the following scripts:

* `npm run dev` - builds the source and example app, and then starts the server
* `npm test` - runs the unit tests

The `npm run build` script will generate respective ES module and CommonJS builds, which are consumed in the `example` app across two separate entry points.

Within the example app's `index.html` page, one can replace `es` with `cjs` in the sole `script` element to switch between the bundles; they are functionally identical.
