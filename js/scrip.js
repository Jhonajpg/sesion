function validar(str){
    const edad = document.getElementById(str).value;

    if(edad>=18){
        const msg = 'Bienvenido, si puede ingresar!';
        return document.getElementById('content').innerHTML=msg;
    } else{
        const msg = 'PROHIBIDO, no puede ingresar. menor de edad!!!';
        return document.getElementById('content').innerHTML=msg;
    }
}
function suma() {  
  var x,y,suma,text;  
  x = document.getElementById("num1").value;  
  y = document.getElementById("num2").value;  
  if (isNaN(x) || isNaN(y)) {  
    text = "Es necesarios introducir dos números válidos";  
  } else {     
    suma=parseFloat(x)+parseFloat(y);  
    text= suma;  
  }  
  document.getElementById("resultado").innerHTML = "LA SUMA ES: "+ text;  
} 
function resta() {  
  var x,y,resta,text; 
  x = document.getElementById("num1").value;  
  y = document.getElementById("num2").value;  
  if (isNaN(x) || isNaN(y)) {  
    text = "Es necesarios introducir dos números válidos";  
  } else {     
    resta=parseFloat(x)-parseFloat(y);  
    text= resta;  
  }  
  document.getElementById("resultado").innerHTML = "LA RESTA ES: "+ text;  
} 
function multi() {  
  var x,y,multi,text; 
  x = document.getElementById("num1").value;  
  y = document.getElementById("num2").value;  
  if (isNaN(x) || isNaN(y)) {  
    text = "Es necesarios introducir dos números válidos";  
  } else {     
    multi=parseFloat(x) * parseFloat(y);  
    text= multi;  
  }  
  document.getElementById("resultado").innerHTML = "LA MULTIPLICACIÓN ES: "+ text;  
} 
function divi() {  
  var x,y,divi,text; 
  x = document.getElementById("num1").value;  
  y = document.getElementById("num2").value;  
  if (isNaN(x) || isNaN(y)) {  
    text = "Es necesarios introducir dos números válidos";  
  } else {     
    divi=parseFloat(x)/parseFloat(y);  
    text= divi;  
  }  
  document.getElementById("resultado").innerHTML = "LA DIVISION ES: "+ text;  
} 