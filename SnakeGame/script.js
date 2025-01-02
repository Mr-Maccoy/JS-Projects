
function draw(){
    const c = document.getElementById("myCanvas");
    if(c.getContext){
        const ctx = c.getContext("2d");
        ctx.fillStyle="rgb(200 0 0)";
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = "rgb(0 0 200 / 50%)";
        ctx.fillRect(30, 30, 50, 50);
        // ctx.moveTo(0,0);
        // ctx.lineTo(800,200);
        // ctx.stroke();
    }
}
draw();



