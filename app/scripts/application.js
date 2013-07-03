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

                App.on("initialize:after", function(){
                  App.ContactsApp.List.Controller.listContacts();
                });

		return App;
	});
}).call( this );
