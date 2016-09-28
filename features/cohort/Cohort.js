const mongoose = require( "mongoose" );

const Cohort = new mongoose.Schema( {
	name: { type: String, required: true, trim: true, unique: true }
	, lengthInWeeks: { type: Number, default: 13, min: 1 }
	, course: { type: String, enum: [ "WebDev", "iOS", "UI/UX" ] }
	, students: [ { type: mongoose.Schema.Types.ObjectId, ref: "Student" } ]
	, mentors: [ { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" } ]
} );

module.exports = mongoose.model( "Cohort", Cohort );


// 57ebe6826fd5b4c7d78452da - cohort id
//students
// 57ebe1661b686c7ab01edb89
// 57ebe1911b686c7ab01edb8a