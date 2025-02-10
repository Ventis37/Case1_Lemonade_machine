var sonic = require('@amperka/ultrasonic').connect({trigPin: P8, echoPin: P9});
var servoDispenser = require('@amperka/servo').connect(P8);
var servoApelsin = require('@amperka/servo').connect(P13);
var servoMyata = require('@amperka/servo').connect(P10);
var servoVoda = require('@amperka/servo').connect(P11);
var ir = require('@amperka/ir-receiver').connect(P2);
var button = require('@amperka/button').connect(P4);
ir.on('receive', function(code, repeat) {
  console.log(code);
  //НАЛИВ
  if (code == 378091719) {
    console.log('НАЛИВЧИК');
     servoApelsin.write(0);
    setTimeout(function() {
      servoApelsin.write(30);
    }, 40000);
         servoMyata.write(180);
    setTimeout(function() {
      servoMyata.write(135);
    }, 40000);
         servoVoda.write(135);
    setTimeout(function() {
      servoVoda.write(105);
    }, 40000);}
  //ЧИСТЫЙ СОК
  if (code == 378077439) {
    console.log('Апельсиновый сочок');
        servoApelsin.write(120);
        setTimeout(function() {
             servoApelsin.write(30);
       }, 2250);
  }
  //ЧИСТЫЙ СИРОП
  if (code == 378126399) {
    console.log('Мятка');
     servoMyata.write(45);
    setTimeout(function() {
      servoMyata.write(150);
    }, 500);
   }
   //ЧИСТАЯ ВОДА
   if (code == 378110079) {
    console.log('Водичка');
     servoVoda.write(15);
    setTimeout(function() {
      servoVoda.write(105);
    }, 3125);
   }
  //ТРОЙНОЙ
  if (code == 378093759) {
    console.log('ТРИПЛ БРАВО СТАРС');
    servoApelsin.write(120);
    setTimeout(function() {
      servoApelsin.write(30);
        servoMyata.write(45);
    setTimeout(function() {
      servoMyata.write(150);
      setTimeout(function() {
          servoVoda.write(15);
    setTimeout(function() {
      servoVoda.write(105);
    }, 1000);
    }, 2000);
    }, 500);
    }, 2500);
  }
  //МЯТНЫЙ
  if (code == 378118239) {
    console.log('Мятни');
    servoMyata.write(45);
    setTimeout(function() {
      servoMyata.write(150);
      setTimeout(function() {
     servoVoda.write(15);
    setTimeout(function() {
      servoVoda.write(105);
    }, 5000);
    }, 1000);
    }, 1000);
  }
  //ЗАВОДНОЙ АПЕЛЬСИН
  if (code == 378114159) {
    console.log('Заваднойегорка');
    servoApelsin.write(120);
    setTimeout(function() {
    servoApelsin.write(30);
    servoVoda.write(15);
    setTimeout(function() {
      servoVoda.write(105);
    }, 2000);
    }, 3000);
  }
});
setInterval(function()  {
    sonic.ping(function(err, value) {
    if (err) {
    } else {
      console.log(value);
      if (value > 40) {
      servoApelsin.write(30);
      servoMyata.write(135);
      servoVoda.write(105);
      }
    }
  }, 'mm');
} , 50000000);