const btnE1 = document.getElementById('btn');
const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'pink', 'black', 'violent', 'purple', 'grey'];

function updateColor(){
    const body = document.getElementById('body').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
};

btnE1.addEventListener("click", updateColor);
