import { cities } from './cities';

export default class FormBuilder {

	constructor(private data){
		this.data = cities;
	}

	getCities(){
		return this.data;
	}

}