(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('HeaderApp', function(Header, App, Backbone, Marionette, $, _) {

      var API = {
        listHeader: function() {
          Header.List.Controller.listHeader();
        }
      };

      Header.on("start", function() {
        API.listHeader();
      });

    });
  });
}).call( this );
