(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {

      Edit.Contact = App.ContactsApp.Common.Views.Form.extend({
        initialize: function() {
          this.title = "Edit " + this.model.get('firstName') + " " + this.model.get('lastName');
        }
      });

    });

  });
}).call( this );
