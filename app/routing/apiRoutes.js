const path = require('path');
var friends = require('../data/friends')


module.exports = function(app) {
app.get('/api/friends', function(req, res){
    res.json(friends)
});

app.post('/api/friends', function(req, res){
    console.log('Yo I got posted mang');
    let newFriend = req.body;
    console.log(req.body);
    let bestMatch;
    let bestMatchDifference = 50;

    for (var i = 0; i < friends.friends.length; i++){
        console.log(friends.friends[i]);
        let totalDifference = 0;
        
        for (var k = 0; k < friends.friends[i].scores.length; k++){
            
            let difference = parseInt(newFriend.scores[k]) - parseInt(friends.friends[i].scores[k]);
            totalDifference += Math.abs(difference);
        }
        if (totalDifference < bestMatchDifference) {
            bestMatchDifference = totalDifference;
            console.log('After run '+i+' the best difference was '+bestMatchDifference)
            bestMatch = friends.friends[i]
        }
        console.log(bestMatch);
        console.log(bestMatchDifference);
    }

    friends.friends.push(newFriend);
    res.json(bestMatch);
})
};