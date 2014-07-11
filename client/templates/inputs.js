Template.inputs.events({
	'click #zapisz': function (e) {
		e.preventDefault(); //prevents from submitting a form
		Spendings.insert({
			cena: Number($('#cena-input').val()) || 0,
			opis: $('#opis-input').val(),
			timestamp: new Date()
		}, 
		function(error, id){
			if (id){
				console.log("inserted!", id, error);

				CalendarEvents.insert({
					title: Spendings.findOne({_id: id}).opis,
					start: Spendings.findOne({_id: id}).timestamp,
					cena: Spendings.findOne({_id: id}).cena
				},
				function(){
					// $('#calendar').fullCalendar( 'refetchEvents' );
					console.log('event inserted into callendar function');
				});
			}
			else{
				$('#inputs').find('form').after('<div class="alert alert-warning alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Uwaga!</strong> Wprowadzona cena jest nieprawidłowa.</div>');
			}
		}
		);
	}
});

Template.inputs.helpers({
	wydatki: function () {
		return Spendings.find({},{limit: 5, sort: {timestamp: -1}});
	}
});