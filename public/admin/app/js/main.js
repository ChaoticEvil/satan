'use strict';

requirejs.config({
    'baseUrl': "assets/admin",
	'paths': {
		'text': 'deps/text',
		'jquery': 'deps/zepto.min',
		'backbone': 'deps/backbone-min',
		'underscore': 'deps/underscore-min',
    },	
	'shim': {
		'jquery': {
			'exports': '$'
		},
        'underscore': {
            'exports': '_'
        },		
		'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        },
	}
});

require(['backbone', 'jquery', 'app/js/routers/router'], function (Backbone, $, Router) {
	new Router();		
	Backbone.history.start();
});
