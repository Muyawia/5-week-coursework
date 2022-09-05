//localStorage.setItem("Monday", "Eat Lasagna");
//localStorage.setItem("Tuesday", 0772540052);
//console.log(localStorage);
//localStorage.removeItem("Monday");
//console.log(localStorage);
//console.log(localStorage.key(1));

var inValue1 = document.getElementById("inValue1");
var insert1 = document.getElementById("Insert1");

window.localStorage.clear()

insert1.onclick = function (event) {
    event.preventDefault()
    var key = "Monday";
    var value = inValue1.value;

    localStorage.setItem(key, value);
    console.log(localStorage);
};

var inValue2 = document.getElementById("inValue2");
var insert2 = document.getElementById("Insert2");

insert2.onclick = function (event) {
    event.preventDefault()
    var key = "Tuesday";
    var value = inValue2.value;

    localStorage.setItem(key, value);
    console.log(localStorage);
};

var inValue3 = document.getElementById("inValue3");
var insert3 = document.getElementById("Insert3");

insert3.onclick = function (event) {
    event.preventDefault()
    var key = "Wednesday";
    var value = inValue3.value;

    localStorage.setItem(key, value);
    console.log(localStorage);
};

var inValue4 = document.getElementById("inValue4");
var insert4 = document.getElementById("Insert4");

insert4.onclick = function (event) {
    event.preventDefault()
    var key = "Thursday";
    var value = inValue4.value;

    localStorage.setItem(key, value);
    console.log(localStorage);
};

var inValue5 = document.getElementById("inValue5");
var insert5 = document.getElementById("Insert5");

insert5.onclick = function (event) {
    event.preventDefault()
    var key = "Friday";
    var value = inValue5.value;

    localStorage.setItem(key, value);
    console.log(localStorage);
};

var inValue6 = document.getElementById("inValue6");
var insert6 = document.getElementById("Insert6");

insert6.onclick = function (event) {
    event.preventDefault()
    var key = "Saturday";
    var value = inValue6.value;

    localStorage.setItem(key, value);
    console.log(localStorage);
};

var inValue7 = document.getElementById("inValue7");
var insert7 = document.getElementById("Insert7");

insert7.onclick = function (event) {
    event.preventDefault()
    var key = "Sunday";
    var value = inValue7.value;

    localStorage.setItem(key, value);
    console.log(localStorage);
};