App.Views.Registry = Backbone.View.extend({
	className: 'registry',

	template: _.template($('#Registry').html()),

	initialize: function() {
      this.render();
    },

    render: function() {
    	this.$el.append(this.template());

		return this;
	}
});