const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
const body = document.querySelector('body')

button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex = parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
document.getElementById("name").innerHTML = colors[colorIndex];
}