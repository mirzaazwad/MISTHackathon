  
 include("https://cdn.jsdelivr.net/npm/chart.js");
 include("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js");
 include("https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js");
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
