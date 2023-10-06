"use strict";

function circle(ctx, x, у, radius, fillCircle) {
     ctx.beginPath();
     ctx.arc (x, у, radius, 0, Math.PI * 2, false);
     if (fillCircle)
       ctx.fill();
     else
       ctx.stroke();
    };

function time(ctx, time_type){
    if (time_type=="sec"){
        ctx.rotate(0.1/60);
    }
    else if (time_type == "min"){
        ctx.rotate(0.1/3600);
    }
    else{
        ctx.rotate(0.1/216000);
    }
}
function clock() {
    var now = new Date();
    var ctx = document.getElementById("mycanvas6").getContext("2d");
    ctx.save();
    ctx.clearRect(0, 0, 400, 400);
    ctx.translate(200, 200);
    ctx.scale(1.2, 1.2);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 1;
  
    // Hour marks
    ctx.save();
    for (var i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(105, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.restore();
  
    // Minute marks
    ctx.save();
    ctx.lineWidth = 1;
    for (i = 0; i < 60; i++) {
      if (i % 5 != 0) {
        ctx.beginPath();
        ctx.moveTo(117, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 30);
    }
    ctx.restore();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;
  
    ctx.fillStyle = "black";
  
    // Hours
    ctx.save();
    ctx.rotate(
      hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
    );
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(60, 0);
    ctx.stroke();
    ctx.restore();
  
    // Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.restore();
  
    // seconds
    ctx.save();
    ctx.rotate((sec * Math.PI) / 30);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "indigo";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(110, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
  
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 130, 0, Math.PI * 2, true);
    ctx.stroke();
  
    ctx.restore();

    requestAnimationFrame(clock);
  }
  
clock();