// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
//Chart.defaults.global.defaultFontSize = 18;

// Pie Chart Example
var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};
var randomColorFactor = function() {
  return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
  return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};

var config = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        1,
        41,
        1,
        16,
        14,
      ],
      backgroundColor: [
        "#F7464A",
        "#46BFBD",
        "#FDB45C",
        "#28a745",
        "#4D5360",
      ],
      label: 'Expenditures'
    }],
    labels: [
      "Tesis: 1",
      "Artículo: 41",
      "Monografía: 1",
      "Página Web: 16",
      "Libro: 14"
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Chart.js Doughnut Chart'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
        	var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = Math.floor(((currentValue/total) * 100)+0.5);
          return percentage + "%";
        }
      }
    }
  }
};


var ctx = document.getElementById("myPieChart").getContext("2d");
window.myDoughnut = new Chart(ctx, config); {

}