const friendData = require('../data/friends.js');
const path = require('path');

let totalDifference = 0;

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });


    app.post('/api/friends', function (req, res) {

        let greatMatch = {
            name: "",
            image: "",
            matchDifference: 1000
        };
        let usrData = req.body;
        let usrName = usrData.name;
        let usrImage = usrData.image;
        let usrScores = usrData.scores;

        let totalDifference = 0;

        for (let i = 0; i < [friends].length - 1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            for (let j = 0; j < 10; j++) {

                totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= greatMatch.friendDifference) {


                    greatMatch.name = friends[i].name;
                    greatMatch.photo = friends[i].photo;
                    greatMatch.matchDifference = totalDifference;
                }
            }
        }

        friends.push(usrData);

        res.json(greatMatch);
    });
};