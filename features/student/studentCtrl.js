const Student = require( "./Student" );

module.exports = {
	postStudent( req, res ) {
		new Student( req.body ).save( ( err, student ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( student );
		} );
	}

	, getStudents( req, res ) {
		Student.find( {}, ( err, students ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( students );
		} );
	}

	, addProject( req, res ) {
		Student.findByIdAndUpdate( req.params.id, { $push: { projects: req.body } }, ( err, student ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( student );
		} );
	}

	, getProjectById( req, res ) {
		Student.findById( req.params.id, ( err, student ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			const project = student.projects.id( req.params.projectId );
			return res.status( 200 ).json( project );
		} );
	}
};
