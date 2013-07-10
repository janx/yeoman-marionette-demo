(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('AboutApp', function(AboutApp, App, Backbone, Marionette, $, _) {

      AboutApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
          "about": "showAbout"
        }
      });

      var API = {
        showAbout: function() {
          AboutApp.Show.Controller.showAbout();
          App.HeaderApp.List.Controller.setActiveHeader("about");
        }
      };

      App.on("about:show", function(id) {
        App.navigate("about");
        API.showAbout();
      });

      App.addInitializer(function() {
        new AboutApp.Router({
          controller: API
        });
      });

    });
  });
}).call( this );
