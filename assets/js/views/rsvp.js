App.Views.Rsvp = Backbone.View.extend({
	className: 'rsvp',

	template: _.template($('#Rsvp').html()),

	initialize: function() {
      this.render();
    },

    render: function() {
    	this.$el.append(this.template());

		return this;
	}
});