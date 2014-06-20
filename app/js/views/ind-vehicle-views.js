var $ = require('jquery'),
  Backbone = require('backbone'),
  Marionette = require('backbone.marionette'),
  defaultTemplate = require('../templates/ind-vehicle-default-template.hbs'),
  carTemplate = require('../templates/ind-vehicle-car-template.hbs'),
  ecarTemplate = require('../templates/ind-vehicle-ecar-template.hbs'),
  boatTemplate = require('../templates/ind-vehicle-boat-template.hbs'),
  motorcycleTemplate = require('../templates/ind-vehicle-motorcycle-template.hbs'),
  classTemplate = require('../templates/ind-vehicle-class-template.hbs'),
  optionsTemplate = require('../templates/ind-vehicle-options-template.hbs'),
  listTemplate = require('../templates/ind-vehicle-list-template.hbs');

module.exports.default = Marionette.ItemView.extend({
	template: defaultTemplate,
	events: {
		'click input[type=submit]': 'submitClicked'
	},
	submitClicked: function() {
		console.log('submitClicked()');
	}
});

module.exports.car = Marionette.ItemView.extend({
	template: carTemplate,
	events: {

	}
});

module.exports.ecar = Marionette.ItemView.extend({
	template: ecarTemplate,
	events: {

	}
});

module.exports.boat = Marionette.ItemView.extend({
	template: boatTemplate,
	events: {

	}
});

module.exports.motorcycle = Marionette.ItemView.extend({
	template: motorcycleTemplate,
	events: {

	}
});

module.exports.class = Marionette.ItemView.extend({
	template: classTemplate,
	events: {

	}
});

module.exports.options = Marionette.ItemView.extend({
	template: optionsTemplate,
	events: {

	}
});

module.exports.list = Marionette.ItemView.extend({
	template: listTemplate,
	events: {

	}
});