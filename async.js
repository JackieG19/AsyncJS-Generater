window.onload = function() {
    function get(url){ // this function is taking in a url
        
        return new Promise(function(resolve, reject){
        // returning a promise object(with a function(when the promise is resolved  
        // when its a success, when the promise is rejected and its an error))    
           
           var xhttp = new XMLHttpRequest(); // grabing data
           
           xhttp.open("GET", url, true);
           // using the open method(get request to the url provided which is passing 
           // through the get function, and true for asynchronous)
           
           // if the browser supports the promise interface then is going to support the two methods below
           xhttp.onload = function(){
           // when the data has loaded set it equal to a function
             
             if(xhttp.status == 200){
             // check the status is equal to 200 and make sure its been found
                 
                 resolve(JSON.parse(xhttp.response)); // call this resolve method when its successful
                 // resolve the data by passing it first and getting the response from the xhttp object
             
                 
             } else{ // if it doesn't equal 200 
                 
                 reject(xhttp.statusText); 
                 // call the reject method which is passing in the status text of the object
             }  
           };
           xhttp.onerror = function(){
           // if it can't be loaded for any reason then its rejected as well
              reject(xhttp.statusText);
           };
           xhttp.send();
        });
    }
    
    var promise = get("data/tweets.json");
    promise.then(function(tweets){ // applys when the resolve method runs
       console.log(tweets);
       return get("data/friends.json");
    }).then(function(friends){
        console.log(friends);
        return get("data/videos.json");
    }).then(function(videos){
        console.log(videos);
    }).catch(function(error){ // applys when the reject method runs
       console.log(error); 
    });
};


// what is a promise?
// is an object which represents an action that hasn't 
// finished yet but will do at some point down the line;
// a placeholder for the result of some kind of asynchronous operation like a HTTP request