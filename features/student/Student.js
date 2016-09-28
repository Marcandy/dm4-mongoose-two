const mongoose = require( "mongoose" );

const Project = new mongoose.Schema( {
	name: { type: String, required: true, trim: true }
	, url: { type: String, required: true, trim: true }
	, kind: { type: String, enum: [ "Personal", "No Server" ] }
	, frustrationLevel: { type: Number, min: 1, max: 10, default: 8 }
} );

const Student = new mongoose.Schema( {
	name: { type: String, required: true, trim: true }
	, email: { type: String, required: true, trim: true }
	, age: { type: Number, required: true, min: 18 }
	, tuitionPaid: { type: Boolean, default: false }
	, projects: [ Project ]
} );


module.exports = mongoose.model( "Student", Student );

/*
get all students
post a student
create and connect routes for the above
 */
