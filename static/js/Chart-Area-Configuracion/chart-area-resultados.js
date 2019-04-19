// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("GraficoResultados");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['cons_con','cond_end','zon_urb','norm_con','enf_pre','serv_bas','atrp_esc','n_pers','cen_sal','carr_trans','cont_cad','des_alim','fam_muer','hac_san','estc_agua','inst_med','replicas','lluvias','cost_mar','terr_noc'],
    datasets: [{
      label: "Resultado",
      backgroundColor: ['#007bff', '#dc3545', '#8B4513', '#28a745', '#ADFF2F','#F08080','#4B0082','#7FFFD4','#DAA520','#FF1493','#483D8B','#FFE4C4','#000000','#8A2BE2','#D2691E','#696969','#8B0000','#FFFF00','#2F4F4F','#556B2F'],
      borderColor: "rgba(2,117,216,1)",
      data: [2.99,2.47,2.35,2.33,2.3,2.3,2.2,1.84,1.78,1.66,1.56,1.14,1.11,1.05,0.97,0.78,0.75,0.72,0.61,0],
    }],
  },
  options: {
  legend: {
      display: false,
      position: 'bottom',
      labels: {
        fontColor: "#000080",
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: ''
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 20
        }
      }],
      yAxes: [{
        ticks: {
          min: 0.0,
          max: 4,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
  },
});
/*
var mybarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['cons_con','atrap_esc','cond_end','enf_pre','cen_sal','zon_urb','n_pers','norm_con','serv_bas','carr_trans','cont_cad','des_alim','terr_noc','fam_muer','hac_san','estc_agua','cont_mar','int_med','replicas','lluvias'],
    datasets: [{
      label: '# of Votes',
      backgroundColor: "#000080",
      data: [80]
    }, {
      label: '# of Votes2',
      backgroundColor: "#d3d3d3",
      data: [90]
    }, {
      label: '# of Votes3',
      backgroundColor: "#add8e6",
      data: [45]
    }],
  },

  options: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: "#000080",
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});*/