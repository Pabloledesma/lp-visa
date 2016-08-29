var sysCities = {
    "fromcities": [
		
        {"name":"Chicago, US", "id":"ORD"},
        {"name":"Las Vegas, US", "id":"LAS"},
        {"name":"Los Angeles, US", "id":"LAX"},
        {"name":"Miami, US", "id":"MIA"},
        {"name":"New York, US", "id":"JFK"},
		{"name":"New Orleans, US", "id":"MSY"},
		{"name":"Orlando, US", "id":"MCO"},
		{"name":"San Francisco, US", "id":"SFO"},
		{"name":"San Juan, PR", "id":"SJU"},
	    {"name":"Washington Dulles, US", "id":"IAD"}  
    ],

    "tocities": [
		{"name":"Holguín, CU", "id":"HOG"},
    ],
},
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
},

departure_date = new Date(2016, 09 - 1, 19),
return_date = new Date(2016, 12 - 1, 15),
promoCodes = ['COPAVISA'];




