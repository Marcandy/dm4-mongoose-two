const studentRoutes = require( "./features/student/studentRoutes" );
const cohortRoutes = require( "./features/cohort/cohortRoutes" );
const mentorRoutes = require( "./features/mentor/mentorRoutes" );

module.exports = app => {
	studentRoutes( app );
	cohortRoutes( app );
	mentorRoutes( app );
};
