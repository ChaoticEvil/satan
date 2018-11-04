define(
	['backbone', 'app/js/views/usersList', 'app/js/views/userDetail'],
	function(Backbone, UsersListView, UserDetailView) {
		'use strict';
		
		var Router = Backbone.Router.extend({
			routes: {
				'': 'index',
				'index': 'index',
				'users': 'usersList',
				'users/:user_id': 'showUserDetail',
			},

			index: function() {
				$('#app').html('Hello, Backbone!!!');
				$("li.nav-item a.active").removeClass("active");
				$("li.nav-item a[href$='#index']").addClass("active");
			},

			usersList: function() {
				new UsersListView();
			},

			showUserDetail: function(user_id) {
				new UserDetailView(user_id);
			}
		});

		return Router;
	}
);
