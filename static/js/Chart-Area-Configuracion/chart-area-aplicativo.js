function generarGrafico(){
// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
var auxfactorCentralidadGrafico = document.getElementsByName("factorCentralidad[]");
var auxMedianaValoresGrafico = document.getElementsByName("medianavalores[]");
var factor =[];
var centralidad=[];
console.log("longitud: "+auxfactorCentralidadGrafico.length);
console.log("longitud: "+auxMedianaValoresGrafico.length);
for (var i=0; i<auxfactorCentralidadGrafico.length; i++) {
    factor[i]="'"+auxfactorCentralidadGrafico[i].innerHTML+"'";
    centralidad[i]=auxMedianaValoresGrafico[i].innerHTML;
    console.log("factor: "+factor[i]+" centralidad");
}

// Area Chart Example
var ctx = document.getElementById("GraficoResultadosAplicativo");

var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: factor,
    datasets: [{
      label: "Resultado",
      backgroundColor: ['#007bff', '#dc3545', '#8B4513', '#28a745', '#ADFF2F','#F08080','#4B0082','#7FFFD4','#DAA520','#FF1493','#483D8B','#FFE4C4','#000000','#8A2BE2','#D2691E','#696969','#8B0000','#FFFF00','#2F4F4F','#556B2F'],
      borderColor: "rgba(2,117,216,1)",
      data: centralidad,
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
}
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