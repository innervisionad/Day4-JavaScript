//Create an object variable with 3 properties: firstname, surname, //fullname. For the fullname value create a method which returns //the firstname and surname and display on the webpage

var person = {
    firstName: "Adam",
    surname: "Clements",
    fullName: function(){
    return (this.firstName + " " + this.surname);
    }  
};

document.getElementById("overView").innerHTML = person.fullName();

