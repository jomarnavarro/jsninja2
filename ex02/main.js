const rainbow_btn = document.getElementById('button');

const colors = ['red', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change() {
    document.body.style.background = colors[Math.floor(7*Math.random())];
}

rainbow_btn.addEventListener('click', change);