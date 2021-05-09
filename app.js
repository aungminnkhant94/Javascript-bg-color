//Select 7 colors as you like
let colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue','skyblue'];

//change the background when button is clicked
let button = document.querySelector('#button');

button.addEventListener('click' , f => {
    //select a random number between 0 - 6
    let index = parseInt((Math.random()*colors.length)+1);
    //select the background
    let backgrounds = document.querySelector("#background");

    backgrounds.style.background = `${colors[index]}`
})