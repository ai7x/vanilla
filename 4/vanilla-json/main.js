import './style.css'
import { setupCounter } from './counter.js'
import holidays from './holidays.json'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id="holiday">"${holidays[0].name}"</h1>
  </div>
`

setupCounter(document.querySelector('#holiday'), holidays)
