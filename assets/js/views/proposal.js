App.Views.Proposal = Backbone.View.extend({
	className: 'proposal',

	template: _.template($('#Proposal').html()),

	initialize: function() {
      this.render();
    },

    render: function() {
    	this.$el.append(this.template());

		return this;
	}
});