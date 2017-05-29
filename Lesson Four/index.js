// Change the background color of the entire document to red
document.body.style.backgroundColor = "red";

// Change the background color of just the "about me" portion to blue
document.getElementsByTagName("h1").item(0).style.backgroundColor = "blue";

// Change the font-style of the entire document to sans-serif
document.body.style.fontFamily = "sans-serif";

// Add your nickname
document.getElementById("nickname").innerHTML = "Double_A";

// Add your favorites
document.getElementById("favorites").innerHTML = "Many things";

// Add your hometown
document.getElementById("hometown").innerHTML = "Liechtenstein";


// Iterate through each li and change the class to "listitem".
var listItems = document.getElementsByTagName("li");
Array.from(listItems).forEach(
    function (item) {
        item.className = "listitem";
    }
);

// Add a style tag that sets a rule for "listitem" to make the color blue (red is not visible on a red background).
style = document.createElement("style");
style.type = "text/css";
style.innerHTML = ".listitem { color: blue; }";
document.head.appendChild(style);


// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
image = document.createElement("img");
image.src = "me.png";
image.width = "300";
document.body.appendChild(image);