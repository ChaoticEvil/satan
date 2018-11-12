define(
	['underscore', 'backbone', '../models/user', 'text!../tmpls/createUser.html'],
	function (_, Backbone, UsersModel, CreateUserTmpl) {
		'use strict';
		
		var CreateUserView = Backbone.View.extend({
			el: "#app",
			events: {
				'form submit': createUser
			},
			tagName: 'div',		
			template: _.template(CreateUserTmpl),

			initialize: function(user_id) {
				var _self = this;
				this.user = undefined;
				this.change_menu_state();
				this.render();
			},
			
			render: function(options) {
				this.$el.html( this.template({user: this.user}) );
			},

			change_menu_state: function() {
				$("li.nav-item a.active").removeClass("active");
				$("li.nav-item a[href$='#/users']").addClass("active");
			},

			createUser: function(event) {
				this.undelegateEvents();

				var projectDetail = $(event.currentTarget).serializeObject();
				this.project.saveProject({'data': projectDetail, 'method': 'POST'});
				
return false;
			}
		});
		
		return CreateUserView;
	}
);
