(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp', function(ContactsApp, App, Backbone, Marionette, $, _) {

      ContactsApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
          "contacts(?filter=:criterion)": "listContacts",
          "contacts/:id": "showContact",
          "contacts/:id/edit": "editContact"
        }
      });

      var API = {
        listContacts: function(criterion) {
          ContactsApp.List.Controller.listContacts(criterion);
          App.HeaderApp.List.Controller.setActiveHeader("contacts");
        },

        showContact: function(id) {
          ContactsApp.Show.Controller.showContact(id);
          App.HeaderApp.List.Controller.setActiveHeader("contacts");
        },

        editContact: function(id) {
          ContactsApp.Edit.Controller.editContact(id);
          App.HeaderApp.List.Controller.setActiveHeader("contacts");
        }
      };

      App.on("contacts:filter", function(criterion) {
        if(criterion) {
          App.navigate("contacts?filter=" + criterion);
        } else {
          App.navigate("contacts");
        }
      });

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
