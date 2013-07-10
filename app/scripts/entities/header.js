(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function( App ) {
    App.module('Models', function(Models, App, Backbone, Marionette, $, _) {

      Models.Header = Backbone.Model.extend({
        initialize: function() {
          var selectable = new Backbone.Picky.Selectable(this);
          _.extend(this, selectable);
        }
      });

      Models.HeaderCollection = Backbone.Collection.extend({
        model: Models.Header,

        initialize: function() {
          var singleSelect = new Backbone.Picky.SingleSelect(this);
          _.extend(this, singleSelect);
        }
      });

      var initializeHeaders = function() {
        Models.headers = new Models.HeaderCollection([
          {name: "Contacts", url: "contacts"},
          {name: "About", url: "about"}
        ]);
      }

      var API = {
        getHeaders: function() {
          if(Models.headers === undefined) {
            initializeHeaders();
          }

          return Models.headers;
        }
      };

      App.reqres.setHandler("header:entities", function() {
        return API.getHeaders();
      });

    })
  });
}).call( this );
