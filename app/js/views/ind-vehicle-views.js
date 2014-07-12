var $ = require('jquery')
, Backbone = require('backbone')
, Marionette = require('backbone.marionette')
, Stickit = require('backbone.stickit')
, Databinding = require('backbone.databinding')
, App = require('../app');

var defaultTemplate = require('../templates/ind-vehicle-default-template.hbs')
, carTemplate = require('../templates/ind-vehicle-car-template.hbs')
, ecarTemplate = require('../templates/ind-vehicle-ecar-template.hbs')
, boatTemplate = require('../templates/ind-vehicle-boat-template.hbs')
, motorcycleTemplate = require('../templates/ind-vehicle-motorcycle-template.hbs')
, classTemplate = require('../templates/ind-vehicle-class-template.hbs')
, optionsTemplate = require('../templates/ind-vehicle-options-template.hbs')
, typeTemplate = require('../templates/ind-vehicle-type-template.hbs')
, listTemplate = require('../templates/ind-vehicle-list-template.hbs')
, utils = require('../utils/utility');

module.exports.default = Marionette.ItemView.extend({
	template: defaultTemplate,
	ui: {
		yearDropDown: 'select[name="car_year"]',
		makesDropDown: 'select[name="car_make"]', 
		modelsDropDown: 'select[name="car_models"]' 
	},
	events: {
		'change select[name="car_year"]': 'yearSelected',
		'change select[name="car_make"]': 'makeSelected',
	},
	initialize: function() {
		this.data = {};
		this.modelBinder = new Databinding.ModelBinder(this, this.model);
		this.modelBinder.watch('value: year', {selector: '[name="car_year"]'});
		this.modelBinder.watch('value: make', {selector: '[name="car_make"]'});
		this.modelBinder.watch('value: model', {selector: '[name="car_model"]'});
		this.modelBinder.watch('value: mileage', {selector: '[name="car_mileage"]'});
	},
	getNextViewSlug: function() {
		return 'car';
	},
	serializeData: function() {
		var self = this;
		utils.getJSON('/vehicle/year', function(jsonResponse) {
			self.data.years = jsonResponse.menuItems;
		});	
		return self.data;
	},
	yearSelected: function() {
		var self = this;
		self.year = this.ui.yearDropDown.val();
		utils.getJSON('/vehicle/make/'+self.year, function(jsonResponse) {
			self.data.makes = jsonResponse.menuItems;
		});	
		self.render();
		$(self.ui.makesDropDown).prepend('<option value="" selected="selected">Select Car Make</option>	');
		self.ui.makesDropDown.prop('disabled', false);
	},
	makeSelected: function() {
		var self = this;
		self.make = this.ui.makesDropDown.val();
		utils.getJSON('/vehicle/model/'+self.year+'/'+self.make, function(jsonResponse) {
			self.data.carModels = jsonResponse.menuItems;
		});	
		self.render();
		$(self.ui.modelsDropDown).prepend('<option value="" selected="selected">Select Car Model</option>	');
		self.ui.modelsDropDown.prop('disabled', false);
	},
});

module.exports.car = Marionette.ItemView.extend({
	template: carTemplate,
	events: {

	},
	getNextViewSlug: function() {
		return 'list';
	}
});

module.exports.ecar = Marionette.ItemView.extend({
	template: ecarTemplate,
	events: {

	},
	getNextViewSlug: function() {
		return 'list';
	}
});

module.exports.boat = Marionette.ItemView.extend({
	template: boatTemplate,
	events: {

	},
	getNextViewSlug: function() {
		return 'list';
	}
});

module.exports.motorcycle = Marionette.ItemView.extend({
	template: motorcycleTemplate,
	events: {

	},
	getNextViewSlug: function() {
		return 'list';
	}
});

module.exports.class = Marionette.ItemView.extend({
	template: classTemplate,
	events: {

	},
	getNextViewSlug: function() {
		return 'list';
	}
});

module.exports.options = Marionette.ItemView.extend({
	template: optionsTemplate,
	events: {

	},
	getNextViewSlug: function() {
		return 'list';
	}
});

module.exports.type = Marionette.ItemView.extend({
	template: typeTemplate,
	events: {

	},
	getNextViewSlug: function() {
		return 'list';
	}
});

module.exports.list = Marionette.ItemView.extend({
	template: listTemplate,
	events: {

	},
	getNextViewSlug: function() {
		return '';
	}
});

// var $ = require('jquery'),
// 	Backbone = require('backbone'),
//   utils = require('../utility');

// module.exports = Backbone.View.extend({
// 	el: '#individual',
// 	events: {

// 	},
// 	initialize: function() {
// 		this.render();	
// 	},
// 	render: function() {
// 		var self = this;
// 		utils.getJSON('/vehicle/year', function(jsonResponse) {
// 			var template = require("../templates/years-template.hbs");
// 			self.$el.html(template(jsonResponse));
// 		});	
// 	}
// });


  // render: function(){
  //     // Invoke original render function
  //     var args = Array.prototype.slice.apply(arguments);
  //     var result = Marionette.ItemView.prototype.render.apply(this, args);
  //     // Apply stickit
  //     //this.stickit();
  //     // Return render result
  //     return result;
  // },