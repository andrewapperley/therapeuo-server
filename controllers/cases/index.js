'use strict';
var Case = require('../../models/case');
var Message = require('../../models/message');

module.exports = function (router) {

    router.get('/:id', function (req, res) {
        Case.findById(req.params.id)
            .then(function(result) {
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({'error': 'No case by that id.'});
                }
            })
            .catch(function(error) {
                res.status(500).json({'error': error});
            });
    });

    router.get('/:id/messages', function(req, res) {
        Case.findById(req.params.id)
            .then(function(result) {
                if (result) {
                    result.messages()
                        .then(function(results) {
                            res.json(results);
                        })
                        .catch(function(error) {
                            res.status(500).json({'error': error});
                        });
                } else {
                    res.status(404).json({'error': 'No case with that ID, so no messages for you!'});
                }
            })
            .catch(function(error) {
                res.status(500).json({'error': error});
            })
    });

    router.post('/modify', function (req, res) {

        res.send("index");

    });

    router.post('/', function (req, res) {

        res.send("index");

    });

    router.post('/decline', function (req, res) {

        res.send("index");

    });

};
