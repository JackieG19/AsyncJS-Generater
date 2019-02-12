/*  READYSTATE 

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete

*/ /*global $*/

// making theses request
window.onload = function() { // is going to fire up when the window loads
    var http = new XMLHttpRequest();
    
    http.onreadystatechange = function(){
        //console.log(http);
        
        // listen for readystate 4 and check that status is ok
        if(http.readyState == 4 && http.status == 200){
            // getting the data and printing to the console
            // console.log(JSON.parse(http.response)); 
            // this is gonna parse a string and its gonna return into some kind of js object format
        }
    };
    
    // open method sets up he request forward tells js where we want to get the data from, 
    // the type of request we want to make, and whether we want it to be asynchronous or synchronous
    http.open("GET", "data/tweets.json", true);
    
    // telling the js to go grab the data and bring it back
    http.send();
    // console.log("test");
    
    // jquery method
    $.get("data/tweets.json", function(data){
        // passing in the two things: the data and 
        // a callback function that fire it retrieves the data
        // with the parameter of data and use that in the console log
        console.log(data);
    });
    console.log("test");
};