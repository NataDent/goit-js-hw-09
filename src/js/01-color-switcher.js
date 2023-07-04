const btnStart = document.querySelector('button[data-start]');
console.log(btnStart)
const btnStop = document.querySelector('button[data-stop]');
console.log(btnStop);
const body = document.body;
console.log(body);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnStart.addEventListener('click', onclick);

function onclick(e) {
     e.target.dataset.disabled = true;
    const timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
   
    }, 1000); 
    console.dir(btnStart);
    
}