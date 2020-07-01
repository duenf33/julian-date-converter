var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var JAN = range(001, 031);
var FEB = range(32, 59);
var MAR = range(60, 90);
var APR = range(91, 120);
var MAY = range(121, 151);
var JUN = range(152, 181);
var JUL = range(182, 212);
var AUG = range(213, 243);
var SEP = range(244, 273);
var OCT = range(274, 304);
var NOV = range(305, 334);
var DEC = range(335, 365);

function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}
document.getElementById("span").innerHTML = JAN[6];

