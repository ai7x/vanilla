export const hello = (c) => {
    const component = document.createElement('h1');
    const content = document.createTextNode('Hello Vite!',);
    component.appendChild(content);
    c.appendChild(component);
}