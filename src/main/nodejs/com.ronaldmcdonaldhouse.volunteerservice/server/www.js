/*Dox Update*/

/**
 * Dependencies.
 */
var app = require('../app');

/**
 * Set the port for the server
 */
app.set('port', process.env.PORT || '27017');

/**
 * Set the server to listen on the set port
 */
app.listen(app.get('port'), function(){
    console.log("Ronald McDonald House Volunteer Service");
    console.log("♪┏(°.°)┛┗(°.°)┓┗(°.°)┛┏(°.°)┓ ♪");
});
