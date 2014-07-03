Template.calendar.rendered = function () {
	// using fullCalendar from http://arshaw.com/fullcalendar/
	$('#calendar').fullCalendar({
		lang: 'pl',
		dayClick: function() {
        	console.log('a day has been clicked!');
    	}
	});
};