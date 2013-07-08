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

          $.when(fetchingContacts).done(function(contacts) {
            var contactsListView = new List.Contacts({
              collection: contacts
            });

            contactsListView.on("itemview:contact:show", function(childView, model) {
              App.trigger("contact:show", model.get('id'));
            });

            contactsListView.on("itemview:contact:edit", function(childView, model) {
              var view = new App.ContactsApp.Edit.Contact({
                model: model,
                asModal: true
              });

              view.on("form:submit", function(data) {
                if(model.save(data)) {
                  childView.render();
                  App.dialogRegion.close();
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

            App.mainRegion.show(contactsListView);
          });

        }
      }

    });
  });
}).call( this );
