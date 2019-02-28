// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("Grafico_Resultados");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['cons_con','atrap_esc','cond_end','enf_pre','cen_sal','zon_urb','n_pers','norm_con','serv_bas','carr_trans','cont_cad','des_alim','terr_noc','fam_muer','hac_san','estc_agua','cont_mar','int_med','replicas','lluvias'],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [3.18,2.37,2.34,2.3,2.23,2.23,1.84,1.83,1.8,1.59,1.56,1.14,1.11,1.1099,1.04,0.97,0.87,0.78,0.75,0.72],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
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
    legend: {
      display: false
    }
  }
});