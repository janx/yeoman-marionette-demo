(function() {
    'use strict';

    var root = this;

    root.require([ 'backbone' ],
	function ( Backbone ) {

          Backbone.Marionette.Region.Dialog = Backbone.Marionette.Region.extend({

            onShow: function(view) {
              this.listenTo(view, "dialog:close", this.closeDialog);

              var self = this;
              this.$el.dialog({
                modal: true,
                title: view.title,
                width: 'auto',
                close: function(e, ui) {
                  self.closeDialog();
                }
              });
            },

            closeDialog: function() {
              this.stopListening();
              this.close();
              this.$el.dialog("destroy");
            }

          });

	});
}).call( this );
