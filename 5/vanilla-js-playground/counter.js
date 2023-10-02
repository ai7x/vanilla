export function setupCounter(element, o) {
  
  let counter = 0
  
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `${o[counter].date + ' - ' + o[counter].name + ' - ' + o[counter].localName}`
    console.log(o.length);
  }

  element.addEventListener('click', () => {
    if (counter < o.length - 1) {
      setCounter(counter + 1) 
    } else {
      setCounter(0)    
    }
  })

  setCounter(0)

}