var myColor = ['rgb(226, 132, 24)', 'rgb(24, 161, 226)', "#fff979", "#faf9f6"];
var myData = [10, 6, 2, 4];

function getTotal() {
  var myTotal = 0;
  for (var j = 0; j < myData.length; j++) {
    myTotal += (typeof myData[j] == 'number') ? myData[j] : 0;
  } 
  return myTotal;
}

function plotData() {
  var canvas;
  var ctx;
  var lastend = 0;
  var myTotal = getTotal();

  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i <4; i++) {
    ctx.fillStyle = myColor[i];
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.arc(200, 150, 150, lastend, lastend + (Math.PI * 2 * (myData[i] / myTotal)), false);
    ctx.lineTo(200, 150);
    ctx.fill();
    lastend += Math.PI * 2 * (myData[i] / myTotal);
  }
}

function generatePie() {
  myData[1] = document.getElementById("sub1time").value;
  myData[2] = document.getElementById("sub2time").value;
  myData[3] = document.getElementById("sub3time").value;
  myData[4] = document.getElementById("sub4time").value;

  plotData();
}

document.getElementById("plotSubmit").onclick = generatePie;

plotData();
// start of functions when user clicks goals button 
  function goals(x) {


  document.querySelector('.active').classList.remove('active')
  x.classList.add('active')

  var goal=document.getElementById("goals");
  
  if(goal.style.display=="none"){
  goal.style.display="block";
  }


  var study=document.getElementById("study");
  if(study.style.display=="block"){
  study.style.display="none";
  }

  var upload=document.getElementById("uploaded");
  if(upload.style.display=="block"){
  upload.style.display="none";
  }

  var save=document.getElementById("saved");
  if(save.style.display=="block"){
  save.style.display="none";
  }
  var profile=document.getElementById("profile");
  if(profile.style.display=="block"){
  profile.style.display="none";
  }
 





}
  function profile(x) {


  document.querySelector('.active').classList.remove('active')
  x.classList.add('active')
  var goal=document.getElementById("goals");
   var profile=document.getElementById("profile");
  if(profile.style.display=="none"){
  profile.style.display="block";
  }
  if(goal.style.display=="block"){
  goal.style.display="none";
  }


  var study=document.getElementById("study");
  if(study.style.display=="block"){
  study.style.display="none";
  }

  var upload=document.getElementById("uploaded");
  if(upload.style.display=="block"){
  upload.style.display="none";
  }

  var save=document.getElementById("saved");
  if(save.style.display=="block"){
  save.style.display="none";
  }

 





}

// start of functions when user clicks uploaded button 
function uploaded(x) {
  document.querySelector('.active').classList.remove('active')
  x.classList.add('active')

var goal=document.getElementById("goals");
  
  if(goal.style.display=="block"){
  goal.style.display="none";
  }


  var study=document.getElementById("study");
  if(study.style.display=="block"){
  study.style.display="none";
  }

  var upload=document.getElementById("uploaded");
  if(upload.style.display=="none"){
  upload.style.display="block";
  }

  var save=document.getElementById("saved");
  if(save.style.display=="block"){
  save.style.display="none";
  }
   var profile=document.getElementById("profile");
  if(profile.style.display=="block"){
  profile.style.display="none";
  }


 
}

// start of functions when user clicks saved button 
function saved(x) {
  document.querySelector('.active').classList.remove('active')
  x.classList.add('active')





  var goal=document.getElementById("goals");
  
  if(goal.style.display=="block"){
  goal.style.display="none";
  }


  var study=document.getElementById("study");
  if(study.style.display=="block"){
  study.style.display="none";
  }

  var upload=document.getElementById("uploaded");
  if(upload.style.display=="block"){
  upload.style.display="none";
  }

  var save=document.getElementById("saved");
  if(save.style.display=="none"){
  save.style.display="block";
  }
    var profile=document.getElementById("profile");
  if(profile.style.display=="block"){
  profile.style.display="none";
  }

 
}

// start of functions when user clicks study time button 
function study_time(x) {
  document.querySelector('.active').classList.remove('active')
  x.classList.add('active')

var goal=document.getElementById("goals");
  
  if(goal.style.display=="block"){
  goal.style.display="none";
  }


  var study=document.getElementById("study");
  if(study.style.display=="none"){
  study.style.display="block";
  }

  var upload=document.getElementById("uploaded");
  if(upload.style.display=="block"){
  upload.style.display="none";
  }

  var save=document.getElementById("saved");
  if(save.style.display=="block"){
  save.style.display="none";
  }
    var profile=document.getElementById("profile");
  if(profile.style.display=="block"){
  profile.style.display="none";
  }


  
}

 const labels1 = [


 'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday(Today)',
  'Friday',
  'Saturday'



 ];
const data1 = {
  labels: labels1,
  datasets: [{
    label: 'Other Days',
    data: [8,10,16,12,14,7,3],
    backgroundColor: [
      'rgba(75, 192, 192, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(219, 104, 15, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(75, 192, 192, 0.2)'
    ],
    borderColor: [
       'rgb(75, 192, 192)',
      'rgb(75, 192, 192)',
      'rgb(75, 192, 192)',
      'rgb(75, 192, 192)',
      'rgb(219, 70, 15)',
       'rgb(75, 192, 192)',
       'rgb(75, 192, 192)'
    ],
    borderWidth: 1
  }]
};

const config1 = {
  type: 'bar',
  data: data1,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};

  var myChart = new Chart(
    document.getElementById('myChart'),
    config1
  );


const data = {
  labels: [
    'Circuit Analysis',
    'Mathematics',
    'Software Development',
    'Programming',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [270, 50, 100,30],
    backgroundColor: [
      'rgb(226, 132, 24)',
      'rgb(24, 161, 226)',
      'rgb(11, 106, 28)',
      'rgb(202,59,24)'
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'pie',
  data: data,

};

var myChart1 = new Chart(
    document.getElementById('myChart1'),
    config
  );



function add_item(){

var lt=document.getElementById("task_list");
var node=document.createElement('LI');
var textnode = document.createTextNode("chudir bhai");
node.appendChild(textnode);
lt.appendChild(node);

  // Clear your input 
  input.value = "";
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

