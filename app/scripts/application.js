(function() {
	'use strict';

	var root = this;

	root.define([
		'backbone',
		'communicator',
		'hbs!tmpl/welcome'
	],

	function( Backbone, Communicator, Welcome_tmpl ) {
		var welcomeTmpl = Welcome_tmpl;

		var App = new Backbone.Marionette.Application();

		/* Add application regions here */
		//App.addRegions({});

		/* Add initializers here */
		//App.addInitializer( function () {
			//document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
			//Communicator.mediator.trigger("APP:START");
		//});

                App.addRegions({
                  mainRegion: "#main-region"
                });

                App.navigate = function(route, options) {
                  options || (options = {});
                  Backbone.history.navigate(route, options);
                };

                App.getCurrentRoute = function() {
                  return Backbone.history.fragment;
                };

                App.on("initialize:after", function(){
                  Backbone.history.start();

                  if(this.getCurrentRoute() === "") {
                    App.trigger("contacts:list");
                  }
                });

		return App;
	});
}).call( this );
