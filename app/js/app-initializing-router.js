'use strict';
var _ = require('underscore')
, Backbone = require('backbone')
, Marionette = require('backbone.marionette')
, RouteFilter = require('barf')
, App = require('./app')
, WelcomeView = require('./views/shared/welcome-view');

module.exports.router = Marionette.AppRouter.extend({
  appRoutes: {
    ':calculator': 'showDefaultCalculator',
    ':categories/:calculator': 'showSelectCateogries',
    //TODO add the possiblity of starting category specific calculators
    '*any': 'defaultRoute'    
  },
  before: {
    '*any': function (fragment, args, next) {
      //console.log('Attempting to load ' + fragment + ' with arguments: ', args);
      next();
    }
  },
});

//TODO this needs to deal with edge case URLS like a mix of number and alphas
module.exports.controller = Marionette.Controller.extend({
  showSelectCateogries: function(catCodes, calculator) {
    App.execute('appModule:start', calculator, catCodes);
  },
  showDefaultCalculator: function(calculator) {
    App.execute('appModule:start', calculator, undefined);
  },
  defaultRoute: function() {
    var welcomeView = new WelcomeView();
    App.body.show(welcomeView);
    App.router.navigate('' , {trigger: true});
  }
});


 