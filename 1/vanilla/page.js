import {app} from './app/app.js'

export const page = (root) => {
    root.innerHTML = ``;
    app(root);
}