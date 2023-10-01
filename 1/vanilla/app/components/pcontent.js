export const pc = (c) => {
    const component = document.createElement('p');
    component.setAttribute("class", "read-the-docs");
    const content = document.createTextNode('Click on the Vite logo to learn more',);
    component.appendChild(content);
    c.appendChild(component);
}