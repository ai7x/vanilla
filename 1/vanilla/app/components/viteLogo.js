import viteLogo from '../../public/vite.svg'

export const vl = (c) => {
    const component = document.createElement('a');
    component.setAttribute("href", "https://vitejs.dev");
    component.setAttribute("target", "_blank");
    const image = document.createElement('img');
    image.setAttribute("src", `${viteLogo}`);
    image.setAttribute("class", "logo");
    image.setAttribute("alt", "Vite logo");
    component.appendChild(image);
    c.appendChild(component);
}