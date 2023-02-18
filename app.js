let num1 ;
let num2 ;
let num3 ;
let num4 ;
let num5 ;
let num6 ;


document.querySelector('#button').onclick = function(){
     num1 = Math.floor(Math.random() * 45) + 1;
     num2 = Math.floor(Math.random() * 45) + 1;
     num3 = Math.floor(Math.random() * 45) + 1;
     num4 = Math.floor(Math.random() * 45) + 1;
     num5 = Math.floor(Math.random() * 45) + 1;
     num6 = Math.floor(Math.random() * 45) + 1;


     document.getElementById('num1').innerHTML =num1;
     document.getElementById('num2').innerHTML =num2;
     document.getElementById('num3').innerHTML =num3;
     document.getElementById('num4').innerHTML =num4;
     document.getElementById('num5').innerHTML =num5;
     document.getElementById('num6').innerHTML =num6;
}