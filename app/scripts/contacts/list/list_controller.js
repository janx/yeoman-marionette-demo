(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.List', function(List, App, Backbone, Marionette, $, _) {

      List.Controller = {
        listContacts: function() {
          var contacts = App.request("contact:items");

          var contactsListView = new List.Contacts({
            collection: contacts
          });

          contactsListView.on("itemview:contact:show", function(childView, model) {
            App.trigger("contact:show", model.get('id'));
          });

          contactsListView.on("itemview:contact:delete", function(childView, model) {
            contacts.remove(model);
          });

          App.mainRegion.show(contactsListView);
        }
      }

    });
  });
}).call( this );
