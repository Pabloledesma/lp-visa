// JavaScript Document
$(function() {

	var storeFront = '';
	//Agrega eventos al selector
	$("#DESDE").on("change", function(){
		var selected = $(this).val();
		$.each( sysCities.fromcities, function(index, value){
			if( value.id == selected ){
				selected = value.name.substr( value.name.length - 2, 2 );
			}
		});
		
		if(selected != 'CO' && selected != 'BR' && selected != 'CA' && selected != 'US'){
			storeFront = 'GS';
		} else {
			storeFront = selected;
		}

	});

	$("#btnSubmit").on('click', function(){
		if( storeFront ){
			buscarVuelos( storeFront );
		} 
	});

	$.datepicker.setDefaults($.datepicker.regional['es']);
	var dates = $( "#from, #to" ).datepicker({
		dateFormat: 'dd/mm/yy',
		numberOfMonths: 2,
		minDate: departure_date,
		maxDate: return_date,
        onSelect: function( selectedDate ) {
            var option = this.id == "from" ? "minDate" : "maxDate",
                instance = $( this ).data( "datepicker" ),
                date = $.datepicker.parseDate(
                    instance.settings.dateFormat ||
                    $.datepicker._defaults.dateFormat,
                    selectedDate, instance.settings );
            dates.not( this ).datepicker( "option", option, date );
        }
    });
	
	$("input:radio[name=radIdaVuelta]").change(function(){
		valIdaVuelta = $('input:radio[name=radIdaVuelta]:checked').val(); 
		if(valIdaVuelta == "RT"){
			$("#inputRegreso").show();
		}else{
			$("#inputRegreso").hide();
		}
		//$('#to').attr('disabled', 'true');
		
	}) 	
	
});
function buscarVuelos( storeFront ) {
	var lang = $("html").attr('lang');
	
	v_FROM = $("#DESDE").val();	
	if (v_FROM == "" || v_FROM == undefined || v_FROM == 0) {
		console.log('v_FROM: ' + v_FROM);
		switch( lang ){
			case 'es':
				alert( msj.es.city_origin_null );
				break;
			case 'en':
				alert( msj.en.city_origin_null );
				break;
			case 'pt':
				alert( msj.pt.city_origin_null );
				break;
		}
		
		return false;
	}
	v_TO = $("#HACIA").val();
	if (v_TO == "" || v_TO == undefined || v_TO == 0) {
		switch( lang ){
			case 'es':
				alert( msj.es.destination_city_null );
				break;
			case 'en':
				alert( msj.en.destination_city_null );
				break;
			case 'pt':
				alert( msj.pt.destination_city_null );
				break;
		}
		return false;
	}
	if(v_FROM == v_TO){
		switch( lang ){
			case 'es':
				alert( msj.es.origin_destination );
				break;
			case 'en':
				alert( msj.en.origin_destination );
				break;
			case 'pt':
				alert( msj.pt.origin_destination );
				break;
		}
		return false;
	}
	
	v_FROMDATE = $("#from").val();
	if (v_FROMDATE == "" || v_FROMDATE == undefined) {
		switch( lang ){
			case 'es':
				alert( msj.es.departure_date );
				break;
			case 'en':
				alert( msj.en.departure_date );
				break;
			case 'pt':
				alert( msj.pt.departure_date );
				break;
		}
		return false;
	}
	v_radIdaVuelta = $('input:radio[name=radIdaVuelta]:checked').val();
	if(v_radIdaVuelta == "RT"){
		v_TODATE = $("#to").val();
		if (v_TODATE == "" || v_TODATE == undefined) {
			switch( lang ){
			case 'es':
				alert( msj.es.return_date );
				break;
			case 'en':
				alert( msj.en.return_date );
				break;
			case 'pt':
				alert( msj.pt.return_date );
				break;
		}
			return false;
		}
	}else{
		v_TODATE = "";	
	}


/*
* Busca el nombre de una cookie y retorna su valor
*
* @cname  String  Nombre de la cookie
***/
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

var d1 = getCookie("cname");
if(d1 == ""){
	d1 =  s.pageName;
}

	//track_medio = $("#d1").val();
	v_codigoprom = $("#coupon").val();
	v_radIdaVuelta = $('input:radio[name=radIdaVuelta]:checked').val();
	
	arr_elm = v_FROMDATE.split("/");
	v_diasalida = arr_elm[0];
	v_messalida = arr_elm[1];
	v_anosalida = arr_elm[2];
	
	arr_elm = v_TODATE.split("/");
	v_diaregreso = arr_elm[0];
	v_mesregreso = arr_elm[1];
	v_anoregreso = arr_elm[2];
	
	v_fechas = $('input:radio[name=fechas]:checked').val();
	v_cabinClass = $('input:radio[name=cabinClass]:checked').val();
	
	v_pasajeros = $("#pasajeros").val();
	v_pasajerosninos = $("#cbpasajerosninos").val();
	v_infantesPasajeros = $("#cbinfantesPasajeros").val();
	
	goBooking(
		d1,
		storeFront,
		v_codigoprom,
		v_radIdaVuelta,
		v_FROM,
		v_TO,
		v_diasalida,
		v_messalida,
		v_anosalida,
		v_diaregreso,
		v_mesregreso,
		v_anoregreso,
		v_fechas,
		v_cabinClass,
		v_pasajeros,
		v_pasajerosninos,
		v_infantesPasajeros
	);

	return false;
}
/*function goBooking(track_medio,v_codigoprom,v_radIdaVuelta,v_FROM,v_TO,v_diasalida,v_messalida,v_anosalida,v_diaregreso,v_mesregreso,v_anoregreso,v_fechas,v_cabinClass,v_pasajeros,v_pasajerosninos,v_infantesPasajeros){
	window.open("https://bookings.copaair.com/CMGS/AirLowFareSearchExternal.do?d1="+track_medio+"&tripType="+v_radIdaVuelta+"&outboundOption.originLocationCode="+v_FROM+"&outboundOption.destinationLocationCode="+v_TO+"&outboundOption.departureDay="+v_diasalida+"&outboundOption.departureMonth="+v_messalida+"&outboundOption.departureYear="+v_anosalida+"&inboundOption.destinationLocationCode="+v_FROM+"&inboundOption.originLocationCode="+v_TO+"&inboundOption.departureDay="+v_diaregreso+"&inboundOption.departureMonth="+v_mesregreso+"&inboundOption.departureYear="+v_anoregreso+"&coupon="+v_codigoprom+"&flexibleSearch="+v_fechas+"&cabinClass="+v_cabinClass+"&guestTypes[0].type=ADT&guestTypes[0].amount="+v_pasajeros+"&guestTypes[1].type=CNN&guestTypes[1].amount="+v_pasajerosninos+"&guestTypes[2].type=INF&guestTypes[2].amount="+v_infantesPasajeros+"&pos=CMGS&lang=en")
}*/

function goBooking(d1, storeFront, v_codigoprom,v_radIdaVuelta,v_FROM,v_TO,v_diasalida,v_messalida,v_anosalida,v_diaregreso,v_mesregreso,v_anoregreso,v_fechas,v_cabinClass,v_pasajeros,v_pasajerosninos,v_infantesPasajeros){
	window.open("https://bookings.copaair.com/CMGS/AirLowFareSearchExternal.do?d1="+d1+"&tripType="+v_radIdaVuelta+"&outboundOption.originLocationCode="+v_FROM+"&outboundOption.destinationLocationCode="+v_TO+"&outboundOption.departureDay="+v_diasalida+"&outboundOption.departureMonth="+v_messalida+"&outboundOption.departureYear="+v_anosalida+"&inboundOption.destinationLocationCode="+v_FROM+"&inboundOption.originLocationCode="+v_TO+"&inboundOption.departureDay="+v_diaregreso+"&inboundOption.departureMonth="+v_mesregreso+"&inboundOption.departureYear="+v_anoregreso+"&coupon="+v_codigoprom+"&flexibleSearch="+v_fechas+"&cabinClass="+v_cabinClass+"&guestTypes[0].type=ADT&guestTypes[0].amount="+v_pasajeros+"&guestTypes[1].type=CNN&guestTypes[1].amount="+v_pasajerosninos+"&guestTypes[2].type=INF&guestTypes[2].amount="+v_infantesPasajeros+"&pos=CM"+storeFront+"&lang=es")
}

//programacion landing
$(document).ready(function(){
	function loadHtml(num) {
		
		$("#bt"+num).parent().addClass("active");
		$("#bt"+num).addClass("active");
		
		$("#load_content").fadeOut("fast", function(){
			$('#load_content').load("info/"+num +".html", function(){
				$("#load_content").fadeIn("slow");
			});
		});
		
    }
    
    var firstTab = $("ul#tarifas li a").first().attr('href');

    //no es compatible con jquery 2
    // $.history.init(function(url) {
    //     loadHtml(url == "" ? firstTab : url);
    // });

    $('.jqload').on('click', function(e) {

		$('.colmenu li a').each(function(){
			$(this).parent().removeClass("active");
			$(this).removeClass("active");
		});

        $(this).parent().addClass("active");
        $(this).addClass("active");

        var url = $(this).attr('href');
        url = url.replace(/^.*#/, '');
        loadHtml(url);
        e.preventDefault();
    });
		
});

new Vue({
    el: '#canvas_booking',
    data: {
        coupon: null,
        showError: false,
        couponLink: true,
        lang: 'es',
        from: 0,
        to: 0,
        departure_date: '',
        return_date: '',
        adults: 1,
        childs: 0,
        infants: 0,
        business: false,
        economy: true,
        fromcities: sysCities.fromcities,
        tocities: sysCities.tocities,
        msg: sysCities.msg,
        promoCodes: promoCodes
    },

    methods: {

    	/*
    	* El código promocional debe estar en minuscula, no se permiten caracteres especiales
    	* y debe hacer match con uno de los códigos en el arreglo.
    	*
    	* @promoCodes -> Array: Arreglo de códigos promocionales
    	* */
        validateCoupon: function(){

        	this.coupon = this.coupon.toUpperCase();
            this.showError = this.promoCodes.indexOf( this.coupon ) !== -1 ;
        },

        showCoupon: function(){
        	this.couponLink = !this.couponLink;
        },

        validateFields: function(){

        }
    }
});
		
