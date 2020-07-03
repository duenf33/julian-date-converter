const year = document.getElementById("year");
const todaysDate = document.getElementById("todaysDate");
const span = document.getElementById("span");
const inputDate = document.getElementById("inputDate").value;
const buttonOne = document.getElementById("labelDate");

const d = new Date()
todaysDate.innerHTML = d.toDateString();

buttonOne.addEventListener('click, btn1'); 
  function btn1() {
    var foo = [];
    for (var i = 1970; i <= 2100; i += 4) {
        foo.push(i);
    }
year.innerHTML = foo[2];
console.log(inputDate);
console.log(d.substr(0,4));  //substrc() used to only read the first 4 characters of a string.


const jd = [
    { month: jan = range(0, 31)},
    { month: feb = range(31, 59)},
    { month: mar = range(59, 90)},
    { month: apr = range(90, 120)},
    { month: may = range(120, 151)},
    { month: jun = range(151, 181)},
    { month: jul = range(181, 212)},
    { month: aug = range(212, 243)},
    { month: sep = range(243, 273)},
    { month: oct = range(273, 304)},
    { month: nov = range(304, 334)},
    { month: dec = range(334, 365)}
]

const jdly = [
    { month: jan = range(0, 31)},
    { month: feb = range(31, 60)},
    { month: mar = range(60, 91)},
    { month: apr = range(91, 121)},
    { month: may = range(121, 152)},
    { month: jun = range(152, 182)},
    { month: jul = range(182, 213)},
    { month: aug = range(213, 244)},
    { month: sep = range(244, 274)},
    { month: oct = range(274, 305)},
    { month: nov = range(305, 335)},
    { month: dec = range(335, 366)}
]

function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}

    span.innerHTML = sep[5];
}