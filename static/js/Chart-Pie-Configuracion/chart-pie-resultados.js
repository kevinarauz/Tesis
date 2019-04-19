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
  labels: ['cons_con','cond_end','zon_urb','norm_con','enf_pre','serv_bas','atrp_esc','n_pers','cen_sal','carr_trans','cont_cad','des_alim','fam_muer','hac_san','estc_agua','inst_med','replicas','lluvias','cost_mar','terr_noc'],
    datasets: [{
      data: [2.99,2.47,2.35,2.33,2.3,2.3,2.2,1.84,1.78,1.66,1.56,1.14,1.11,1.05,0.97,0.78,0.75,0.72,0.61,0],
     backgroundColor: ['#007bff', '#dc3545', '#8B4513', '#28a745', '#ADFF2F','#F08080','#4B0082','#7FFFD4','#DAA520','#FF1493','#483D8B','#FFE4C4','#000000','#8A2BE2','#D2691E','#696969','#8B0000','#FFFF00','#2F4F4F','#556B2F'],
      label: 'Expenditures'
    }],

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