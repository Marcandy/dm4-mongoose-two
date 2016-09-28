const Cohort = require( "./Cohort" );

module.exports = {
	postCohort( req, res ) {
		new Cohort( req.body ).save( ( err, cohort ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( cohort );
		} );
	}

	, getCohorts( req, res ) {
		Cohort
			.find()
			.populate( "students mentors" )
			.exec( ( err, cohorts ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( cohorts );
			} );
	}
	, addStudentToCohort( req, res ) {
		// cohort.students.push( req.body.studentId );
		Cohort.findByIdAndUpdate( req.params.id, { $push: { students: req.body.studentId } }, ( err, cohort ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( cohort );
		} );
	}

	, addMentorToCohort( req, res ) {
		// cohort.students.push( req.body.studentId );
		Cohort.findByIdAndUpdate( req.params.id, { $push: { mentors: req.body.mentorId } }, ( err, cohort ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( cohort );
		} )
	}
};
