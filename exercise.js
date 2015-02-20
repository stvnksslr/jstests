'use strict';


function storeValues() {
    var arr = [{}];
    var jsonString;

    var forms = document.forms;
    for (var i = 0; i < forms.length; i++) {
        if (typeof(arr[0][forms[i].id]) == 'undefined') {
            arr[0][forms[i].id] = [];
        }
        for (var ii = 0; ii < forms[i].elements.length; ii++) {
            arr[0][forms[i].id].push(forms[i].elements[ii].value);
        }
    }

    jsonString = JSON.stringify(arr);
    console.log(jsonString);
}

window.onload = function() {
    document.getElementById("submitJSON").onclick = storeValues;
};
