'use strict';

// wrapping the parser and its variables in its own function
function queryStringParsing() {
    // slicing and seperating query string by & symbol	
    var queryString = location.search.slice(1).split('&');
    var result = {};
    queryString.forEach(function(processedString) {
        processedString = processedString.split('=');
        result[processedString[0]] = decodeURIComponent(processedString[1] || '');
    });
    // for the final goal of converting to local storage, I am turning the above seperated 
    // slices and converting them to the json format
    function convertToJSON() {
        var queryString = location.search.slice(1).split('&');
        var result = {};
        queryString.forEach(function(processedString) {
            processedString = processedString.split('=');
            result[processedString[0]] = decodeURIComponent(processedString[1] || '');
        });

        return JSON.parse(JSON.stringify(result));
    }

    function SetCookie(cookieName, cookieStr, Days) {
        var today = new Date();
        var expire = new Date();
        Days = 3;
        var cookieName = 'jsTest';
        var cookieStr = result;
        expire.setTime(today.getTime() + 3600000 * 24 * Days);
        document.cookie = cookieName + '=' + escape(cookieStr) + ';expires=' + expire.toGMTString();
    }

    // outputting the data for testing/validation
    var finalizedString = convertToJSON();
    var initiateCookie = SetCookie();
    console.log(finalizedString);
}

// starting the parser
var initiateParser = queryStringParsing();


// Article used for query string processing: http://www.developerdrive.com/2013/08/turning-the-querystring-into-a-json-object-using-javascript/
// Article used for cookie processing http://www.w3schools.com/js/js_cookies.asp
