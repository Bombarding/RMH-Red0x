/**
 * Ronald McDonald House - Volunteer Service Server
 */

/**
 * Dependencies
 */
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require("cors");
var errorhandler = require('errorhandler');
var express = require('express');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var multer = require('multer');

/**
 * Mongoose ORM for MongoDB
 */
 
 /**
 * Mongoose ORM for MongoDB Possible Fix?
 */
// with mongodb:// URI
var db = mongoose.connection;
//var db = mongoose.createConnection('mongodb://127.0.0.1:27017/vs');
/*Error: mongoose.connect('mongodb://localhost:27017/volunteerservice');*/
/*Error: mongoose.connect('mongodb://localhost:27017/volunteerservice');*/
mongoose.connect('127.0.0.1:27017/volunteerservice');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('Database Connection Successful');
});

//mongoose.connect('mongodb://localhost/volunteerservice')
var app = express();

/*Writing to Database. Currently there is a connection as stated above. Now, lets apply the models and fucking do it*/
app.listen(8000);

app.get('/', function(req, res){
    res.get(data);
});

app.use(function(req, res, next){
    console.log("A new request received at " + Date.now());
    //This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware function/route handler.
    next();
});

/**
 * Set the routes used by the API
 */
var calendar = require('./controller/CalendarController');
var service = require('./controller/ServiceController');

/**
 * Use the set routes
 */
app.use('/calendar', calendar);
app.use('/service', service);

/*Define Schemas Below*/
var calendarSchema = new mongoose.Schema({
    calendar_id: Number,
    service_ids: Array,
    year: Number,
    month: Number
});
var serviceSchema = new mongoose.Schema({
    service_id: Number,
    calendar_id: Number,
    service_status: String,
    date: String,
    year: Number,
    month: Number,
    day: Number,
    service_category: String,
    service_order: Number,
    queue: Boolean,
    queue_order: Number,
    full_name: String,
    service_name: String,
    service_description: String
});

var CCalendar = mongoose.model("CCalendar", calendarSchema);
var SService = mongoose.model("SService", serviceSchema);


/**
 * Calendar Model
 */

/**
 * HTTP GET: /calendar/
 * Return calendar data for all users
 */
app.get('/', function(req, res) {
    CCalendar.find({}, function (err, CCalendar) {
        if(err) throw err;
        res.send(CCalendar);
    });
});

/**
 * HTTP GET: /calendar/:month
 * Return calendar data by 'month'
 */
app.get('/:month', function(req, res) {
    CCalendar.find({month: req.params.month}, function (err, CCalendar) {
        if(err) throw err;
        res.send(CCalendar);
    });
});

/**
 * HTTP GET: /calendar/:calendar_id
 * Return calendar data by 'calendar_id'
 */
app.get('/:calendar_id', function(req, res) {
    CCalendar.find({calendar_id: req.params.calendar_id}, function (err, CCalendar) {
        if(err) throw err;
        res.send(CCalendar);
    });
});

/**
 * HTTP POST: /calendar/new
 * Add new calendar data
 */
app.post('/new', function(req, res) {
    CCalendar.create({
        calendar_id: req.body.calendar_id,
        service_ids: req.body.service_ids,
        year: req.body.year,
        month: req.body.year
    }, function (err, CCalendar) {
        if (err) throw err;
        res.send(CCalendar);
    });
});

/**
 * HTTP POST: /calendar/update
 * Update an existing calendar
 */
app.post('/update', function(req, res) {
    Calendar.update({
        calendar_id: req.body.calendar_id,
        service_ids: req.body.service_ids,
        year: req.body.year,
        month: req.body.year
    }, function(err, calendar_data) {
        if(err) throw err;
        res.send(calendar_data);
    });
});

/*Service Model*/
/**
 * HTTP GET: /service
 * Return all service data
 */
app.get('/', function(req, res) {
    SService.find({}, function (err, SService) {
        if(err) throw err;
        res.send(SService);
    });
});

/**
 * HTTP GET: /service/:date
 * Return service data by 'date'
 */
app.get('/:date', function(req, res) {
    SService.find({date: req.params.date}, function (err, SService) {
        if(err) throw err;
        SService.save();
        res.send(SService);
    });
});

/**
 * HTTP POST: /service/new
 * Add new service data
 */
app.post('/new', function(req, res) {
    SService.create({
        service_id: req.body.service_id,
        calendar_id: req.body.calendar_id,
        service_status: req.body.service_status,
        date: req.body.date,
        year: req.body.year,
        month: req.body.month,
        day: req.body.day,
        service_category: req.body.service_category,
        service_order: req.body.service_order,
        queue: req.body.queue,
        queue_order: req.body.queue_order,
        full_name: req.body.full_name,
        service_name: req.body.service_name,
        service_description: req.body.service_description
    }, function (err, SService) {
        if (err) throw err;
        res.send(SService);
    });
});

/**
 * HTTP POST: /service/update
 * Update an existing service
 */
app.post('/update', function(req, res) {
    SService.update({
            service_id: req.body.service_id,
            calendar_id: req.body.calendar_id,
            service_status: req.body.service_status,
            date: req.body.date,
            year: req.body.year,
            month: req.body.month,
            day: req.body.day,
            service_category: req.body.service_category,
            service_order: req.body.service_order,
            queue: req.body.queue,
            queue_order: req.body.queue_order,
            full_name: req.body.full_name,
            service_name: req.body.service_name,
            service_description: req.body.service_description
        },
        req.body, function(err, SService) {
            if(err) throw err;
            res.send(SService);
        });
});

db.once('update', function callback() {
    console.log('Write Successful');
});
















/*End Write->Databse Testing*/
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(cors());
app.use(errorhandler());
app.use(express.static(__dirname + '/static'));
app.use(multer()); // for parsing multipart/form-data

/**
 * Handle PUT & DELETE requests from forms with a POST method
 */
app.use(methodOverride(function(req) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method
    }
}));
/**
 * Handle 404 & 500 errors
 */
app.use(function(err, req, res){
    res.status(404);
    res.send("404 NOT FOUND");
    if(err) throw err;
});

app.use(function(err, req, res){
    res.status(500);
    res.send("500 SERVER ERROR");
    if(err) throw err;
});

module.exports = app;