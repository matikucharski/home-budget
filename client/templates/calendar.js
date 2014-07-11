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
    	    },
    	events: function(start, end, timezone, callback){
    		// it returns events from available time boundaries
    		callback(CalendarEvents.find({start: {$gte: start._d, $lt: end._d}}).fetch());
    	},
    	viewRender: function(view, element){
    		// takes a current calendar view to get time boundaries for mongo query
    		console.log("CURRENT VIEW:",view.start._d, view.end._d);
    		
    		// stop observing changes on not available view
    		if (typeof calendarHandler !== "undefined"){
    			calendarHandler.stop();
    			console.info("previous handler stopped");
    		} 
    		// refreshes whole calendar on added items into CalendarEvents if added event fits current view
			calendarHandler = CalendarEvents.find({start: {$gte: view.start._d, $lt: view.end._d}}).observeChanges({
				added: function(id, fields){
					$('#calendar').fullCalendar( 'refetchEvents' );
				}
			});

    	},
        eventClick: function(calEvent, jsEvent, view) {
            $(this).popover({content: calEvent.title+"<br />"+calEvent.cena+"zł", placement: "bottom", trigger: 'manual', html: true});
            $(this).popover('toggle');
        }
	});
}