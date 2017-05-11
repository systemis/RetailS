var express = require('express');
var app     = express();

function remove(word, text){
    var chA = text.split("");
    console.log(chA);
    if(chA[chA.length - 1] === word){
        delete chA[chA.length - 1];
    }

    console.log(chA);
    console.log(chA.join(""));
}

app.listen("3090", () => {
    remove(".", "dff");
})