import { setupCounter } from './counter.js'

export const card = (c) => {
    const component = document.createElement('div');
    component.setAttribute("class", "card");
    const b = document.createElement('button');
    b.setAttribute("id", "counter");
    b.setAttribute("type", "button");
    component.appendChild(b);
    c.appendChild(component);
    setupCounter(b);
}