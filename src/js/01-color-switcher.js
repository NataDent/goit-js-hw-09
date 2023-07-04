const btnStart = document.querySelector('button[data-start]');
console.log(btnStart)
const btnStop = document.querySelector('button[data-stop]');
console.log(btnStop);
const body = document.body;
console.log(body);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnStart.addEventListener('click', onStart);

function onStart(e) {
  e.target.disabled = true;
  console.log(e);
    const timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000); 
    console.dir(btnStart);
  btnStop.addEventListener('click', (e) => {
    clearInterval(timerId);
    btnStart.disabled = false;
  console.log(e)
});  
}



