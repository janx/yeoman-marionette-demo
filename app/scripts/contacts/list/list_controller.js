(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.List', function(List, App, Backbone, Marionette, $, _) {

      List.Controller = {
        listContacts: function() {
          var loadingView = new App.Common.Views.Loading();
          App.mainRegion.show(loadingView);

          var fetchingContacts = App.request("contact:entities");

          var contactsListLayout = new List.Layout();
          var contactsListPanel = new List.Panel();

          $.when(fetchingContacts).done(function(contacts) {
            var contactsListView = new List.Contacts({
              collection: contacts
            });

            contactsListLayout.on("show", function() {
              contactsListLayout.panelRegion.show(contactsListPanel);
              contactsListLayout.contactsRegion.show(contactsListView);
            });

            contactsListPanel.on("contact:new", function() {
              var newContact = new App.Models.Contact();

              var view = new App.ContactsApp.New.Contact({
                model: newContact
              });

              view.on("form:submit", function(data) {
                var highestId = contacts.max(function(c) { return c.id; }).get('id');
                data.id = highestId + 1;

                if(newContact.save(data)) {
                  contacts.add(newContact);
                  view.trigger("dialog:close");
                  contactsListView.children.findByModel(newContact).flash("success");
                } else {
                  view.triggerMethod("form:data:invalid", newContact.validationError);
                }
              });

              App.dialogRegion.show(view);
            });

            contactsListView.on("itemview:contact:show", function(childView, model) {
              App.trigger("contact:show", model.get('id'));
            });

            contactsListView.on("itemview:contact:edit", function(childView, model) {
              var view = new App.ContactsApp.Edit.Contact({
                model: model
              });

              view.on("form:submit", function(data) {
                if(model.save(data)) {
                  childView.render();
                  view.trigger("dialog:close");
                  childView.flash("success");
                } else {
                  view.triggerMethod("form:data:invalid", model.validationError);
                }
              });

              App.dialogRegion.show(view);
            });

            contactsListView.on("itemview:contact:delete", function(childView, model) {
              model.destroy();
            });

            App.mainRegion.show(contactsListLayout);
          });

        }
      }

    });
  });
}).call( this );
