var info = {
    fromcities: [
        {"name":"Seleccione", "id":"0"},
        {"name":"Medellín, CO", "id":"MDE"},
        {"name":"Cali, CO", "id":"CLO"},
        {"name":"Bogotá, CO", "id":"BGO"},
        {"name":"Barranquilla, CO", "id":"BAQ"}
    ],
                        
    tocities: [
        {"name":"Seleccione", "id":"0"},
		{"name":"Aruba, AW", "id":"AUA"},
		{"name":"Panamá, PA", "id":"PTY"},
		{"name":"Lima, PE", "id":"LIM"},
		{"name":"Miami, US", "id":"MIA"},
		{"name":"Tampa, US", "id":"TPA"},
		{"name":"San José, CR", "id":"SJO"},
		{"name":"San Juan, PR", "id":"SJU"}
		
    ],
	copy_superior: {
        titulo: 'Viaja desde Colombia con tarifas especiales',
        cuerpo: "Compra tu boleto del 16 al 30 de diciembre del 2016 y viaja del 16 de diciembre del 2016 al 30 de junio del 2017."
    },
    tarifas: [
    	{
    		descripcion: 'Tarifa 1',
    		precio: 123412345,
    		destino: 'SJO',
    		origen: 'SJU'
    	},

    	{
    		descripcion: 'Tarifa 2',
    		precio: 65464234,
    		destino: 'LIM',
    		origen: 'PTY'
    	},
    	{
    		descripcion: 'Tarifa 3',
    		precio: 435646643,
    		destino: 'LIM',
    		origen: 'MIA'
    	},
    	{
    		descripcion: 'Tarifa 4',
    		precio: 998899,
    		destino: 'PTY',
    		origen: 'BOG'
    	},
        {
            descripcion: 'Tarifa 5',
            precio: 678432,
            destino: 'MCO',
            origen: 'PTY'
        },
    ],

    departure_date: new Date(2017, 1 - 1, 25),

	return_date: new Date(2017, 3 - 1, 23)
}



	

