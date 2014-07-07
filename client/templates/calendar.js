calendarEventDep = new Deps.Dependency;

Template.calendar.rendered = function () {
	// using fullCalendar from http://arshaw.com/fullcalendar/
	$('#calendar').fullCalendar({
		lang: 'pl',
		dayClick: function() {
        	console.log('a day has been clicked!');
    	},
    	defaultView: 'month',
    	header: {
    		left: 'prev,next today',
    	    	right: 'month basicWeek basicDay',
    	    	center: 'title'
    	    } //CalendarEvents.find({}).fetch()
		// eventSources: CalendarEvents.find({}).fetch()
   //  	    events: function(s, e, timezone, callback){
			// 	calendarEventDep.depend();
			// 	callback(CalendarEvents.find({}).fetch());
			// }
	});
console.log("pierwsze",CalendarEvents.find({}).fetch());
	CalendarEvents.find({}).observeChanges({
		added: function(){
			console.log( "drugie", CalendarEvents.find({}).fetch() );
		}
	});
}