import javascriptLogo from '../../public/javascript.svg'

export const jsl = (c) => {
    const component = document.createElement('a');
    component.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript");
    component.setAttribute("target", "_blank");
    const image = document.createElement('img');
    image.setAttribute("src", `${javascriptLogo}`);
    image.setAttribute("class", "logo vanilla");
    image.setAttribute("alt", "JavaScript logo");
    component.appendChild(image);
    c.appendChild(component);
}