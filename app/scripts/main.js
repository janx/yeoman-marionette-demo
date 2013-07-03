(function() {
    'use strict';

    var root = this;

    root.require([
		'backbone',
		'application',
                'entities/contact',
                'contacts/list/list_view',
                'contacts/list/list_controller',
		'regionManager'
	],
	function ( Backbone, App ) {
          App.start();
	});
}).call( this );
