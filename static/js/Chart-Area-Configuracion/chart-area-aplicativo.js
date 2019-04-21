function generarGrafico(){

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
var auxfactorCentralidadGrafico = document.getElementsByName("factorCentralidad[]");
var auxMedianaValoresGrafico = document.getElementsByName("medianavalores[]");
var factor =[];
var centralidad=[];
for (var i=0; i<auxfactorCentralidadGrafico.length; i++) {
    factor[i]=auxfactorCentralidadGrafico[i].innerHTML;
    centralidad[i]=auxMedianaValoresGrafico[i].innerHTML;

}
var maximo= 0;
var minimo=0;
maximo=Math.round(centralidad[0])+1;
minimo=Math.round(centralidad[auxfactorCentralidadGrafico.length-1]);
if(minimo<0){
    minimo=minimo-1;
}
//console.log("maximo: "+maximo+" minimo: "+minimo);
// Grafico de barras
var ctx = document.getElementById("GraficoResultadosAplicativo").getContext('2d');
limpiarGraficoBarras();
/*if (window.grafica) {
	window.grafica.clear();
	window.grafica.destroy();//console.log("destruido");
}*/
window.grafica = new Chart(ctx, {
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
          maxTicksLimit: (auxfactorCentralidadGrafico.length+1)
        }
      }],
      yAxes: [{
        ticks: {
          min: 0.0,
          max: maximo,
          maxTicksLimit: (auxfactorCentralidadGrafico.length+1)
        },
        gridLines: {
          display: true
        }
      }],
    },
  },
});
}
function limpiarGraficoBarras(){
    var ctx = document.getElementById("GraficoResultadosAplicativo").getContext('2d');
    if (window.grafica) {
	    window.grafica.clear();
	    window.grafica.destroy();//console.log("destruido");
    }
    window.grafica = new Chart(ctx, {});
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