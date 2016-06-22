var express = require('express');
var gtfs = require('gtfs');

var router = express.Router();

router.route('/stops')
	.get(function(req, res) {
		var agency_key;
		gtfs.agencies(function(err, agencies) {
			if (err) {
				console.log(err);
			} else {
				agency_key = agencies[0].agency_key;
				gtfs.getStops(agency_key, function(err, stops) {
					if (err) {
						console.log(err);
					} else {
						res.send(stops);
					}
				});

			}
		});
	});

router.route('/stops/:stop')
	//returns a particular stop
	.get(function(req, res) {
		var stop = req.params.stop;
		var agency_key;
		gtfs.agencies(function(err, agencies) {
			if (err) {
				console.log(err);
			} else {
				agency_key = agencies[0].agency_key;
				gtfs.getStops(agency_key, stop, function(err, stops) {
					if (err) {
						console.log(err);
					} else {
						res.send(stops);
					}
				});

			}
		});

	});

module.exports = router;