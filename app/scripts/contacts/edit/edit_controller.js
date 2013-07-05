(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {

      Edit.Controller = {
        editContact: function(id) {
          var loadingView = new App.Common.Views.Loading();
          App.mainRegion.show(loadingView);

          var fetchingContact = App.request("contact:entity", id);
          $.when(fetchingContact).done(function(contact) {
            var view;

            if(contact != undefined) {
              view = new Edit.Contact({
                model: contact
              });

              view.on("form:submit", function(data) {
                if(contact.save(data)) {
                  App.trigger("contact:show", contact.get('id'));
                } else {
                  view.triggerMethod("form:data:invalid", contact.validationError);
                }
              });
            } else {
              view = new App.ContactsApp.Show.MissingContact();
            }

            App.mainRegion.show(view);
          });
        }
      };

    });
  });
}).call( this );
