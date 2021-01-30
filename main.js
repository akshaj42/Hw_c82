canvas=document.getElementById('myCanvas');
var mouseEvent="empty";
var color="black";
var width=2;
var radius=20;
var current_position_of_mouse_y;
var current_position_of_mouse_x;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    width=document.getElementById("width").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        console.log("Current position of x and y coordinates = ");
        console.log("x=" + current_position_of_mouse_x+"y = "+current_position_of_mouse_y);
        canvas.getContext("2d").begainPath();
        canvas.getContext("2d").strokeStyle=color;
        canvas.getContext("2d").lineWidth=width;
        canvas.getContext("2d").arc(last_x, last_y, radius,0,2*Math.PI);
        canvas.getContext("2d").stroke();
    }
    var last_x=current_position_of_mouse_x;
    var last_y=current_position_of_mouse_y;
}