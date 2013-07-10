(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('AboutApp.Show', function(Show, App, Backbone, Marionette, $, _) {

      Show.Controller = {
        showAbout: function(id) {
          var view = new Show.Message();
          App.mainRegion.show(view);
        }
      }

    });
  });
}).call( this );
