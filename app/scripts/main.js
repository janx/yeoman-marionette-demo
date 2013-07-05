(function() {
    'use strict';

    var root = this;

    root.require([
		'backbone',
		'application',
                'config/storage/localstorage',
                'common/views',
                'entities/contact',
                'contacts/contacts_app',
                'contacts/list/list_view',
                'contacts/list/list_controller',
                'contacts/show/show_view',
                'contacts/show/show_controller',
                'contacts/edit/edit_view',
                'contacts/edit/edit_controller',
		'regionManager'
	],
	function ( Backbone, App ) {
          App.start();
	});
}).call( this );
