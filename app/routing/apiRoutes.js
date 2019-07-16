//Getting Data from friends.js 
var friendinfo = require("../data/friends.js");

module.exports = function(app){
    
    //Routes for Displaying Array of Object friendinfo

    app.get('/api/friends', function(req,res){
      res.json(friendinfo);
    });
  
    app.post('/api/friends', function(req,res){

        // Array of score in friend object
        var friendscores = req.body.scores;

        var scoresArray = [];

        var matchindextch;
    
        //runs through all current friends in list
        for(var i=0; i<friendinfo.length; i++){
          var scoresDiff = 0;
          //run through scores to compare friends
          for(var j=0; j<friendscores.length; j++){
            scoresDiff += (Math.abs(parseInt(friendinfo[i].scores[j]) - parseInt(friendscores[j])));
          }
    
          //push results into scoresArray
          scoresArray.push(scoresDiff);
        }
    
        //after all friends are compared, find best match
        for(var i=0; i<scoresArray.length; i++){
          if(scoresArray[i] <= scoresArray[matchindextch]){
            matchindextch = i;
          }
        }
        friendinfo.push(req.body);
    
        res.json(friendinfo[matchindextch]);
    
        
      });
  };