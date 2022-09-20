const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
ctx.fillStyle = "yellow";
// ctx.fillRect(0, 0, 50, 40); //(x,y,w,h)

let square = 50;
    var snakecell = [[0, 0]];
    let bheight = 600
    let bwidth = 1000
    let direction = 'right'
    let gameOver = false;

    document.addEventListener('keydown',function(e){
        // console.log(e)

        if (e.key === 'ArrowRight') {
            direction = 'right';
        }
        else if (e.key === "ArrowLeft") {
          direction = "left";
        }
        else if (e.key === "ArrowDown") {
          direction = "down";
        }
        else{
            direction = 'up';
        }
    })

    function update()
    {
        ctx.clearRect(0,0,bwidth,bheight)

        headx = snakecell[snakecell.length-1][0];
        heady = snakecell[snakecell.length-1][1];
        if (direction === "right") {
          newx = headx + square;
          newy = heady;
          if (newx === bwidth) {
            gameOver = true;
          }
        } else if (direction === "down") {
          newx = headx;
          newy = heady + square;
          if (newy === bheight) {
            gameOver = true;
          }
        } else if (direction === "left") {
          newx = headx - square;
          newy = heady ;
          if (newx < 0 ) {
            gameOver = true;
          }
        }
        else{
            newx = headx ;
            newy = heady - square;
            if (newy < 0) {
              gameOver = true;
            }
        }
        snakecell.push([newx,newy])
        snakecell.shift()
    }
    function draw()
    {
        if (gameOver === true) {
            clearInterval(id);
            return;
        }
        for (const cell of snakecell) {
            ctx.fillRect(cell[0],cell[1],square,square);
        }
    }

    let id = setInterval(function () {
        update();
        draw();
    },100)
