define(
	['backbone', 'app/js/views/usersList', 'app/js/views/userDetail', 'app/js/views/createUser'],
	function(Backbone, UsersListView, UserDetailView, CreateUserView) {
		'use strict';
		
		var Router = Backbone.Router.extend({
			routes: {
				'': 'index',
				'index': 'index',
				'users': 'usersList',
				'users/new': 'createUser',
				'users/:user_id': 'showUserDetail',
			},

			index: function() {
				$('#app').html('Dashboard');
				$("li.nav-item a.active").removeClass("active");
				$("li.nav-item a[href$='#/index']").addClass("active");
			},

			usersList: function() {
				new UsersListView();
			},

			showUserDetail: function(user_id) {
				new UserDetailView(user_id);
			},

			createUser: function() {
				console.log("CLICK");
				new CreateUserView();
			}
		});

		return Router;
	}
);
