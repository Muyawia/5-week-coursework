//localStorage.setItem("Monday", "Eat Lasagna");
//localStorage.setItem("Tuesday", 0772540052);
//console.log(localStorage);
//localStorage.removeItem("Monday");
//console.log(localStorage);
//console.log(localStorage.key(1));

var inValue1 = document.getElementById("inValue1");
var insert1 = document.getElementById("Insert1");

insert1.onclick = function (event) {
    event.preventDefault()
    var key = "Monday";
    var value = inValue1.value;

    localStorage.setItem(key, value);
    console.log(localStorage);
};