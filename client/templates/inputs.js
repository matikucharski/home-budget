Template.inputs.events({
	'click #zapisz': function (e) {
		e.preventDefault(); //prevents from submitting a form
		Spendings.insert({
			cena: Number($('#cena-input').val()) || 0,
			opis: $('#opis-input').val(),
			timestamp: new Date()
		}, 
		function(error, id){
			if (typeof id !== undefined){
				console.log("inserted!", id, error);

				CalendarEvents.insert({
					title: Spendings.findOne({_id: id}).opis,
					start: Spendings.findOne({_id: id}).timestamp
				},
				function(){
					calendarEventDep.changed();
					$('#calendar').fullCalendar('rerenderEvents');
					// $('#calendar').fullCalendar( 'addEventSource', CalendarEvents.find({}).fetch() )
				});
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