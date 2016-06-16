//Build an object constructor
//Create an instance of the object
//Display the properties of the object instance on the webpage

function personInfo (firstName, surname, age){
    this.firstName = firstName;
    this.surname = surname;
    this.age = age;
};  

var joeCloggs = new personInfo ("Joe", "Cloggs", 32);

document.getElementById("overView").innerHTML = joeCloggs.firstName + " " + joeCloggs.surname + " " + joeCloggs.age + ".";

