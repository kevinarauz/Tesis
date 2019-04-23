function generarGrafico(){

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
var auxfactorCentralidadGrafico = document.getElementsByName("factorCentralidad[]");
var auxMedianaValoresGrafico = document.getElementsByName("medianavalores[]");
var factor =[];
var centralidad=[];
for (var i=0; i<auxfactorCentralidadGrafico.length; i++) {
    factor[i]=formatLabel(auxfactorCentralidadGrafico[i].innerHTML,"10px");
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
      //backgroundColor: [Chart.colorschemes.brewer['Paired12'],Chart.colorschemes.brewer['office.Atlas6']],
      //backgroundColor: Chart.colorschemes.brewer['office.Atlas6'],
      backgroundColor: ['#007bff', '#dc3545', '#8B4513', '#28a745', '#ADFF2F','#F08080','#4B0082','#7FFFD4','#DAA520','#FF1493','#483D8B','#FFE4C4','#000000','#8A2BE2','#D2691E','#696969','#8B0000','#FFFF00','#2F4F4F','#556B2F'],
      borderColor: "rgba(2,117,216,1)",
      data: centralidad,
    }],
  },
  options: {
  /*plugins: {

      colorschemes: {

        scheme: 'office.Atlas6',

      }

    },*/

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

function formatLabel(str, maxwidth){
    var sections = [];
    var words = str.split(" ");
    var temp = "";

    words.forEach(function(item, index){
        if(temp.length > 0)
        {
            var concat = temp + ' ' + item;

            if(concat.length > maxwidth){
                sections.push(temp);
                temp = "";
            }
            else{
                if(index == (words.length-1))
                {
                    sections.push(concat);
                    return;
                }
                else{
                    temp = concat;
                    return;
                }
            }
        }

        if(index == (words.length-1))
        {
            sections.push(item);
            return;
        }

        if(item.length < maxwidth) {
            temp = item;
        }
        else {
            sections.push(item);
        }

    });

    return sections;
}