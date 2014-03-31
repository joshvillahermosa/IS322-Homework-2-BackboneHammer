/*global Backbone */
var app = app || {};


Backbone.Model.prototype.toJSON = function(){
	return this._parseDates(this.attributes);
};

Backbone.Model.prototype._parseDates = function(attrs){//This is a new methods that will comnvert strong to dates. Attrs is the JSON model
	console.log(attrs);

	attrs = _.clone(attrs);
	var newdate = attrs.date.split("/").reverse().join("/");
	attrs.date = new Date(newdate).toISOString();
	return attrs;
};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			date: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();
