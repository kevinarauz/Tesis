var logitudMatrizRelacion=0;
var logitudMatrizCentralidad=0;

//arrays de centralidad
var auxfactorCentralidad=[];
var auxIndegree=[];
var auxOutdegree=[];
var auxTotaldegree=[];
var auxDesneutrosificacion=[];
var auxMedianaValores=[];

//arrays para indegree y outdeegree difusos y neutrosoficos
var inDifuso=[];
var inNeutrosofico=[];
var outDifuso=[];
var outNeutrosofico=[];
var TotalDegreeDifuso=[];
var TotalDegreeNeutrosofico=[];
var TotalDesneutrosificacionDifuso=[];
var TotalDesneutrosificacionNeutrosofico=[];

function limpiarArrays(){
	longitudFactorCentralidad=0;
	auxfactorCentralidad=[];
}
function InicializarArrays(){
	auxIndegree=[];
	auxOutdegree=[];
	auxTotaldegree=[];
	auxDesneutrosificacion=[];
	auxMedianaValores=[];

	inDifuso=[];
	inNeutrosofico=[];
	outDifuso=[];
	outNeutrosofico=[];
	TotalDegreeDifuso=[];
	TotalDegreeNeutrosofico=[];
	TotalDesneutrosificacionDifuso=[];
	TotalDesneutrosificacionNeutrosofico=[];
	for (var i=0; i<auxfactorCentralidad.length; i++) {
		auxIndegree[i]=0;
		auxOutdegree[i]=0;
		auxTotaldegree[i]=0;
		auxDesneutrosificacion[i]=0;
		auxMedianaValores[i]=0;
		//auxiliares para indegree y outdeegree
		inDifuso[i]=0;
		inNeutrosofico[i]=0;
		outDifuso[i]=0;
		outNeutrosofico[i]=0;
		TotalDegreeDifuso[i]=0;
		TotalDegreeNeutrosofico[i]=0;
		TotalDesneutrosificacionDifuso[i]=0;
		TotalDesneutrosificacionNeutrosofico[i]=0;
	}
}

$(document).ready(function() {
    $('#example').DataTable( {
		//"order": [[ 0, "desc" ]],//ordenar el primer factor desc ya que comienza por 0
		"pageLength": 50,
		language: {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "infoEmpty": "Mostrando 0 a 0 de 0 Entradas",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
		}
		},
        dom: 'Bfrtip',
        buttons: [
            'copy',
			{extend:'csvHtml5',title: 'Matriz de Relacion'},
			{extend:'excelHtml5',title: 'Matriz de Relacion'},
			{extend:'pdfHtml5',title: 'Matriz de Relacion'},
			{extend:'print',title: 'Matriz de Relacion'}
        ],
        dom: "<'row'<'col-md-3'l><'col-md-6 text-center'B><'col-md-3'f>>" +
         "<'row'<'col-md-12'tr>>" +
         "<'row'<'col-md-5'i><'col-md-7'p>>",
        drawCallback: function(settings) {
			if (!$('.datatable').parent().hasClass('table-responsive')) {
				$('.datatable').wrap("<div class='table-responsive'></div>");
			}
		}
    } );
});

$(document).ready(function() {
    $('#centralidad').DataTable( {
		"order": [[ 5, "desc" ]],//ordenar el primer factor desc ya que comienza por 0
		"aoColumnDefs": [ { 'bSortable': false, 'aTargets': [ 0,1,2,3,4,5 ] } ],//desabilitar columnas
		"pageLength": 50,
        language: {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "infoEmpty": "Mostrando 0 a 0 de 0 Entradas",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
        }
		},
		dom: 'Bfrtip',
        buttons: [
            'copy',
			{extend:'csvHtml5',title: 'Centralidad'},
			{extend:'excelHtml5',title: 'Centralidad'},
			{extend:'pdfHtml5',title: 'Centralidad'},
			{extend:'print',title: 'Matriz de Centralidad'}
        ],
        dom: "<'row'<'col-md-3'l><'col-md-6 text-center'B><'col-md-3'f>>" +
         "<'row'<'col-md-12'tr>>" +
         "<'row'<'col-md-5'i><'col-md-7'p>>",
        drawCallback: function(settings) {
			if (!$('.datatable').parent().hasClass('table-responsive')) {
				$('.datatable').wrap("<div class='table-responsive'></div>");
			}
		}
    } ); //$('#centralidad').dataTable( { "aoColumnDefs": [ { 'bSortable': false, 'aTargets': [ 0,1,2,3,4 ] } ] });
});

//cargar modelo
/*$(document).ready(function() {
    var t = $('#example').DataTable();
	var factor=
	var relacion=
	var peso=
	table.row.add( [factor,relacion,peso,tipo,editar,borrar]).draw();

    $('#addRow').on( 'click', function () {
		table.row.add( [factor,relacion,peso,tipo,editar,borrar]).draw();
        t.row.add( [
            '<p name="numero_f[]">'+counter +'.1',
            '<p name="numero_f[]">'+counter +'.2',
            '<p name="numero_f[]">'+counter +'.3',
            '<p name="numero_f[]">'+counter +'.4'
        ] ).draw( false );

        counter++;
    } );

    // Automatically add a first row of data
    $('#addRow').click();
} );*/


function borrarTodaTablaRelacion(){
	logitudMatrizRelacion=0;
	var table = $('#example').DataTable();
	table.clear().draw();
}

function borrarTodaTablaCentralidad(){
	logitudMatrizCentralidad=0;
	var table = $('#centralidad').DataTable();
	table.clear().draw();
}

/*
//añadir dato
$(document).ready(function() {
    var t = $('#example').DataTable();
    var counter = 1;

    $('#addRow').on( 'click', function () {
        t.row.add( [
            counter +'.1',
            counter +'.2',
            counter +'.3',
            counter +'.4',
            counter +'.5',
			counter +'.6'
        ] ).draw( false );

        counter++;
    } );

    // Automatically add a first row of data
    $('#addRow').click();
} );
*/
//borrar fila seleccionada de la matriz de relacion
$(document).ready(function() {
    var table = $('#example').DataTable();

    $('#example tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');;
        }
        else {
            table.$('tr.selected').removeClass('selected');//para seleccionar una fila antes de borrar
            $(this).addClass('selected');
        }
    } );

    $('#button').click( function () {
        table.row('.selected').remove().draw( false );//jbuborrar fila seleccionada
		logitudMatrizRelacion=logitudMatrizRelacion-1;
		calcularCentralidad();
	    generarGrafico();
    } );
});


function calcularCentralidad(){
	borrarTodaTablaCentralidad();
	limpiarArrays();
	limpiarGraficoBarras();
	if(logitudMatrizRelacion == 0){
		//alert("No existen relaciones.");
	}else{
		var t = $('#centralidad').DataTable();
		//console.log(logitudMatrizRelacion);
		calcularFactorCentralidad();
		calcularIndeegree();
		calcularOutdeegree();
		calcularTotalDeegree();
		calcularDesneutrosificacion();
		calcularMedianaValores();

		for (var i=0; i<auxfactorCentralidad.length; i++) {
			var factorCentralidad='<p name="factorCentralidad[]">'+auxfactorCentralidad[i]+'</p>';
			var indeegree='<p name="indeegree[]">'+auxIndegree[i]+'</p>';
			var outdeegree='<p name="outdeegree[]">'+auxOutdegree[i]+'</p>';
			var totaldeegree='<p name="totaldeegree[]">'+auxTotaldegree[i]+'</p>';
			var desneutrosificacion='<p name="desneutrosificacion[]">'+auxDesneutrosificacion[i]+'</p>';
			var medianavalores='<p name="medianavalores[]">'+auxMedianaValores[i]+'</p>';
			t.row.add( [factorCentralidad,indeegree,outdeegree,totaldeegree,desneutrosificacion,medianavalores]).draw();
		}
		generarGrafico();//grafico de barras
		//generarGraficaPastel();//grafico de pastel
	}
}

function calcularFactorCentralidad(){
	var auxFactorEmisor = document.getElementsByName("factor[]");
	var auxFactorRelacion = document.getElementsByName("relacion[]");
	var contadorAux=0;
	var valida=2;//1 es guardar y 2 no guarda
	for (var i=0; i<logitudMatrizRelacion; i++) {
		if(contadorAux==0){
			auxfactorCentralidad[i]=auxFactorEmisor[i].innerHTML;
		    contadorAux=contadorAux+1;
		}else{
			//console.log(auxfactorCentralidad.length);
			//console.log(auxFactorEmisor.length);

			for (var j=0; j<auxfactorCentralidad.length; j++) {
				if(auxfactorCentralidad[j]==auxFactorEmisor[i].innerHTML){
					valida=2;
					j=auxfactorCentralidad.length;
				}else{
					valida=1;
				}
			}
		}
		if(valida==1){
			auxfactorCentralidad[auxfactorCentralidad.length]=auxFactorEmisor[i].innerHTML;
			contadorAux=contadorAux+1;
			valida=2;
		}
	}
	valida=2;
	console.log(auxfactorCentralidad.length);
	console.log(auxFactorRelacion.length);
	for (var i=0; i<logitudMatrizRelacion; i++) {
		for (var j=0; j<auxfactorCentralidad.length; j++) {
			if(auxfactorCentralidad[j]==auxFactorRelacion[i].innerHTML){
				valida=2;
				j=auxfactorCentralidad.length;
			}else{
				valida=1;
			}
		}
		if(valida==1){
			auxfactorCentralidad[auxfactorCentralidad.length]=auxFactorRelacion[i].innerHTML;
			contadorAux=contadorAux+1;
			valida=2;
		}
	}
	InicializarArrays();
	/*
	for (var i=0; i<auxfactorCentralidad.length; i++) {
		console.log(auxfactorCentralidad[i]);
	}
	console.log(auxfactorCentralidad.length);*/
}

function calcularIndeegree(){
	var auxFactorEmisor = document.getElementsByName("factor[]");
	var auxPeso = document.getElementsByName("peso[]");

	for (var i=0; i<logitudMatrizRelacion; i++) {

		for (var j=0; j<auxfactorCentralidad.length; j++) {
			if(auxfactorCentralidad[j]==auxFactorEmisor[i].innerHTML){
				if(!isNaN(auxPeso[i].innerHTML)){
					inDifuso[j]=inDifuso[j]+parseFloat(auxPeso[i].innerHTML);
					//auxIndegree[i]=auxPeso[i].innerHTML;
				}else{
					inNeutrosofico[j]="I";
				}
			}
			//auxIndegree;
		}
	}
	/*
	for (var i=0; i<auxfactorCentralidad.length-1; i++) {
		console.log(inNeutrosofico[i]);
	}
	*/
	for (var i=0; i<auxfactorCentralidad.length; i++) {
		if(inNeutrosofico[i]==0){
			auxIndegree[i]=inDifuso[i];
		}else{
			auxIndegree[i]=inDifuso[i]+" + "+"I";
		}

	}
}

function calcularOutdeegree(){
	//var outDifuso=[];
    //var outNeutrosofico=[];
	//auxOutdegree[i]
	var auxFactorReceptor = document.getElementsByName("relacion[]");
	var auxPeso = document.getElementsByName("peso[]");
	//console.log(logitudMatrizRelacion);
	//console.log(auxFactorReceptor.length);
	for (var i=0; i<logitudMatrizRelacion; i++) {
		for (var j=0; j<auxfactorCentralidad.length; j++) {
			if(auxfactorCentralidad[j]==auxFactorReceptor[i].innerHTML){
				if(!isNaN(auxPeso[i].innerHTML)){
					outDifuso[j]=outDifuso[j]+parseFloat(auxPeso[i].innerHTML);
					//auxIndegree[i]=auxPeso[i].innerHTML;
				}else{
					outNeutrosofico[j]="I";
				}
			}
			//auxIndegree;
		}
	}
	/*
	for (var i=0; i<auxfactorCentralidad.length-1; i++) {
		console.log(inNeutrosofico[i]);
	}
	*/
	for (var i=0; i<auxfactorCentralidad.length; i++) {
		if(outNeutrosofico[i]==0){
			auxOutdegree[i]=outDifuso[i];
		}else{
			auxOutdegree[i]=outDifuso[i]+" + "+"I";
		}

	}
}

function calcularTotalDeegree(){
	//auxTotaldegree
	//TotalDegreeDifuso
	//TotalDegreeNeutrosofico
	var suma=0;
	for (var i=0; i<auxfactorCentralidad.length; i++) {
		//suma=0;
		//suma=(parseFloat(inDifuso[i])+parseFloat(outDifuso[i]));
		//TotalDegreeDifuso[i]
		TotalDegreeDifuso[i]=(parseFloat(inDifuso[i])+parseFloat(outDifuso[i]));
		if(inNeutrosofico[i]==0 && outNeutrosofico[i]==0){
			auxTotaldegree[i]=TotalDegreeDifuso[i];
		}else{
			TotalDegreeNeutrosofico[i]="I";
			auxTotaldegree[i]=TotalDegreeDifuso[i]+" + "+TotalDegreeNeutrosofico[i];
		}
	}
}

function calcularDesneutrosificacion(){
	//auxDesneutrosificacion
	//TotalDesneutrosificacionDifuso
	//TotalDesneutrosificacionNeutrosofico

	var numeroRandom=Math.random();
	var aleatorio = numeroRandom.toFixed(2);

	while(aleatorio==0){
		numeroRandom=Math.random();
		aleatorio = numeroRandom.toFixed(2);
	}
	for (var i=0; i<auxfactorCentralidad.length; i++) {
		TotalDesneutrosificacionDifuso[i]=TotalDegreeDifuso[i];
		if(inNeutrosofico[i]==0 && outNeutrosofico[i]==0){
			auxDesneutrosificacion[i]=TotalDesneutrosificacionDifuso[i];
		}else{
			//TotalDesneutrosificacionNeutrosofico[i]=(parseFloat(auxTotaldegree[i])+(parseFloat(auxTotaldegree[i])+parseFloat(aleatorio)));
			TotalDesneutrosificacionNeutrosofico[i]=(parseFloat(TotalDesneutrosificacionDifuso[i])+parseFloat(aleatorio));
			auxDesneutrosificacion[i]=TotalDesneutrosificacionDifuso[i]+" + "+TotalDesneutrosificacionNeutrosofico[i].toFixed(2);
		}
	}
	//alert(""+aleatorio);
}

function calcularMedianaValores(){
	var total=0;
	for (var i=0; i<auxfactorCentralidad.length; i++) {
	    if(inNeutrosofico[i]==0 && outNeutrosofico[i]==0){
	        total=TotalDesneutrosificacionDifuso[i];
		    auxMedianaValores[i]=total;
	    }else{
            total=((parseFloat(TotalDesneutrosificacionDifuso[i])+parseFloat(TotalDesneutrosificacionNeutrosofico[i]))/2);
		    auxMedianaValores[i]=total.toFixed(2);
	    }
	}
}

function cargarCsv(){
	eliminarSelectVariables();
	borrarTodaTablaRelacion();
	borrarTodaTablaCentralidad();
	limpiarGraficoBarras();
	//limpiarArrays();
	  var rdr = new FileReader();
                rdr.onload = function (e) {
                  //get the rows into an array
                  var therows = e.target.result.split("\n");
				  //logitudMatrizRelacion=therows.length-1;
                  //loop through the rows
				  //alert(therows.length);
                  for (var row = 1; row < therows.length; row++  ) {
					//variables

                    //build a new table row
                    var newrow = "";
                    //get the columns into an array
                    var columns = therows[row].split(",");
                    //get number of columns
                    var colcount=columns.length;

					var factor='<p name="factor[]">'+columns[0].replace(/['"]+/g, '')+"</p>";
					var relacion='<p name="relacion[]">'+columns[1].replace(/['"]+/g, '')+"</p>";
					var peso='<p name="peso[]">'+columns[2].replace(/['"]+/g, '')+"</p>";
					var escala='<p name="escala[]">'+columns[3].replace(/['"]+/g, '')+"</p>";
					var tipo='<p name="tipo[]">'+columns[4].replace(/['"]+/g, '')+"</p>";
                    if(colcount!=5) {
                        //incorrect number of columns
                        //newrow="<tr class='badrowcount'><td>incorrect number of columns</td><td></td><td></td><td></td></tr>"
						//alert("Numero de columnas incorrecto.");
						row=therows.length;
                    } else {
						var t = $('#example').DataTable();
						t.row.add( [factor,relacion,peso,escala,tipo]).draw();
						logitudMatrizRelacion=logitudMatrizRelacion+1;
						/*newrow="<tr>"+
						"<td> "+  columns[0].replace(/['"]+/g, '') +  "</td>"+
						"<td> "+  columns[1].replace(/['"]+/g, '') +  "</td>"+
						"<td> "+  columns[2].replace(/['"]+/g, '') +  "</td>"+
						"<td> "+  columns[3].replace(/['"]+/g, '') +  "</td>"+
						"</tr>";*/
					}
					//$('#tableMain').append(newrow);
				  }//alert(logitudMatrizRelacion);

				  calcularCentralidad();
				  agregarVariablesCentralidad();
				  generarGrafico();
                }

				rdr.readAsText($("#inputfile")[0].files[0]);

}