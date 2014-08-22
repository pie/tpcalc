'use strict';
var $ = require('jquery')
, Marionette = require('backbone.marionette')
, App = require('../../app');

var template = require('../../templates/events/evt-thankyou-template.hbs');

module.exports = Marionette.ItemView.extend({
	template: template,
	events: {
	},
  getNextInputView: function() {
    App.vent.trigger('goToNextCategory');
  }
});
