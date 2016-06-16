//1.Create an object literal with 3 properties
//2.Create an object variable and output each object property in a //concatenated string onto the webpage
var cube= {
    height:10,
    width:12,
    depth:15,
};


document.getElementById("obProp").innerHTML = "the cube's dimensions are " + cube.height + "cm by " + cube.width + "cm by " + cube.depth + ".";