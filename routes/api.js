var express = require('express');
var gtfs = require('gtfs');

var router = express.Router();

router.route('/stops')
	.get(function(req,res){
		var agencies;
		gtfs.agencies(function(err, agenciesarray) {
			agencies = err;
		});


		res.send(JSON.stringify(agencies) + 'test string');
	});

router.route('/stops/:stop')
	//returns a particular stop
	.get(function(req,res){
		var stop = req.params.stop;
	});
module.exports = router;