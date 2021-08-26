let canvas = document.getElementById("spyt");
let context = canvas.getContext("2d");
let box = 32;
let spyt = [];
var spt = new Image(); 
spyt [0]={
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}



function criarBG(){
    context.fillStyle = "black";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarPy(){
    for(i = 0; i < spyt.length; i++){
        context.fillStyle = "yellow";
        context.fillRect(spyt[i].x, spyt[i].y, box, box);
    }

}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}



document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left"; 
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){

    if (spyt[0].x > 15 * box && direction == "right") spyt[0].x = 0;
    if (spyt[0].x < 0 && direction == "left") spyt[0].x = 16 * box;
    if (spyt[0].y > 15 * box && direction == "down") spyt[0].y = 0;
    if (spyt[0].y < 0 && direction == "up") spyt[0].y = 16 * box;

    for(i =1; i < spyt.length; i++) {
        if(spyt[0].x == spyt[i].x && spyt[0].y == spyt[i].y ){
            clearInterval(jogo);
            alert('Você falhou!! :('); 
        }
    }

    
    criarBG();
    criarPy();
    drawFood();

    let spytX = spyt[0].x;
    let spytY = spyt[0].y;

    if(direction == "right") spytX += box;
    if(direction == "left") spytX -= box;
    if(direction == "up") spytY -= box;
    if(direction == "down") spytY += box;

    if(spytX != food.x || spytY != food.y){
        spyt.pop();
    }
    else{food.x = Math.floor(Math.random() * 15 + 1) * box;
         food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

   
    let newHead = {
        x: spytX,
        y: spytY
    }

    spyt.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
