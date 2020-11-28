var canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

function drawHeart(context, x, y, width, height){
        context.save();
                context.beginPath();
        var topCurveHeight = height * 0.3;
                context.moveTo(x, y + topCurveHeight);
                // top left curve
                context.bezierCurveTo(
          x, y, 
          x - width / 2, y, 
          x - width / 2, y + topCurveHeight
        );
                
                // bottom left curve
                context.bezierCurveTo(
          x - width / 2, y + (height + topCurveHeight) / 2, 
          x, y + (height + topCurveHeight) / 2, 
          x, y + height
        );
                
                // bottom right curve
                context.bezierCurveTo(
          x, y + (height + topCurveHeight) / 2, 
          x + width / 2, y + (height + topCurveHeight) / 2, 
          x + width / 2, y + topCurveHeight
        );
                
                // top right curve
                context.bezierCurveTo(
          x + width / 2, y, 
          x, y, 
          x, y + topCurveHeight
        );
                
                context.closePath();
                context.fillStyle = "red";
                context.fill();
        context.restore();
            }

var drawBase = function(pos){
  ctx.fillStyle = '#FFDA6A';
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawBaseRage = function(pos){
  var grd=ctx.createRadialGradient(pos.x, pos.y+10,0,pos.x, pos.y+10,50);
  grd.addColorStop(0,"#FFDA6A");
  grd.addColorStop(1,"#D5234C");
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawSmiley = function(pos) {
  
  drawBase(pos);
  
  //mouth
  ctx.beginPath();
  ctx.strockStyle = '#000';
  ctx.lineWidth   = 4;
  ctx.arc(pos.x, pos.y, 30,0,Math.PI,   false);
  ctx.stroke();
  
  
  //left blush
  var grd=ctx.createRadialGradient(pos.x-30, pos.y,0,pos.x-30, pos.y,10);
  grd.addColorStop(0,"red");
  grd.addColorStop(1,"#FFDA6A");
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(pos.x-30, pos.y, 10, 0, Math.PI * 2, true);
  ctx.fill();
  
  //right blush
  var grd=ctx.createRadialGradient(pos.x+30, pos.y,0,pos.x+30, pos.y,10);
  grd.addColorStop(0,"red");
  grd.addColorStop(1,"#FFDA6A");
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(pos.x+30, pos.y, 10, 0, Math.PI * 2, true);
  ctx.fill();
  
  //left eye
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-10, 8, 0, Math.PI, true);
  ctx.stroke();
  
  //right eye
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-10, 8, 0, Math.PI, true);
  ctx.stroke();
  ctx.fillStyle='#000';
}

drawSmiley({x:100,y:100});

/*----------------*/

var canvas = document.getElementById('myCanvas1');
 ctx = canvas.getContext('2d');

var drawBase = function(pos){
  ctx.fillStyle = '#FFDA6A';
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawBaseRage = function(pos){
  var grd=ctx.createRadialGradient(pos.x, pos.y+10,0,pos.x, pos.y+10,50);
  grd.addColorStop(0,"#FFDA6A");
  grd.addColorStop(1,"#D5234C");
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawHaha = function(pos){
  
  drawBase(pos);
  
  
  //mouth
  ctx.beginPath();
  ctx.fillStyle = '#000';
  ctx.arc(pos.x,pos.y, 40,  0, Math.PI, false);
  ctx.fill();
  
  //tongue
  ctx.beginPath();
  ctx.fillStyle = '#F55064';
  ctx.arc(pos.x, pos.y+45, 30,  -30*Math.PI/180, -150*Math.PI/180, true);
  ctx.fill();
  
  //left eye
  ctx.beginPath();
  ctx.moveTo(pos.x-40, pos.y-10);
  ctx.lineTo(pos.x-20, pos.y-15 );
  ctx.lineTo(pos.x-40, pos.y-20);
  ctx.stroke();
  
  //right eye
  ctx.beginPath();
  ctx.moveTo(pos.x+40, pos.y-10);
  ctx.lineTo(pos.x+20, pos.y-15);
  ctx.lineTo(pos.x+40, pos.y-20);
  ctx.stroke();
}
drawHaha({x:100,y:100});

/*----------------*/

var canvas = document.getElementById('myCanvas2');
 ctx = canvas.getContext('2d');

var drawBase = function(pos){
  ctx.fillStyle = '#FFDA6A';
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawBaseRage = function(pos){
  var grd=ctx.createRadialGradient(pos.x, pos.y+10,0,pos.x, pos.y+10,50);
  grd.addColorStop(0,"#FFDA6A");
  grd.addColorStop(1,"#D5234C");
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawSunGlasses = function(pos){
  drawBase(pos);
  
  //left glass
  ctx.fillStyle='#000';
  ctx.beginPath();
  ctx.arc(pos.x-25,pos.y-15,25,0,Math.PI);
  ctx.fill();
  
  //right glass
  ctx.beginPath();
  ctx.arc(pos.x+25,pos.y-15,25,0,Math.PI);
  ctx.fill();
  //mouth
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 30, 60*Math.PI/180, 120*Math.PI/180, false);
  ctx.stroke();
}
drawSunGlasses({x:100,y:100});


/*----------------*/

var canvas = document.getElementById('myCanvas3');
 ctx = canvas.getContext('2d');

var drawBase = function(pos){
  ctx.fillStyle = '#FFDA6A';
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawBaseRage = function(pos){
  var grd=ctx.createRadialGradient(pos.x, pos.y+10,0,pos.x, pos.y+10,50);
  grd.addColorStop(0,"#FFDA6A");
  grd.addColorStop(1,"#D5234C");
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawWow = function(pos){
  drawBase(pos);
  
  //left eyebrow
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-15, 8, -30*Math.PI/180, -150*Math.PI/180, true);
  ctx.stroke();
  
  //right eyebrow
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-15, 8, -30*Math.PI/180, -150*Math.PI/180, true);
  ctx.stroke();
  
  ctx.fillStyle='#000';
  
  //left eye
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-5, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //right eye
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-5, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  ctx.scale(1, 2);
  ctx.beginPath();
  ctx.arc(pos.x, pos.y-37, 8, 0, 2*Math.PI, true);
  ctx.fill();
}
drawWow({x:100,y:100});


/*----------------*/

var canvas = document.getElementById('myCanvas4');
 ctx = canvas.getContext('2d');

var drawBase = function(pos){
  ctx.fillStyle = '#FFDA6A';
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawAngry = function(pos){
  drawBase(pos);
  
  //left eyebrow
  ctx.beginPath();
  ctx.arc(pos.x-25, pos.y-10, 15, -30*Math.PI/180, -120*Math.PI/180, true);
  ctx.stroke();
  
  //right eyebrow
  ctx.beginPath();
  ctx.arc(pos.x+25, pos.y-10, 15, -60*Math.PI/180, -150*Math.PI/180, true);
  ctx.stroke();
  
  ctx.fillStyle='#000';
  
  //left eye
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-5, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //right eye
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-5, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //mouth
  ctx.beginPath();
  ctx.arc(pos.x, pos.y+50, 30, -60*Math.PI/180, -120*Math.PI/180, true);
  ctx.stroke();
}


drawAngry({x:100, y:100});


/*----------------*/

var canvas = document.getElementById('myCanvas5');
 ctx = canvas.getContext('2d');

var drawBase = function(pos){
  ctx.fillStyle = '#FFDA6A';
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}
var drawGrinning = function(pos){
  drawBase(pos);
  
  ctx.fillStyle='#995710';
  //left eye
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-20, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //right eye
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-20, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //mouth
  ctx.beginPath();
  ctx.arc(pos.x,pos.y, 40,  0, Math.PI, false);
  ctx.fill();
  
  //teeth
  ctx.fillStyle='#fff';
  ctx.fillRect(pos.x-38,pos.y+2,75,8);
  
}
drawGrinning({x:100, y:100});


/*----------------*/

var canvas = document.getElementById('myCanvas6');
 ctx = canvas.getContext('2d');

var drawBase = function(pos){
  ctx.fillStyle = '#FFDA6A';
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawKissingCloseEyes = function(pos){
  drawBase(pos);
  
  //left eyebrow
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y+5, 22, -60*Math.PI/180, -120*Math.PI/180, true);
  ctx.stroke();
  
  //right eyebrow
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y+5, 22, -60*Math.PI/180, -120*Math.PI/180, true);
  ctx.stroke();
  
  //left eye
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-10, 11, 60*Math.PI/180, 120*Math.PI/180, false);
  ctx.stroke();
  
  //right eye
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-10, 11, 60*Math.PI/180, 120*Math.PI/180, false);
  ctx.stroke();
  
  //mouth
  ctx.beginPath();
  ctx.lineWidth='2'
  ctx.moveTo(pos.x,pos.y+15);
  ctx.lineTo(pos.x+10,pos.y+18);
  ctx.lineTo(pos.x+5,pos.y+21);
  ctx.lineTo(pos.x+10,pos.y+24);
  ctx.lineTo(pos.x,pos.y+27);
  ctx.stroke();
  drawHeart(ctx,pos.x+18,pos.y+15,12,12);
}

  drawKissingCloseEyes({x:100,y:100});


/*----------------*/

var canvas = document.getElementById('myCanvas7');
 ctx = canvas.getContext('2d');

var drawBase = function(pos){
  ctx.fillStyle = '#FFDA6A';
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawExpressionless = function(pos){
  drawBase(pos);
  
  ctx.fillStyle='#000';
  ctx.fillRect(pos.x-30, pos.y-20,20,8);
  ctx.fillRect(pos.x+10,pos.y-20,20,8);
  ctx.fillRect(pos.x-20,pos.y+10,40,8);
}

drawExpressionless({x:100,y:100});
