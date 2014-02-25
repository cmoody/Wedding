App.Views.Details = Backbone.View.extend({
	className: 'details',

	template: _.template($('#Details').html()),

	initialize: function() {
      this.render();
    },

    render: function() {
    	this.$el.append(this.template());

		return this;
	}
});