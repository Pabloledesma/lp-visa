'use strict';

Vue.component('content-component', {
    template: '\n          <div id="contenido_tarifas">\n            <h3 class="titulos_destacados">{{ copy_superior.titulo }}</h3>\n            <div class="mensajes">\n                <p>{{copy_superior.cuerpo}}</p>\n            </div>\n            \n            <table class="table is-stripped">\n                <thead>\n                    <tr>\n                        <th>Origen</th>\n                        <th>Destino</th>\n                        <th>Precio (US)</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr v-for="tarifa in tarifas">\n                        <td>{{tarifa.origen}}</td>\n                        <td>{{tarifa.destino}}</td>\n                        <td>$ {{ tarifa.precio }}*</td>\n                    </tr>\n                </tbody>\n            </table>\n        \n    </div>  \n        ',
    data: function data() {
        return {
            tarifas: sysCities.tarifas,
            copy_superior: sysCities.copy_superior

        };
    }

});

// Vue.component('booking', {
// 	template: `
// 		<div>
// 		<p>Trip type {{ tripType }}</p>
//             <div id="canvas_booking">
//                 <div class="header"><p>¡Reserva tu vuelo ahora!</p></div>
//                     <div class="cWhite">
//                     <div class="mc_campos_line" id="radioButtons">
//                         <input name="radIdaVuelta" type="radio" :value="RT" v-model="tripType" />
//                         Ida y vuelta&nbsp;&nbsp;
//                         <input name="radIdaVuelta" type="radio" class="positioner_one" :value="OW" v-model="tripType" />
//                         Una Vía</div>
//                     </div>
//                     <div class="cBlue">
//                       <div class="mc_campos_line">
//                         <select class="mc_field_1" id="DESDE" name="DESDE" v-model="fromCity">

//                           <option v-for="fromcity in fromCities" :value="fromcity.id">{{ fromcity.name }}</option>
//                         </select>
//                         &nbsp;
//                         <select class="mc_field_1" id="HACIA" name="HACIA" v-model="toCity">

//                           <option v-for="tocity in toCities" :value="tocity.id">{{ tocity.name }}</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div class="cWhite">
//                       <div class="mc_campos_line">
//                         <input type="radio" value="Business" name="cabinClass" id="cabinClass" />
//                         Clase ejecutiva&nbsp;&nbsp;
//                         <input type="radio" checked="checked" value="Economy" name="cabinClass" id="cabinClass" />
//                         Clase econ&oacute;mica </div>
//                       </div>
//                       <div class="cBlue">
//                         <div class="mc_campos_line">
//                         	<span id="inputSalida"> Salida<br />
//                           		<input name="from" class="mc_field_2 datepicker" id="from" size="15" />
//                         	</span>

//                         	<span id="inputRegreso" v-if="tripType == 'RT'">Regreso<br />
//                         		<input name="to" class="mc_field_2 datepicker" id="to" size="15" />
//                       		</span>
//                       	</div>
//                     </div>
//                     <div class="cWhite" style="display:none">
//                       <div class="mc_campos_line">
//                         <input name="fechas" type="radio" class="" id="fechas" value="false" />
//                         Fechas exactas&nbsp;&nbsp;
//                         <input type="radio" class="" value="true" name="fechas" id="fechas" checked="checked" />
//                         Fechas flexibles </div>
//                       </div>
//                       <div class="cWhite">
//                         <div class="mc_campos_line pasajeros">
//                           <div id="adultPassengers" class="line_sub">
//                             <div class="lbpas">Adultos<br />
//                               (12+)</div>
//                               <select class="select" id="pasajeros" name="pasajeros" v-model="passengers">
//                                 <option v-for="num in numbers" :value="num">{{ num }}</option>
//                               </select>
//                             </div>
//                             <div id="pasajerosninos" class="line_sub">
//                               <div class="lbpas">Ni&ntilde;os<br />
//                                 (2 - 11)</div>
//                                 <select class="select" id="cbpasajerosninos" name="cbpasajerosninos" v-model="childs">
//                                    <option v-for="num in numbers" :value="num">{{ num }}</option>
//                                 </select>
//                               </div>
//                               <div id="infantesPasajeros" class="line_sub">
//                                 <div class="lbpas">Infantes<br />
//                                   (0 - 1)</div>
//                                   <select class="select" id="cbinfantesPasajeros" name="cbinfantesPasajeros" v-model="infants">
//                                     <option v-for="num in numbers" :value="num">{{ num }}</option>
//                                   </select>
//                                 </div>
//                                 <div class="limpiar"></div>
//                               </div>
//                             </div>
//                             <div class="cWhite">
//                               <div class="btnSubmit">
//                                     <!-- <input name="coupon" id="coupon" placeholder="Código promocional" /> -->
//                                     <button id="btnSubmit" class="btn btn-primary">Buscar Vuelo</button>
//                                 </div>
//                               </div>
//                               <div class="limpiar"></div>
//                             </div>
//                           </div> 
// 		}
// 	`,
// 	data: function(){
// 		return {
// 			fromCities: info.fromcities,
// 			toCities: info.tocities,
// 			tripType: 'RT',
// 			fromCity: 0,
// 			toCity: 0,
// 			numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
// 			passengers: 1,
// 			childs: 0,
// 			infants: 0
// 		}
// 	}
// })


new Vue({
    el: '#app',

    data: {
        tyc: sysCities.tyc
    }
});