/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	var TodoRouter = Backbone.Router.extend({
		routes: {
			//'date': 'dateTriggered',
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			app.TodoFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			app.todos.trigger('filter');
		},

		/*dateTriggered: function(){
			alert('Button Triggered');
		}*/

	});

	app.TodoRouter = new TodoRouter();
	Backbone.history.start();
})();
