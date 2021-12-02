const canvas = document.getElementById("myCan");
const context = canvas.getContext('2d');


// Draw rectangle
context.fillStyle = "red"
context.fillRect(0,0,100,200);

//Draw Circle
context.beginPath()
context.fillStyle = "black"
context.arc(200,200,50,0,Math.PI*2,false)
context.closePath()
context.fill()


// Draw Lines
context.beginPath()
context.moveTo(0,0)
context.lineTo(600,400)
context.strokeStyle = "black"
context.stroke()

// functions
function drawCircle(x,y,r,color){
    context.beginPath()
context.fillStyle = color
context.arc(x,y,r,0,Math.PI*2,false)
context.closePath()
context.fill()
}

drawCircle(30,30,30,'black')
drawCircle(300,30,30,'black')
drawCircle(30,300,30,'black')
