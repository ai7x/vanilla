
import { vl } from './components/viteLogo.js'
import { jsl } from './components/javascriptLogo.js'
import { hello } from './components/hello.js'
import { card } from './components/card.js'
import { pc }from './components/pcontent.js'

export const app = (root) => {
    const components = document.createElement('div');
    vl(components);
    jsl(components);
    hello(components);
    card(components);
    pc(components);
    root.appendChild(components);
}