(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function(App){
    App.module('ContactsApp.List', function(List, App, Backbone, Marionette, $, _) {

      List.Contact = Backbone.Marionette.ItemView.extend({
        tagName: "tr",
        template: "#contact-list-item",

        events: {
          'click': 'highlightName',
          'click td a.js-show': 'showClicked',
          'click button.js-delete': 'deleteClicked'
        },

        highlightName: function(e) {
          e.preventDefault();
          this.$el.toggleClass('warning');
          console.log("Highlighting toggled on model: ", this.model);
        },

        showClicked: function(e) {
          e.preventDefault();
          e.stopPropagation();
          this.trigger("contact:show", this.model);
        },

        deleteClicked: function(e) {
          e.stopPropagation();
          this.trigger("contact:delete", this.model);
        },

        remove: function() {
          this.$el.fadeOut(function() {
            $(this).remove();
          });
        }

      });

      List.Contacts = Backbone.Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: "#contact-list",
        itemView: List.Contact,
        ItemViewContainer: "tbody"
      });

    });
  });
}).call( this );
