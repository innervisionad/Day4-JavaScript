//Create an object within and object (nested) and display a nested //object property on the webpage

var homeAddress = {
    firstName: "Joe ",
    surname: "Cloggs <br>",
    street:{
        houseNumber: "123 <br>",
        streetName: "Doowap Street <br>",
        town: "Dillydallyham <br>",
        postCode: "CT12 3BS"
        },
    address: function(){
    return (this.firstName + this.surname + this.street.houseNumber + this.street.streetName + this.street.town + this.street.postCode);
    }  
};

document.getElementById("overView").innerHTML = homeAddress.address();

