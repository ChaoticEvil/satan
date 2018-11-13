define(
	['underscore', 'backbone', '../models/user', 'text!../tmpls/createUser.html'],
	function (_, Backbone, UserModel, CreateUserTmpl) {
		'use strict';
		
		var CreateUserView = Backbone.View.extend({
			el: "#app",
			events: {
				'click #create-user-btn': 'createUser'
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

				var formData = $('form').serializeObject();
				console.log("FORM_DATA: ", formData);

				var user = new UserModel(formData);
				console.log("USER: ", user);
				
				if (user.validate()) {
					console.log("VALID");
					this.project.saveProject({data: formData});
				} else {
					console.log("INVALID");
				}

				return false;
			}
		});
		
		return CreateUserView;
	}
);
