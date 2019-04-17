window.onload = function(){
  //innitiate stop buttion with "disabled"
  document.getElementById("stop").disabled= true;

//set start and stop
document.getElementById("start").onclick= start;
document.getElementById("stop").onclick= stop;

//set the three size options
document.getElementById("M").onchange= Medium;
document.getElementById("B").onchange= Big;
document.getElementById("BB").onchange= Bigger;

//set when selected
document.getElementById("select").onchange= select;

}


var int; //seinterval
var timer=0; //frame number
var gap=171; //intial interval gap

function start(){

//change two buttons' status

document.getElementById("stop").disabled= false;
document.getElementById("start").disabled= true;

//recall show()

int = setInterval("show()",gap);

}



function show(){

//check it every time
//petmit text changes while playing

  var input = document.getElementById("input");
  var array= input.value.split(" ");

  //check if the last word is punctuation
  //if so, eliminate it and insert the word twice in the array[]

  for(var i=0;i<array.length;i++){

    if(array[i].charAt(array[i].length-1)==","||array[i].charAt(array[i].length-1)=="."||array[i].charAt(array[i].length-1)==";"||array[i].charAt(array[i].length-1)=="!"||array[i].charAt(array[i].length-1)=="?"||array[i].charAt(array[i].length-1)==":"
){array[i]=array[i].replace(",","");array[i]=array[i].replace(".","");array[i]=array[i].replace(":","");array[i]=array[i].replace("?","");array[i]=array[i].replace("!","");array[i]=array[i].replace(";","");
array.splice(i,0,array[i]);

}

}

//show the word while legal

if(timer<array.length){
  document.getElementById("output").innerHTML= array[timer++];
}
else stop();

}




function stop(){

document.getElementById("start").disabled= false;
document.getElementById("stop").disabled= true;

//stop the setinterval(), reset timer and clear output

window.clearInterval(int);
timer=0;
document.getElementById("output").innerHTML="";
}

function select(){
var select=document.getElementById("select");

//when changed, find whether the animation is running
//if so, stop it and reset the interval
//if it is not running only change the variable gap

if(select.selectedIndex=="0"){
if(document.getElementById("start").disabled== false){gap=171;}
else{


window.clearInterval(int);
int = setInterval("show()",171);
gap=171;
}
}

if(select.selectedIndex=="1"){
  if(document.getElementById("start").disabled== false){gap=300;}
  else{
window.clearInterval(int);
int = setInterval("show()",300);
gap=300;}
}

if(select.selectedIndex=="2"){
if(document.getElementById("start").disabled== false){gap=200;}
else{
window.clearInterval(int);
int = setInterval("show()",200);
gap=200;}
}

if(select.selectedIndex=="3"){
  if(document.getElementById("start").disabled== false){gap=150;}
  else{
window.clearInterval(int);
int = setInterval("show()",150);
gap=150;
}
}

if(select.selectedIndex=="4"){
  if(document.getElementById("start").disabled== false){gap=133;}
  else{
window.clearInterval(int);
int = setInterval("show()",133);
gap=133;}
}

if(select.selectedIndex=="5"){
  if(document.getElementById("start").disabled== false){gap=120;}
  else{
window.clearInterval(int);
int = setInterval("show()",120);
gap=120;}
}

}

//size function


function Big(){
document.getElementById("output").style.fontSize= "48pt";
}

function Medium(){
document.getElementById("output").style.fontSize= "36pt";
}

function Bigger(){
document.getElementById("output").style.fontSize= "60pt";
}
