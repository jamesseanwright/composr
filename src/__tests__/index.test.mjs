import * as composr from '../';

describe('Composr', () => {
    describe('setText', () => {
        it('should set the text of a particular element', () => {
            const element = composr.composeElement(
                composr.setText('Hello!')
            )('p');

            expect(element.textContent).toEqual('Hello!');
        });
    });

    describe('setDomAttribute', () => {
        it('should set the specified DOM attribute', () => {
            const element = composr.composeElement(
                composr.setDomAttribute('src', 'https://foo/')
            )('img');

            expect(element.src).toEqual('https://foo/');
        });
    });

    describe('applyClassToElement', () => {
        it('should apply the given class name to the element', () => {
            const element = composr.composeElement(
                composr.applyClassToElement('some-class')
            )('p');

            expect(element.classList.contains('some-class')).toBe(true);
        });
    });

    describe('addEventListener', () => {
        it('should apply the given class name to the element', () => {
            const handler = () => undefined;
            const eventListenerStub = jest.fn();

            const assignStub = element => {
                element.addEventListener = eventListenerStub;
                return element;
            };

            composr.composeElement(
                assignStub,
                composr.addEventListener('click', handler),
            )('p');

            expect(eventListenerStub).toHaveBeenCalledTimes(1);
            expect(eventListenerStub).toHaveBeenCalledWith('click', handler);
        });
    });

    describe('mount', () => {
        it('should mount the element to the given container', () => {
            const sourceElement = composr.composeElement()('div');
            const targetElement = composr.composeElement()('div');

            composr.mount(sourceElement, targetElement);

            expect(targetElement.children.length).toEqual(1);
            expect(targetElement.firstChild).toEqual(sourceElement);
        });
    });

    describe('withChildren', () => {
        it('should mount multiple child elements', () => {
            const children = [
                composr.composeElement()('div'),
                composr.composeElement()('div'),
                composr.composeElement()('div'),
            ];

            const targetElement = composr.composeElement(
                composr.withChildren(...children)
            )('div');

            expect(targetElement.children.length).toEqual(3);
            children.forEach((child, i) => expect(targetElement.children[i]).toEqual(child));
        });
    });
});
