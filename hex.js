function changeBackground(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

    let col = "#" + randomColor
    console.log(col)
    document.getElementById("name").innerHTML = col;
}