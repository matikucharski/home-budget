Template.inputs.events({
	'click #zapisz': function (e) {
		e.preventDefault(); //prevents from submitting a form
		Spendings.insert({cena: Match.test($('#cena-input').val(), Number) ? $('#cena-input').val() : 0,
			opis: $('#opis-input').val(),
			timestamp: new Date()
		}, 
		function(){console.log("inserted!");}
		);
	}
});

Template.inputs.helpers({
	wydatki: function () {
		return Spendings.find({},{limit: 5, sort: {timestamp: -1}});
	}
});