//	Create an object with properties and a method. Access the method

var cube = {
    height: 20,
    width: 20,
    depth: 20,
    howBig: function(){
    return this.height * this.width;
    }  
};

document.getElementById("overView").innerHTML = "the cube's dimensions are " + cube.height + "cm by " + cube.width + "cm by " + cube.depth + ".";

var boxArea = cube.howBig();

document.getElementById("output1").innerHTML = "the area of 1 face of the cube is " + boxArea + "cm<sup>2</sup>.";
