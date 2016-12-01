var sysCities = {
    "fromcities": [
   {"name":"Rosario, AR", "id":"ROS"}
    ],

    "tocities": [
    {"name":"M&eacute;xico - Ciudad, MX", "id":"MEX"},
	{"name":"Holguín, CU", "id":"HOG"},
	{"name":"La Habana, CU", "id":"HAV"},
	{"name":"Los Vegas, US", "id":"LAS"},
	{"name":"Miami, US", "id":"MIA"},
	{"name":"Montego Bay, JM", "id":"MBJ"},
	{"name":"Nueva Orle&aacute;ns, US", "id":"MSY"},
	{"name":"Nueva York, US", "id":"JFK"},
	{"name":"Orlando, US", "id":"MCO"},
	 {"name":"San Juan, PR", "id":"SJU"},
	 {"name":"Santa Clara, CU", "id":"SNU"},
	 {"name":"Santiago de los Caballeros, DO", "id":"STI"},
	 {"name":"Santo Domingo, DO", "id":"SDQ"},
	  {"name":"Tampa, US", "id":"TPA"},
	
	
    ]
},

departure_date = new Date(2016, 08 - 1, 20),
return_date = new Date(2016, 09 - 1, 15),

// Mensajes de error para el booking
msj = {
      en: {
            city_origin_null: "Select a city of origin",    
            destination_city_null: "Select the destination city",
            origin_destination: "The destination city should be different from the city of origin",
            departure_date: "Select departure",
            return_date: "Select Return Date"
      },
      es: {
            city_origin_null: "Seleccione la ciudad de origen",
            destination_city_null: "Seleccione la ciudad de destino",
            origin_destination: "La ciudad de destino debe ser diferente de la de origen",
            departure_date: "Seleccione la fecha de salida",
            return_date: "Seleccione la fecha de regreso"
      },
      pt: {
            city_origin_null: "Selecione uma cidade de origem",
            destination_city_null: "Selecione a cidade de destino",
            origin_destination: "A cidade de destino deve ser diferente a partir da cidade de origem",
            departure_date: "Selecione a partida",
            return_date: "Selecionar data de retorno"
      }
};

