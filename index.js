const express = require( "express" );
const { json } = require( "body-parser" );
const mongoose = require( "mongoose" );
const app = express();
const port = 4000;
const mongoUri = "mongodb://localhost:27017";
const masterRoutes = require( "./masterRoutes" );

app.use( json() );

masterRoutes( app );

mongoose.connect( mongoUri );
mongoose.connection.once( "open", () => console.log( `Mongoose listening at ${ mongoUri }` ) );

app.listen( port, () => console.log( `Express listening on ${ port }` ) );
