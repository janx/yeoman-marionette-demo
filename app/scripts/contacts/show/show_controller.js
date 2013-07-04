(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.Show', function(Show, App, Backbone, Marionette, $, _) {

      Show.Controller = {
        showContact: function(id) {
          var contacts = App.request("contact:items");
          var model = contacts.get(id);
          var contactView = new Show.Contact({
            model: model
          });

          App.mainRegion.show(contactView);
        }
      }

    });
  });
}).call( this );
