var $ = require('jquery')
, Backbone = require('backbone')
, Marionette = require('backbone.marionette');

var template = require('../templates/evt-thankyou-template.hbs');

module.exports = Marionette.ItemView.extend({
	template: template,
	events: {
	},
	getNextViewSlug: function() {
		return '';
	}
});
