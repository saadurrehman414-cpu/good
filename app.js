// 1. Empty array (literal)
var studentNames1 = [];

// 2. Empty array (object)
var studentNames2 = new Array();

// 3. Strings array
var strings = ["apple", "banana", "orange"];

// 4. Numbers array
var numbers = [1, 2, 3, 4];

// 5. Boolean array
var booleans = [true, false, true];

// 6. Mixed array
var mixed = ["Ali", 20, true];

// 7. Qualifications array
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

// Display in browser
document.write("<h3>Qualifications:</h3>");
document.write("<ol>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");


var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

document.write("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + (scores[0] / totalMarks * 100) + "%<br>");
document.write("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + (scores[1] / totalMarks * 100) + "%<br>");
document.write("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + (scores[2] / totalMarks * 100) + "%<br>");


// Initial array
var colors = ["Red", "Green", "Blue"];

// Display initial array
document.write("Initial Colors: " + colors + "<br><br>");

// a. Add color at the beginning
var colorBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorBeginning);
document.write("After adding to beginning: " + colors + "<br><br>");

// b. Add color at the end
var colorEnd = prompt("Enter a color to add to the end:");
colors.push(colorEnd);
document.write("After adding to end: " + colors + "<br><br>");

// c. Add two more colors to the beginning
colors.unshift("Pink", "Purple");
document.write("After adding two more to beginning: " + colors + "<br><br>");

// d. Delete the first color
colors.shift();
document.write("After deleting first color: " + colors + "<br><br>");

// e. Delete the last color
colors.pop();
document.write("After deleting last color: " + colors + "<br><br>");

// f. Add color at user-defined index
var indexAdd = prompt("At which index do you want to add a color?");
var colorName = prompt("Enter the color name:");
colors.splice(indexAdd, 0, colorName);
document.write("After adding color at index: " + colors + "<br><br>");

// g. Delete color(s) from user-defined index
var indexDelete = prompt("At which index do you want to delete color(s)?");
var numberDelete = prompt("How many colors do you want to delete?");
colors.splice(indexDelete, numberDelete);
document.write("After deleting color(s): " + colors + "<br><br>");


var scores = [320, 230, 480, 120];

document.write("Scores of Students: " + scores + "<br>");

scores.sort(); // ascending order

document.write("Ordered Scores of Students: " + scores + "<br><br>");


var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

document.write("Cities list:<br>" + cities + "<br><br>");

var selectedCities = [];

selectedCities.push(cities[2]);
selectedCities.push(cities[3]);

document.write("Selected cities list:<br>" + selectedCities + "<br><br>");


var arr = ["This", "is", "my", "cat"];

document.write("Array:<br>");
document.write(arr + "<br><br>");

var str = arr.join(" ");

document.write("String:<br>");
document.write(str + "<br><br>");


var devices = ["keyboard", "mouse", "printer", "monitor"];

document.write("Devices:<br>" + devices + "<br><br>");

document.write("Out:<br>" + devices.shift() + "<br>");
document.write("Out:<br>" + devices.shift() + "<br>");
document.write("Out:<br>" + devices.shift() + "<br>");
document.write("Out:<br>" + devices.shift() + "<br><br>");


var devices = ["keyboard", "mouse", "printer", "monitor"];

document.write("Devices:<br>" + devices + "<br><br>");

document.write("Out:<br>" + devices.pop() + "<br>");
document.write("Out:<br>" + devices.pop() + "<br>");
document.write("Out:<br>" + devices.pop() + "<br>");
document.write("Out:<br>" + devices.pop() + "<br>");
