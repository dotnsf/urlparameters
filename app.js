//. app.js
var express = require( 'express' ),
    app = express();

app.use( express.Router() );


app.get( '/', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );

  res.write( JSON.stringify( req.query, null, 2 ) );
  res.end();
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );

