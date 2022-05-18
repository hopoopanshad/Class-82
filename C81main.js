canvas = document.getElementById("ArGusonlycanvas")
ctx1 = canvas.getContext("2d")
color = "yellowgreen";
width1=5
Mouseevent=""
lx="" 
ly=""

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
   color=document.getElementById("c").value
   width1=document.getElementById("w").value
   Mouseevent="mousedown" 
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
   Mouseevent="mouseup" 
}canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
   Mouseevent="mouseleave" 
}canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
c_x=e.clientX-canvas.offsetLeft 
c_y=e.clientY-canvas.offsetTop 
if(Mouseevent == "mousedown"){
ctx1.beginPath()
ctx1.strokeStyle=color
ctx1.lineWidth=width1
ctx1.moveTo(c_x,c_y)
ctx1.lineTo(lx,ly)
ctx1.stroke()
}
lx=c_x
ly=c_y
}


function clearar(){
    ctx1.clearRect(0,0,canvas.width,canvas.height);
    

}