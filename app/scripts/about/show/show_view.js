(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('AboutApp.Show', function(Show, App, Backbone, Marionette, $, _) {

      Show.Message = Marionette.ItemView.extend({
        template: "#about-message",
      });

    });
  });
}).call( this );
