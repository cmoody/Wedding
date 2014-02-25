App.Views.Couple = Backbone.View.extend({
	className: 'couple',
	
	template: _.template($('#Couple').html()),

	initialize: function() {
      this.render();
    },

    render: function() {
    	this.$el.append(this.template());
    	//this.finalCountdown();

		return this;
	},

	finalCountdown: function() {
		$('#cntdwn').countdown({
			until: new Date(2013, 10, 9), format: 'DHM', 
		    layout: '{d<}<h1>{dn} {dl}</h1>{d>}<h3>{h<}{hn} Hrs{h>} &amp; {m<}{mn} Mins{m>}<h3>'
		});
	}
});