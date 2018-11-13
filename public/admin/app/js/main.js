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
	$.fn.serializeObject = function() {
		var o = {};
		$.each(this.serializeArray(), function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push)
					o[this.name] = [o[this.name]];
				o[this.name].push(this.value || '');
			} else {o[this.name] = this.value || '';}
		});
		return o;
	};
	new Router();		
	Backbone.history.start();
});
