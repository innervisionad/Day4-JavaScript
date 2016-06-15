//Create an object literal with 3 properties
var cube= {
    height:10,
    width:12,
    depth:15
};

var dimension1 = cube.height;
var dimension2 = cube.width;
var dimension3 = cube.depth;

document.getElementById("obProp").innerHTML = "the cube's dimensions are " + dimension1 + "cm by " + dimension2 + "cm by " + dimension3;