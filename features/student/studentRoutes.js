const studentCtrl = require( "./studentCtrl" );

module.exports = app => {
	app.route( "/api/students" )
		.get( studentCtrl.getStudents )
		.post( studentCtrl.postStudent );

	app.put( "/api/students/:id", studentCtrl.addProject );

	app.get( "/api/students/:id/projects/:projectId", studentCtrl.getProjectById );
};
