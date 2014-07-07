CalendarEvents = new Meteor.Collection('calendarEvents');

CalendarEvents.allow({
	insert: function (userId, doc) {
		console.log(userId, doc);
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		console.log(userId, doc, fields, modifier);
		return true;
	},
	remove: function (userId, doc) {
		console.log(userId, doc);
		return true;
	},
	fetch: ['owner']
});