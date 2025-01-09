
function draw(){
    const c = document.getElementById("myCanvas");
    if(c.getContext){
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(0,0);
        document.addEventListener("keydown", event =>{
            if(event.key ==="ArrowUp"){
                 y--;
                 ctx.lineTo(x,y);
                 ctx.stroke();
            }else if(event.key ==="ArrowRight"){
                        x++;
                        ctx.lineTo(x,y);
                        ctx.stroke();
        }else if(event.key ==="ArrowDown"){
            y++;
            ctx.lineTo(x,y);
            ctx.stroke();
        }else if(event.key ==="ArrowLeft"){
            x--;
            ctx.lineTo(x,y);
            ctx.stroke();
            
        }
            
    
    
    })
        }


        
        
        // ctx.lineTo(40,50);
        // ctx.lineTo(300,50);
        // ctx.lineTo(300,200);
        // ctx.lineTo(300,200);
        // ctx.lineTo(40,50);
        // ctx.lineTo(40,0);
    

}
draw();

let x = 0;
let y = 0;
// document.addEventListener("keydown", event =>{
//     if(event.key ==="ArrowUp"){
//          x++;
//         console.log('eje x: '+ x);
//     }else if(event.key ==="ArrowDown"){
//         x--;
//         console.log('eje x: '+x);
//     }else if(event.key ==="ArrowRight"){
//         y++;
//         console.log('eje y: '+y);
//     }else if(event.key ==="ArrowLeft"){
//         y--;
//         console.log('eje y: '+y);
//     }
// })

