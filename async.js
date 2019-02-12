/*global $*/

window.onload = function() {

    function handleError(jqXHR, testStatus, error){
        console.log(error);
    }    

    $.ajax({
      type: "GET",
      url: "data/tweets.json",
      success: cdTweets,
      error: handleError
    });
    
    function cdTweets(data){
        console.log(data);
    }
          
    $.ajax({
      type: "GET",
      url: "data/friends.json",
      success: cdFriends,
      error: handleError
    });
    
    function cdFriends(data){
        console.log(data);
    }
          
    $.ajax({
      type: "GET",
      url: "data/videos.json",
      success: function(data){
          console.log(data);
      },
      
      error: handleError // error for the tweets.json
    }); 
};