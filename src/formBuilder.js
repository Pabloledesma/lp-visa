"use strict";
var cities_1 = require('./cities');
var FormBuilder = (function () {
    function FormBuilder(data) {
        this.data = data;
        this.data = cities_1.cities;
    }
    FormBuilder.prototype.getCities = function () {
        return this.data;
    };
    return FormBuilder;
}());
exports.FormBuilder = FormBuilder;
//# sourceMappingURL=formBuilder.js.map