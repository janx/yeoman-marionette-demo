(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {

      Edit.Contact = Marionette.ItemView.extend({
        template: "#contact-form",

        events: {
          'click button.js-submit': 'submitClicked'
        },

        submitClicked: function(e) {
          e.preventDefault();
          var data = Backbone.Syphon.serialize(this);
          this.trigger("form:submit", data);
        },

        onFormDataInvalid: function(errors) {
          var $view = this.$el;

          var clearFormErrors = function() {
            var $form = $view.find("form");
            $form.find(".help-inline.error").remove();
            $form.find(".control-group.error").removeClass("error");
          };

          var markErrors = function(value, key) {
            var $controlGroup = $view.find("#contact-" + key).parent();
            var $errorEl = $('<span>', {class: 'help-inline error', text: value});
            $controlGroup.append($errorEl).addClass("error");
          };

          clearFormErrors();
          _.each(errors, markErrors);
        }
      });

    });
  });
}).call( this );
