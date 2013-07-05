(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.Show', function(Show, App, Backbone, Marionette, $, _) {

      Show.Contact = Marionette.ItemView.extend({
        template: "#contact-view",

        events: {
          'click button.js-back': 'backClicked',
          'click a.js-edit': 'editClicked'
        },

        backClicked: function() {
          App.trigger("contacts:list");
        },

        editClicked: function(e) {
          e.preventDefault();
          this.trigger("contact:edit", this.model);
        }

      });

      Show.MissingContact = Marionette.ItemView.extend({
        template: "#missing-contact-view"
      });

    });
  });
}).call( this );
