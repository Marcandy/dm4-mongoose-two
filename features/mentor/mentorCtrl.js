const Mentor = require( "./Mentor" );

module.exports = {
	postMentor( req, res ) {
		new Mentor( req.body ).save( ( err, mentor ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 201 ).json( mentor );
		} );
	}
	, getMentors( req, res ) {
		Mentor.find( {}, ( err, mentors ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( mentors );
		} );
	}
};
