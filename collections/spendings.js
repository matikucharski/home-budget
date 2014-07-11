Spendings = new Meteor.Collection("spendings");

Spendings.allow({
	insert: function (userId, doc) {
		console.log(userId, doc);
		// if cena equals 0 dont insert that as there is no reason for that
		if (doc.cena === 0) return false;
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