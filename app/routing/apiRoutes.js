var friendData = require("../data/friends.js");

var apiRoute = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    })

    app.post('/api/friends', function(req, res) {
        var newFriend = req.body;


        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }

        var differencesArray = [];

        for (var i = 0; i < friendData.length; i++) {

            var comparedFriend = friendData[i];
            var totalDifference = 0;

            for (var j = 0; j < comparedFriend.score.length; j++) {
                var differenceOneScore = Math.abs(comparedFriend.score[j] - newFriend.scores[j]);
                totalDifference += differenceOneScore;
            }

            differencesArray[i] = totalDifference;
        }

        var bestFriendNum = differencesArray[0];
        var bestFriendIndex = 0;

        for (var i = 1; i < differencesArray.length; i++) {
            if (differencesArray[i] < bestFriendNum) {
                bestFriendNum = differencesArray[i];
                bestFriendIndex = i;
            }
        }

        friendData.push(newFriend);

        res.json(friendData[bestFriendIndex]);
    })
}

module.exports = apiRoute;