(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {

      Edit.Contact = App.ContactsApp.Common.Views.Form.extend({
        initialize: function() {
          this.title = "Edit " + this.model.get('firstName') + " " + this.model.get('lastName');
        },

        onRender: function() {
          if(! this.options.generateTitle) {
            var $title = $('<h1>', {text: this.title});
            this.$el.prepend($title);
          }

          this.$el.find(".js-submit").text("Update contact");
        }

      });

    });

  });
}).call( this );
