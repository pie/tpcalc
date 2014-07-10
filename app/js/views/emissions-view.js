var Marionette = require('backbone.marionette')
, template = require('../templates/emissions-template.hbs')
, ItemView = require('./emissions-category-view');

module.exports = Marionette.CompositeView.extend({
  template: template,
  itemView: ItemView,
  itemViewContainer: '.offset'
});
