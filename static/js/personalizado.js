
	function mueveReloj(){
        momentoActual = new Date();
        //Hora
        hora = (momentoActual.getHours() < 10) ? '0' + momentoActual.getHours() : momentoActual.getHours();
        minuto = (momentoActual.getMinutes() < 10) ? '0' + momentoActual.getMinutes() : momentoActual.getMinutes();
        segundo = (momentoActual.getSeconds() < 10) ? '0' + momentoActual.getSeconds() : momentoActual.getSeconds();

        //Fecha
        dia =(momentoActual.getDate() < 10) ? '0' + momentoActual.getDate() : momentoActual.getDate();
        mes = ((momentoActual.getMonth()+1) < 10) ? '0' + (momentoActual.getMonth()+1) :(momentoActual.getMonth()+1);
        año = momentoActual.getFullYear();

        //Al mes se le pone +1 por que va del 0 al 11
        horaImprimible=dia+'/'+mes+'/'+año+"<br>"+ hora + " : " + minuto + " : " + segundo;
		document.getElementById('reloj').innerHTML=horaImprimible;

        //La función se tendrá que llamar así misma para que sea dinámica, 
        //de esta forma:

        setTimeout(mueveReloj,1000);
    }

