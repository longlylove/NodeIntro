/*var maxTime = 1000;

var evenDoubler = function (v, callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2)
    {
        setTimeout(function () {
            callback(new Error("Odd Input"))
        },waitTime);
    } else {
        setTimeout(function () {
            callback(null, v*2, waitTime)
        }, waitTime);
    }
};*/

var mathfun = require('./mathfun');

var count = 0;

var processResults = function (err, results, time) {
    if (err) {
        console.log("Error: " + err.message);
    } else {
        console.log("The result are: " + results + " (" + time + "ms)");
    }
};
/*var handleResults = function (err, results, time) {
    if (err)
    {
        console.log("Error: " + err.message);
    }
    else
    {
        console.log("The result are: " + results + " (" + time + "ms)");
    }
};*/

// evenDoubler(2, handleResults);
// evenDoubler(3, handleResults);
// evenDoubler(10, handleResults);

for (var i=0; i<10; i++)
{
    console.log("Calling evenDoubler for value: " + i);
    //evenDoubler(i,handleResults);
    /*evenDoubler(i, function (err, results, time) {
        if (err) {
            console.log("Error: " + err.message);
        } else {
            console.log("The results are: " + results + " (" + time + "ms)");
        }
        if (++count === 10){
            console.log("Done!");
        }
    })*/
    mathfun.evenDoubler(i,processResults);
}

console.log("-----");

console.log("The 'foo' variable from module 'mathfun' = " + mathfun.foo);

console.log("The 'maxtime' variable is not exported: '" + mathfun.maxTime);