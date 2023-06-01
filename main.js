var color="red";
widthofline=5;
mouse="empty";
var upositionx,upositiony;
canvas=document.getElementById("lienzo")
ctx=canvas.getContext("2d");
width_screen=screen.width;
newwidth=screen.width-70;
newheight=screen.height-30;
if(width_screen<992){
document.getElementById("lienzo").width=newwidth
document.getElementById("lienzo").height=newheight
document.body.style.overflow="hidden" 
}
canvas.addEventListener("mousedown",main_mousedown);
function main_mousedown(e){
    mouse="mousedown"
    console.log(mouse)
}
canvas.addEventListener("mousemove",my_mouse_move)
function my_mouse_move(e){
    positionactualx= e.clientX-canvas.offsetLeft;
    positionactualY= e.clientY-canvas.offsetTop;
    if (mouse == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline; 
        ctx.moveTo(upositionx,upositiony)
        console.log("x="+upositionx+",y="+upositiony)
        console.log("x="+positionactualx+",y="+positionactualY)
        ctx.lineTo(positionactualx,positionactualY);
        ctx.stroke(); }
    upositionx=positionactualx;
    upositiony=positionactualY
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouse="mouseup"
}
canvas.addEventListener("touchstart",my_touch_start);
function my_touch_start (e){
console.log("my_touch_start");
positionactualx=e.touches [0].clientX-canvas.offsetLeft;
positionactualY=e.touches [0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touch_move);
function my_touch_move(e){
    console.log("my_touch_move");
    positionactualx=e.touches [0].clientX-canvas.offsetLeft;
    positionactualY=e.touches [0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthofline;
    ctx.moveTo(upositionx,upositiony);
    console.log("x="+upositionx+",y="+upositiony)
        console.log("x="+positionactualx+",y="+positionactualY)
ctx.lineTo(positionactualx,positionactualY);
ctx.stroke();
upositionx=positionactualx;
upositiony=positionactualY;
}

function Borrar(){
ctx.clearRect(0,0,canvas.width,canvas.height)
}

