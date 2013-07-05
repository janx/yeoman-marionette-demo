(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp', function(ContactsApp, App, Backbone, Marionette, $, _) {

      ContactsApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
          "contacts": "listContacts",
          "contacts/:id": "showContact",
          "contacts/:id/edit": "editContact"
        }
      });

      var API = {
        listContacts: function() {
          ContactsApp.List.Controller.listContacts();
        },

        showContact: function(id) {
          ContactsApp.Show.Controller.showContact(id);
        },

        editContact: function(id) {
          ContactsApp.Edit.Controller.editContact(id);
        }
      };

      App.on("contacts:list", function() {
        App.navigate("contacts");
        API.listContacts();
      });

      App.on("contact:show", function(id) {
        App.navigate("contacts/" + id);
        API.showContact(id);
      });

      App.on("contact:edit", function(id) {
        console.log("edit");
        App.navigate("contacts/" + id + "/edit");
        API.editContact(id);
      });

      App.addInitializer(function() {
        new ContactsApp.Router({
          controller: API
        });
      });

    });
  });
}).call( this );
