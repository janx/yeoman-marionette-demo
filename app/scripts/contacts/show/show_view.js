(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.Show', function(Show, App, Backbone, Marionette, $, _) {

      Show.Contact = Marionette.ItemView.extend({
        template: "#contact-view",

        events: {
          'click button.js-back': 'backClicked'
        },

        backClicked: function() {
          App.trigger("contacts:list");
        }

      });

    });
  });
}).call( this );
