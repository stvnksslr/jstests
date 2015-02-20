'use strict';


function storeValues() {
    var jsonArray = [{}];
    var jsonString;

    var formSubmission = document.forms;
    for (var i = 0; i < formSubmission.length; i++) {
        if (typeof(jsonArray[0][formSubmission[i].id]) == 'undefined') {
            jsonArray[0][formSubmission[i].id] = [];
        }
        for (var ii = 0; ii < formSubmission[i].elements.length; ii++) {
            jsonArray[0][formSubmission[i].id].push(formSubmission[i].elements[ii].value);
        }
    }

    jsonString = JSON.stringify(jsonArray);
    console.log(jsonString);
}

window.onload = function() {
    document.getElementById('submitJSON').onclick = storeValues;
};
