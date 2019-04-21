"use strict";

window.onload=function(){
var div11=document.createElement("div");
var div12=document.createElement("div");
var div13=document.createElement("div");
var div14=document.createElement("div");
var div21=document.createElement("div");
var div22=document.createElement("div");
var div23=document.createElement("div");
var div24=document.createElement("div");
var div31=document.createElement("div");
var div32=document.createElement("div");
var div33=document.createElement("div");
var div34=document.createElement("div");
var div41=document.createElement("div");
var div42=document.createElement("div");
var div43=document.createElement("div");

document.getElementById("puzzlearea").appendChild(div11);
document.getElementById("puzzlearea").appendChild(div12);
document.getElementById("puzzlearea").appendChild(div13);
document.getElementById("puzzlearea").appendChild(div14);
document.getElementById("puzzlearea").appendChild(div21);
document.getElementById("puzzlearea").appendChild(div22);
document.getElementById("puzzlearea").appendChild(div23);
document.getElementById("puzzlearea").appendChild(div24);
document.getElementById("puzzlearea").appendChild(div31);
document.getElementById("puzzlearea").appendChild(div32);
document.getElementById("puzzlearea").appendChild(div33);
document.getElementById("puzzlearea").appendChild(div34);
document.getElementById("puzzlearea").appendChild(div41);
document.getElementById("puzzlearea").appendChild(div42);
document.getElementById("puzzlearea").appendChild(div43);

div11.id='piece1-1';
div11.innerHTML="1";


div12.id='piece1-2';
div12.innerHTML="2";

div13.id='piece1-3';
div13.innerHTML="3";

div14.id='piece1-4';
div14.innerHTML="4";

div21.id='piece2-1';
div21.innerHTML="5";

div22.id='piece2-2';
div22.innerHTML="6";

div23.id='piece2-3';
div23.innerHTML="7";

div24.id='piece2-4';
div24.innerHTML="8";

div31.id='piece3-1';
div31.innerHTML="9";

div32.id='piece3-2';
div32.innerHTML="10";

div33.id='piece3-3';
div33.innerHTML="11";

div34.id='piece3-4';
div34.innerHTML="12";

div41.id='piece4-1';
div41.innerHTML="13";

div42.id='piece4-2';
div42.innerHTML="14";

div43.id='piece4-3';
div43.innerHTML="15";


var divs=document.querySelectorAll("#puzzlearea div");
for(var i=0;i<divs.length;i++){
  divs[i].onmouseover=hover;
  divs[i].onmouseout=out;
  divs[i].onclick=click;
}

document.getElementById("shufflebutton").onclick=shuffle;





























}

var empty_x=300;
var empty_y=300;
var finish_times=0;
var moves=0;

function canmove(x,y){
if(

(y==empty_y&&x-100==empty_x)||
(y==empty_y&&x+100==empty_x)||
(x==empty_x&&y-100==empty_y)||
(x==empty_x&&y+100==empty_y))



return 1;
else return 0;
}

function hover(){

  if(canmove(parseInt(window.getComputedStyle(this).left),parseInt(window.getComputedStyle(this).top))){
    this.style.border="5px solid red";
    this.style.cursor="pointer";
  }
}

function out(){
  this.style.border="5px solid black";

}

function click(){
  if(canmove(parseInt(window.getComputedStyle(this).left),parseInt(window.getComputedStyle(this).top))){
    var tmp1=parseInt(window.getComputedStyle(this).top);
    var tmp2=parseInt(window.getComputedStyle(this).left);
    this.style.top=empty_y+"px";
    this.style.left=empty_x+"px";
    empty_y=tmp1;
    empty_x=tmp2;
moves++;


if(finish()){
  moves-=1000;
  alert("This is the "+finish_times+" times you did it, it takes "+moves+" clicks");
  moves=0;
}



  }







}

function shuffle(){
var divs=document.querySelectorAll("#puzzlearea div");


for(var i=0;i<1000;i++){
var array=[];
for(var j=0;j<divs.length;j++){

if(canmove(parseInt(window.getComputedStyle(divs[j]).left),parseInt(window.getComputedStyle(divs[j]).top)))
  {array.push(j);
  }

}



var moveid=parseInt(Math.random() * array.length);

divs[array[moveid]].click();
array.splice(0,array.length);

}
finish_times++;

}


function finish(){
var div11=document.getElementById("piece1-1");
var div12=document.getElementById("piece1-2");
var div13=document.getElementById("piece1-3");
var div14=document.getElementById("piece1-4");
var div21=document.getElementById("piece2-1");
var div22=document.getElementById("piece2-2");
var div23=document.getElementById("piece2-3");
var div24=document.getElementById("piece2-4");
var div31=document.getElementById("piece3-1");
var div32=document.getElementById("piece3-2");
var div33=document.getElementById("piece3-3");
var div34=document.getElementById("piece3-4");
var div41=document.getElementById("piece4-1");
var div42=document.getElementById("piece4-2");
var div43=document.getElementById("piece4-3");






  if(parseInt(window.getComputedStyle(div11).left)==0&&
  parseInt(window.getComputedStyle(div11).top)==0&&
  parseInt(window.getComputedStyle(div12).left)==100&&
  parseInt(window.getComputedStyle(div12).top)==0&&
  parseInt(window.getComputedStyle(div13).left)==200&&
  parseInt(window.getComputedStyle(div13).top)==0&&
  parseInt(window.getComputedStyle(div14).left)==300&&
  parseInt(window.getComputedStyle(div14).top)==0&&
  parseInt(window.getComputedStyle(div21).left)==0&&
  parseInt(window.getComputedStyle(div21).top)==100&&
  parseInt(window.getComputedStyle(div22).left)==100&&
  parseInt(window.getComputedStyle(div22).top)==100&&
  parseInt(window.getComputedStyle(div23).left)==200&&
  parseInt(window.getComputedStyle(div23).top)==100&&
  parseInt(window.getComputedStyle(div24).left)==300&&
  parseInt(window.getComputedStyle(div24).top)==100&&
  parseInt(window.getComputedStyle(div31).left)==0&&
  parseInt(window.getComputedStyle(div31).top)==200&&
  parseInt(window.getComputedStyle(div32).left)==100&&
  parseInt(window.getComputedStyle(div32).top)==200&&
  parseInt(window.getComputedStyle(div33).left)==200&&
  parseInt(window.getComputedStyle(div33).top)==200&&
  parseInt(window.getComputedStyle(div34).left)==300&&
  parseInt(window.getComputedStyle(div34).top)==200&&
  parseInt(window.getComputedStyle(div41).left)==0&&
  parseInt(window.getComputedStyle(div41).top)==300&&
  parseInt(window.getComputedStyle(div42).left)==100&&
  parseInt(window.getComputedStyle(div42).top)==300&&
  parseInt(window.getComputedStyle(div43).left)==200&&
  parseInt(window.getComputedStyle(div43).top)==300&&finish_times>0




)
return 1;
else return 0;







}
