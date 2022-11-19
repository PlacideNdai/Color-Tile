// canvas and others
let canvas = document.getElementById('can');

canvas.style.background = "#333";
let screenControl = 1

window.addEventListener('resize', ()=>{
    canvas.height = window.innerHeight / screenControl;
    canvas.width = window.innerWidth / screenControl;

    // whole game update shoudl be done here.

})

;

canvas.height = window.innerHeight / screenControl;
canvas.width = window.innerWidth /screenControl;
let c  = canvas.getContext('2d');


// color in array
function colors(){
    let colorarray = ['red', 'white', 'green',
    'blue','pink','lightblue','lightgreen'];

    let randomColor = Math.floor(Math.random() * colorarray.length);
    return colorarray[randomColor];
}

function colored(){

    let colorBank = [];
    let i = 0;
    for (i; i < 2 ;i++){
        colorBank.push(Math.floor(Math.random() * 225));
    }

   let linked = colorBank.join('');
   return ("#" + linked)
}

colored();

function runner(){
    requestAnimationFrame(runner);

    let player = {
        height: 50,
        width: 50,
        color: colored(),
        x_speed: 2,
        y_speed: 2,
        x_pos: Math.floor(Math.random() * canvas.width),
        y_pos: Math.floor(Math.random() * canvas.height)
    }
    
    c.beginPath();
    c.rect(player.x_pos,player.y_pos,player.width,player.height);
    c.fillStyle = player.color;
    c.fill();
}

runner();
