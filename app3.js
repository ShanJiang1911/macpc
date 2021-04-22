'use strict'

let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (HourNow >= 1) {
    greeting = 'Good morning!';
} else {
    greeting = 'Hello!';
}

document.write('<h5>' + greeting + '</h5>');