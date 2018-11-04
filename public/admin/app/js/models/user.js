define(['backbone'], function (Backbone) {
	'use strict';

	var UserModel = Backbone.Model.extend({

		initialize: function() {
			this.on('invalid', function(model, error){
				console.log(error);
			});
		},
		
		urlRoot: 'http://localhost:9000/admin/api/v1/users',
		
		defaults: {
			id: null,
			avatar: 'http://localhost:9000/assets/admin/app/img/default-avatar.png',
			username: null,
			email: null,
			created: null,
			last_visited: null,
			is_activated: false,
			is_admin: false
		},
	});
	
	return UserModel;
});
