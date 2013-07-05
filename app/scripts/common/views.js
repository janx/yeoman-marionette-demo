(function() {
  'use strict';

  var root = this;

  root.define([ 'application' ], function( App ) {
    App.module('Common.Views', function(Views, App, Backbone, Marionette, $, _) {

      Views.Loading = Marionette.ItemView.extend({
        template: "#loading-view",

        serializeData: function() {
          return {
            title: this.options.title || "Loading Data",
            message: this.options.message || "Please wait, data is loading."
          }
        },

        onShow: function() {
          var opts = {
            lines: 13, // number of lines to draw
            length: 20, // length of each line
            width: 10, // line thickness
            radius: 30, // radius of inner circle
            corners: 1, // corner roundness (0..1)
            rotate: 0, // rotation offset
            direction: 1, // 1 for clockwise, -1 for counterclockwise
            color: '#000',
            speed: 1, // Rounds per second
            trail: 60, // afterglow percentage
            shadow: false,
            hwaccel: false, // whether to use hardware acceleration
            className: '', // The css class to assign to the spinner
            zIndex: 2e9,
            top: '30px',
            left: 'auto'
          };
          $('#myspinner').spin(opts);
        }
      });

    });
  });
}).call( this );
