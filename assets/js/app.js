// // Look into preloading images
// //<video style="display: block;" class="_534g" id="fbhome-cinemagraph" autoplay="1" loop="1"><source src="https://fbcdn-dragon-a.akamaihd.net/cfs-ak-ash3/676434/970/135351913305575_544816858.mp4"><source src="https://fbcdn-dragon-a.akamaihd.net/cfs-ak-prn1/676663/942/135351913305575_1958437471.ogv"><img class="_53ol _53ol img" src="https://fbcdn-dragon-a.akamaihd.net/cfs-ak-ash3/676513/617/135351913305575_1421925707.jpg" alt=""></video>
// var jumbotron = {
// 	'couple': '<img src="assets/img/jumbotron/AshleyChase_Engagements13-2.jpg"/>',
// 	'proposal': '<img src="assets/img/jumbotron/AshleyChase_Engagements25-2.jpg"/>',
// 	'rsvp': '<img src="assets/img/jumbotron/AshleyChase_Engagements11-2.jpg"/>',
// 	'details': '<img src="assets/img/jumbotron/AshleyChase_Engagements65-2.jpg"/>',
// 	'registry': '<img src="assets/img/jumbotron/AshleyChase_Engagements18-2.jpg"/>'
// }

// $('nav a').click(changeView);

// function changeView(e) {
// 	e.preventDefault();

// 	var page = $(this).attr('href');

// 	$('.jumbotron').html(jumbotron[page]);

// 	$('.selected').slideUp('fast',function() {
// 		$(this).removeClass('selected');
// 		$('.' + page).slideDown().addClass('selected');
// 	});

// 	// Highlight selected with :hover?
// }
App.Router = Backbone.Router.extend({
	routes: {
		'': 'couple',
		'couple': 'couple',
		'proposal': 'proposal',
		'rsvp': 'rsvp',
		'details': 'details',
		'registry': 'registry'
	},

	// initialize: function() {
		
	// },

	couple: function() {
		$('.cover').attr('src', 'assets/img/jumbotron/AshleyChase_Engagements13-2.jpg');

		this.coupleView = new App.Views.Couple();
		$('#main').html(this.coupleView.$el);
		this.coupleView.finalCountdown(); // Lazy solution due to loading issue
	},

	proposal: function() {
		$('.cover').attr('src', 'assets/img/jumbotron/AshleyChase_Engagements25-2.jpg');

		this.proposalView = new App.Views.Proposal();
		$('#main').html(this.proposalView.$el);
	},

	rsvp: function() {
		$('.cover').attr('src', 'assets/img/jumbotron/AshleyChase_Engagements11-2.jpg');

		this.rsvpView = new App.Views.Rsvp();
		$('#main').html(this.rsvpView.$el);
	},

	details: function() {
		$('.cover').attr('src', 'assets/img/jumbotron/AshleyChase_Engagements65-2.jpg');

		this.detailsView = new App.Views.Details();
		$('#main').html(this.detailsView.$el);
	},

	registry: function() {
		$('.cover').attr('src', 'assets/img/jumbotron/AshleyChase_Engagements18-2.jpg');

		this.registryView = new App.Views.Registry();
		$('#main').html(this.registryView.$el);
	}
});

window.AppRouter = new App.Router();
Backbone.history.start();