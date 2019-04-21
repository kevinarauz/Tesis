

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
					escala.innerHTML = "Positivamente débil ";
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
			
			function agregar () {
				if ( document.frm.txtDato.value.length == 0 ) {
					alert("Debes escribir algo");
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
					alert("Debes escribir algo");
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
            function cargarModelo(){
               // borrarTodaTablaRelacion();
	            //borrarTodaTablaCentralidad();
                var factor="kevin";
	            var relacion="joseline";
	            var peso="2.5";
	            var tipo="dif";
			    var table = $('#example').DataTable();
			    table.row.add( [factor,relacion,peso,tipo,editar,borrar]).draw();

			    var factor="diego";
	            var relacion="maria";
	            var peso="2.5";
	            var tipo="dif";
			    var table = $('#example').DataTable();
			    table.row.add( [factor,relacion,peso,tipo]).draw();

			    logitudMatrizRelacion=logitudMatrizRelacion+2;
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
			        alert("No se agrego relacion ya que no existe.");
			    }else{
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
			    }

			}

			//para limpiar el importar modelo el file
			function limpiarImportarModelo(){
                //aqui el codigo
			}