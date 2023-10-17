import './style.css'

let today = new Date();
let userAgent = window.navigator.userAgent;
let platform = window.navigator.userAgentData.platform;
let brand = window.navigator.userAgentData.brands[0].brand;
let brandLength = window.navigator.userAgentData.brands.length;
let version = window.navigator.userAgentData.brands[0].version;
let brand1 = window.navigator.userAgentData.brands[1].brand;
let version1 = window.navigator.userAgentData.brands[1].version;
let brand2 = window.navigator.userAgentData.brands[2].brand;
let version2 = window.navigator.userAgentData.brands[2].version;
let language = window.navigator.language;
let languages = window.navigator.languages;

let width = window.screen.width;
let height = window.screen.height;
let availWidth = window.screen.availWidth;
let availHeight = window.screen.availHeight;

let ipx = "ip not founded!";

let div = `
<div>
    <h2>${today}</h2>
    <p>userAgent: ${userAgent}</p>
    <p>brand length: ${brandLength}</p>
    <p>1. brands-version: ${brand} - ${version}</p>
    <p>2. brands-version: ${brand1} - ${version1}</p>
    <p>3. brands-version: ${brand2} - ${version2}</p>
    <p>platform: ${platform}</p>
    <p>language: ${language}</p>
    <p>languages: ${languages}</p>
    <hr/>
    <p>Width - Height:  ${width} - ${height}</p>
    <p>availWidth - availHeight:  ${availWidth} - ${availHeight}</p>
    <h2>${ipx}</h2>
</div>`;


document.querySelector('#app').innerHTML = div;