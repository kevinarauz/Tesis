

			var slider = document.getElementById("entradaRango");
			var salidaRango = document.getElementById("salidaRango");
			//salidaRango.innerHTML = slider.value;

			slider.oninput = function() {
				salidaRango.innerHTML = this.value;
				var escala = document.getElementById("escalaRango");
				if(salidaRango.innerHTML==0){
				    escala.innerHTML = "Sin relación";
				}else if(this.value>=0.88 && this.value<=1){
					escala.innerHTML = "Positivamente muy fuerte";
				}else if(this.value>=0.63 && this.value<=0.87){
					escala.innerHTML = "Positivamente fuerte";
				}else if(this.value>=0.38 && this.value<=0.62){
					escala.innerHTML = "Positivamente media";
				}else if(this.value>=0.13 && this.value<=0.37){
					escala.innerHTML = "Positivamente débil";
				}
				
				
				else if(this.value>="-0.88" && this.value<="-1"){
					escala.innerHTML = "Negativamente muy fuerte";
				}else if(this.value>="-0.63" && this.value<="-0.87"){
					escala.innerHTML = "Negativamente fuerte";
				}else if(this.value>="-0.38" && this.value<="-0.62"){
					escala.innerHTML = "Negativamente media";
				}else if(this.value>="-0.13" && this.value<="-0.37"){
					escala.innerHTML = "Negativamente debil";
				}else if(this.value>="0.12" && this.value<="-0.12"){
				    escala.innerHTML = "Cero";
				}else{
					escala.innerHTML = "Cero";
				}
			}

			function eliminarSelectVariables(){
				frm.variables.options.length=0;
			}
			
			function eliminarSelectFinal(){
				var select = document.getElementById("variablesFinales");
				var length = select.options.length;
				for (i = 0; i < length; i++) {
					select.options[i] = null;
				}
			}
			
			function eliminarSelectAuxVariables(){
				var select = document.getElementById("auxVariables");
				var length = select.options.length;
				for (i = 0; i < length; i++) {
					select.options[i] = null;
				}
			}

			function aplicarInferencia(){
			   /* var numeroRandom=Math.random();
			    var aleatorio = numeroRandom.toFixed(2);*/
			    var combo = document.getElementById("tipoFactor").value; //obtenemos el valor actual del select
			    if(combo=="Difuso"){
			        CargarRangoEntrada();
			        document.getElementById("entradaRango").disabled = false;
			        var auxEscala = document.getElementById("escalaRango");
                    auxEscala.innerHTML = "Sin relación";
			    }else{
			        //salidaRango.innerHTML=aleatorio;
			        //document.getElementById('entradaRango').value=aleatorio;
			        //CargarRangoEntrada();
			        document.getElementById("entradaRango").disabled = true;
			        document.getElementById('entradaRango').value=0;
			        salidaRango.innerHTML="Indeterminado";
			        var auxEscala = document.getElementById("escalaRango");
                    auxEscala.innerHTML = "Sin relación";
			    }
			}

			function pasarModal(){
			    var longitudVariables=frm.variables.options.length;
				if(longitudVariables>=2){
					CargarComboModal();
					//eliminarSelectVariables(); //funciono
					//formularioModal.auxVariables.options.length = frm.variables.options.length; //longitud del select
					$(document).ready(function(){
						$("#mostrarmodal").modal("show");
					});
					CargarComboModal();
				}else{
					alert("Faltan factores para implementar las relaciones.")
					$(document).ready(function(){
						$("#mostrarmodal").modal("hide");
					});
				}
			}
			
			function CargarComboModal(){
				//formularioModal.getElementById(id).options.length = 0;
				
				//formularioModal.variablesFinales.options.length = frm.variables.options.length; //longitud del select
				document.getElementById("entradaRango").disabled = false;
				CargarSelectFinal();
				CargarSelectAuxiliar();
				CargarRangoEntrada();
				formularioModal.tipoFactor.selectedIndex=0; //0=difuso y 1=neutrosofico
			}
			function CargarSelectFinal(){
				formularioModal.variablesFinales.options.length = frm.variables.options.length; //longitud del select
				for(a=0;a<frm.variables.options.length;a++){
					formularioModal.variablesFinales.options[a].value = frm.variables.options[a].value;
					formularioModal.variablesFinales.options[a].text = frm.variables.options[a].text;
				}
				formularioModal.variablesFinales.selectedIndex = 0;
			}
			
			function CargarSelectAuxiliar(){
				formularioModal.auxVariables.options.length = frm.variables.options.length; //longitud del select
				var combo = document.getElementById("variablesFinales").value; //obtenemos el valor actual del select
				var x = document.getElementById("auxVariables"); //obtener los valores del select auxiliar
				for(a=0;a<frm.variables.options.length;a++){
					if(combo==frm.variables.options[a].value){
						formularioModal.auxVariables.selectedIndex= a;
					}else{
						
					}
					formularioModal.auxVariables.options[a].value = frm.variables.options[a].value;
					formularioModal.auxVariables.options[a].text = frm.variables.options[a].text;
				}
				x.remove(x.selectedIndex);
			}
			
			function CargarRangoEntrada()
			{
			    //inicializa los pesos
				document.getElementById('entradaRango').value=0; //barra de progreso del rango
				salidaRango.innerHTML = 0; //valor de salida que aparece cuando se mueve el rango
				//inicializa las escala de significancia
                var auxEscala = document.getElementById("escalaRango");
                auxEscala.innerHTML = "Sin relación";
			}
			
			function cambiarFactores(){
				formularioModal.auxVariables.options.length = formularioModal.variablesFinales.options.length; //longitud del select
				var combo = document.getElementById("variablesFinales").value; //obtenemos el valor actual del select
				var x = document.getElementById("auxVariables");
				for(a=0;a<formularioModal.variablesFinales.options.length;a++){
						if(combo==formularioModal.variablesFinales.options[a].value){ //si son iguales agrego
							formularioModal.auxVariables.selectedIndex= a;
						}
						formularioModal.auxVariables.options[a].value = formularioModal.variablesFinales.options[a].value;
						formularioModal.auxVariables.options[a].text = formularioModal.variablesFinales.options[a].text;
				}
				x.remove(x.selectedIndex);
			}

			function agregarVariablesCentralidad(){
			    var auxfactorCentralidad = document.getElementsByName("factorCentralidad[]");
			    var combo = document.getElementById("variables");
			    for(var i=0; i<auxfactorCentralidad.length; i++){
                    //var opcion = document.createElement("opcion");
                    //opcion.text = auxfactorCentralidad[i].innerHTML;
                    //auxVariables.add(opcion);

                    var option = document.createElement("option");
					combo.options.add(option, i);
					combo.options[i].value = auxfactorCentralidad[i].innerHTML;
				    combo.options[i].innerText = auxfactorCentralidad[i].innerHTML;

			    }

			}

			function agregar () {
				if ( document.frm.txtDato.value.length == 0 ) {
					alert("Escriba el nombre del factor.");
				} else {
					var nuevoItem = document.frm.txtDato.value; //obtenemos el valor que agregamos por teclado
					var combo = document.getElementById("variables");//obtenemos un select

					var valida=1;
					//alert("Dato "+combo.length);
					for (var i=0; i<combo.length; i++) {
						if(nuevoItem == combo[i].innerHTML){
							valida=2;
						}
						//alert("Dato "+combo[i].innerHTML);
					}
					if(valida=="2"){
							alert("Las variables son iguales ingrese otra.");
					}else{
							//alert("no son iguales");
							var option = document.createElement("option");
							combo.options.add(option, 0);
							combo.options[0].value = nuevoItem;
					        combo.options[0].innerText = nuevoItem;
					        document.frm.txtDato.value = "";
					}
				}
				frm.variables.selectedIndex = 0;
			}

			function validarRelaciones(){

			}

			function eliminar() {
				var combo = document.getElementById("variables");
				if(frm.variables.options.length==0){
				    alert("No hay factores para eliminar");
				}
				else{
				    combo.remove(document.getElementById("variables").selectedIndex);
				}
			}

			function modificar() {
				if ( document.frm.txtDato.value.length == 0 ) {
					alert("Debes escribir el factor a modificar");
				} else {
					var nuevoItem = document.frm.txtDato.value; //obtenemos el valor que agregamos por teclado
					var combo = document.getElementById("variables");//obtenemos un select
					var valida=1;
					//alert("Dato "+combo.length);
					for (var i=0; i<combo.length; i++) {
						if(nuevoItem == combo[i].innerHTML){
							valida=2;
						}
					}
					if(valida=="2"){
							alert("El factor a modificar ya existe.");
					}else{
					        if(frm.variables.options.length==0){
					        alert("No hay factor para modificar.");
					        }else{
					        eliminar();
							agregar();
					        }

					}

				}
			}

		/*	function lee_json() {
            $.getJSON("/obtenerRelaciones", function(datos) {
                alert("Dato: " + datos["dato"]);
                $.each(datos["relacion"], function(idx,primo) {
                    alert("Numero primo: " + primo);
                });
            });

        }*/
            function cargarModelo(){
                borrarTodaTablaRelacion();
                eliminarSelectVariables();
	            //lee_json();
	            $.ajax({
                    url: "/obtenerRelaciones",
                    type: "GET",
                    dataType: "json",
                    //async : false,
                    success: function(data){
                        //console.log(data.length);
                        for(i=0;i<data.length;i++){
                            //console.log(data[i]['peso']);
                            var factor='<p name="factor[]" >'+data[i]['factor']+"</p>";
					        var relacion='<p name="relacion[]">'+data[i]['relacion']+"</p>";
					        var peso='<p name="peso[]">'+data[i]['peso']+"</p>";
					        var escala='<p name="escala[]">'+data[i]['escala']+"</p>";
					        var tipo='<p name="tipo[]">'+data[i]['tipo']+"</p>";
					        var t = $('#example').DataTable();
						    t.row.add( [factor,relacion,peso,escala,tipo]).draw();
					        logitudMatrizRelacion=logitudMatrizRelacion+1;
                        }
                        //var auxFactorEmisor = document.getElementsByName("factor[]");
                        //console.log(auxFactorEmisor.length);
                      /*  for (var j=0; j<auxFactorEmisor.length; j++) {
                            console.log(auxFactorEmisor[j].innerHTML);
                        }*/
                        calcularCentralidad();
                        agregarVariablesCentralidad();
                        generarGrafico();
                    }
                });
            }

            function comprobarRelacion(){
                var xauxFactor = document.getElementsByName("factor[]");
	            var xauxRelacion = document.getElementsByName("relacion[]");
	            var xfactor = document.getElementById("variablesFinales").value;
	            var xrelacion = document.getElementById("auxVariables").value;
	            for (var i=0; i<logitudMatrizRelacion; i++) {
                    if(xauxFactor[i].innerHTML==xfactor && xauxRelacion[i].innerHTML==xrelacion){
                        return 0;
                    }
	            }
	            return 1;
            }

			function agregarRelacion() {
			    //creamos los datos
			    var factor='<p name="factor[]">'+document.getElementById("variablesFinales").value+'</p>';
	            var relacion='<p name="relacion[]">'+document.getElementById("auxVariables").value+'</p>';
	            var peso=document.getElementById("entradaRango").value;
	            var escala=document.getElementById("escalaRango");
	            var valida=document.getElementById("salidaRango");

	            //console.log(valida.innerHTML);
	            if(valida.innerHTML==0){
			        alert("No se agrego relación ya que no existe.");
			    }else{
			        var validar = comprobarRelacion();
			        if(validar==1){
	                    if(peso==0){
	                        peso='<p name="peso[]">'+'Indeterminado'+'</p>';
	                        escala='<p name="escala[]">'+'Indeterminado'+'</p>';
	                    }else{
	                        peso='<p name="peso[]">'+peso+'</p>';
	                        escala='<p name="escala[]">'+escala.innerHTML+'</p>';
	                    }
	                    var tipo='<p name="tipo[]">'+document.getElementById("tipoFactor").value+'</p>';
			            //ingresamos los valores a la tabla
			            var table = $('#example').DataTable();
			            table.row.add( [factor,relacion,peso,escala,tipo]).draw();
			            logitudMatrizRelacion=logitudMatrizRelacion+1;
			            calcularCentralidad();
	                    generarGrafico();
	                }else{
	                    alert("No se agrego la relación ya existes.");
	                }
			    }

			}

			//para limpiar el importar modelo el file
			function limpiarImportarModelo(){
                //aqui el codigo
			}