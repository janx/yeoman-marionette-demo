(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.New', function(New, App, Backbone, Marionette, $, _) {

      New.Contact = App.ContactsApp.Common.Views.Form.extend({
        title: "New Contact",

        onRender: function() {
          this.$el.find(".js-submit").text("Create contact");
        }
      });

    });

  });
}).call( this );
