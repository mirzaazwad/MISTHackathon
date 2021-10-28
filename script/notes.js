  function w3_help() {
	document.getElementById("search").style.display="block";
}
function w3_hclose() {
	document.getElementById("search").style.display="none";
}
function bio(){
	w3_hclose();
	document.getElementById("bio").style.display="flex";
	document.getElementById("chem").style.display="none";
	document.getElementById("phy").style.display="none";
}
function chem(){
	w3_hclose();
	document.getElementById("chem").style.display="flex";
	document.getElementById("bio").style.display="none";
	document.getElementById("phy").style.display="none";
}
function phy(){
	w3_hclose();
	document.getElementById("chem").style.display="none";
	document.getElementById("bio").style.display="none";
	document.getElementById("phy").style.display="flex";
}
function search_animal() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('animals');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}


function faq(x){
  document.querySelector('.active').classList.remove('active')
  x.classList.add('active')
}

function rep(){
	var x=document.getElementById('report');
	x.style.display="block";
}
function w3_rep_close(){
	var x=document.getElementById('report');
	x.style.display="none";
}
  function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
function w3_rank_open() {
document.getElementById("mySidebar").style.display = "none";
  document.getElementById("rank").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_rank_close() {
  document.getElementById("rank").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
"use strict";
function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}
function hello(){
	w3_rep_close();
	alert("Your complaint has been recorded");
}

function upv(){
	var x=document.getElementById('up').innerText;
	var y=document.getElementById('arr');
	if(y.style.color!="blue"){
		x++;
		document.getElementById('up').innerText = returnData(x);
		y.style.color='blue'
	}
	else{
		x--;
		document.getElementById('up').innerText = returnData(x);
		y.style.color='black';
		
	}
	
}
function upv2(){
	var x=document.getElementById('up2').innerText;
	var y=document.getElementById('arr2');
	if(y.style.color!="blue"){
		x++;
		document.getElementById('up2').innerText = returnData(x);
		y.style.color='blue'
	}
	else{
		x--;
		document.getElementById('up2').innerText = returnData(x);
		y.style.color='black';
		
	}
	
}
function upv3(){
	var x=document.getElementById('up3').innerText;
	var y=document.getElementById('arr3');
	if(y.style.color!="blue"){
		x++;
		document.getElementById('up3').innerText = returnData(x);
		y.style.color='blue'
	}
	else{
		x--;
		document.getElementById('up3').innerText = returnData(x);
		y.style.color='black';
		
	}
	
}
function bkmrp(){
	var x=document.getElementById('bk');
	if(x.style.color=='blue'){
		x.style.color='black';
	}
	else{
		x.style.color='blue';
	}
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();
function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 9 ? input : `0${input}`
}
