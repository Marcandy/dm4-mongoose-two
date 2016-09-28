const mentorCtrl = require( "./mentorCtrl" );

module.exports = app => {
	app.route( "/api/mentors" )
		.post( mentorCtrl.postMentor )
		.get( mentorCtrl.getMentors );
};
// 57ebfd2ae3301603bc9742c6 - taryn