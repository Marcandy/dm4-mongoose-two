const cohortCtrl = require( "./cohortCtrl" );

module.exports = app => {
	app.route( "/api/cohorts" )
		.get( cohortCtrl.getCohorts )
		.post( cohortCtrl.postCohort );

	app.put( "/api/cohorts/:id/mentors", cohortCtrl.addMentorToCohort );
	app.put( "/api/cohorts/:id", cohortCtrl.addStudentToCohort )
};
