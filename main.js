var mouseEvent = "empty";
var last_position_of_x, last_position_of_y; 
canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); color = "black"; 
width_of_line = 1;

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}
