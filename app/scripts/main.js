(function() {
    'use strict';

    var root = this;

    root.require([
		'backbone',
		'application',
                'config/storage/localstorage',
                'config/marionette/regions/dialog',
                'common/backbone.picky',
                'common/views',
                'entities/common',
                'entities/header',
                'entities/contact',
                'header/header_app',
                'header/list/list_view',
                'header/list/list_controller',
                'contacts/contacts_app',
                'contacts/common/views',
                'contacts/list/list_view',
                'contacts/list/list_controller',
                'contacts/show/show_view',
                'contacts/show/show_controller',
                'contacts/edit/edit_view',
                'contacts/edit/edit_controller',
                'contacts/new/new_view',
                'about/about_app',
                'about/show/show_view',
                'about/show/show_controller',
		'regionManager'
	],
	function ( Backbone, App ) {
          App.start();
	});
}).call( this );
