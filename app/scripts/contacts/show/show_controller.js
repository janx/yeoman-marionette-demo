(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.Show', function(Show, App, Backbone, Marionette, $, _) {

      Show.Controller = {
        showContact: function(id) {
          var contacts = App.request("contact:items");
          var model = contacts.get(id);
          var contactView;

          if(model !== undefined) {
            contactView = new Show.Contact({
              model: model
            });
          } else {
            contactView = new Show.MissingContact();
          }

          App.mainRegion.show(contactView);
        }
      }

    });
  });
}).call( this );
