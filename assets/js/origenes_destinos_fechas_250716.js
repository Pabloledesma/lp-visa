var sysCities = {
    "fromcities": [
		{"name":"Guatemala, GT", "id":"GUA"},
		{"name":"Guayaquil, EC", "id":"GYE"},
		{"name":"La Habana, CU", "id":"HAV"},
		{"name":"Lima, PE", "id":"LIM"},
		{"name":"Liberia, CR", "id":"LIR"},
		{"name":"Montego Bay, JM", "id":"MBJ"},
		{"name":"Managua, NI", "id":"MGA"},
		{"name":"Panama, PA", "id":"PTY"},
		{"name":"San Salvador, SV", "id":"SAL"},
		{"name":"Santiago de Chile, CL", "id":"SCL"},
		{"name":"Santo Domingo, DO", "id":"SDQ"},
		{"name":"Santa Clara, CU", "id":"SNU"},
		{"name":"Santiago de los Caballeros, DO", "id":"STI"},
		{"name":"Tegucigalpa, HN", "id":"TGU"},
		{"name":"Quito, EC", "id":"UIO"}
    ],

    "tocities": [
		{"name":"Bucaramanga, CO", "id":"BGA"}, 
		{"name":"Bogota, CO", "id":"BOG"},
		{"name":"Cucuta, CO", "id":"CUC"},
		{"name":"Guatemala, GT", "id":"GUA"},
		{"name":"Guayaquil, EC", "id":"GYE"},
		{"name":"La Habana, CU", "id":"HAV"},
		{"name":"Lima, PE", "id":"LIM"},
		{"name":"Liberia, CR", "id":"LIR"},
		{"name":"Montego Bay, JM", "id":"MBJ"},
		{"name":"Medellin, CO", "id":"MDE"},
		{"name":"Managua, NI", "id":"MGA"},
		{"name":"Panama, PA", "id":"PTY"},
		{"name":"San Salvador, SV", "id":"SAL"},
		{"name":"Santiago de Chile, CL", "id":"SCL"},
		{"name":"Santo Domingo, DO", "id":"SDQ"},
		{"name":"Santa Clara, CU", "id":"SNU"},
		{"name":"Santiago de los Caballeros, DO", "id":"STI"},
		{"name":"Tegucigalpa, HN", "id":"TGU"},
		{"name":"Quito, EC", "id":"UIO"}
    ],

	msj: {
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
	}
},

departure_date = new Date(2016, 08 - 1, 01),
return_date = new Date(2016, 10 - 1, 31);




