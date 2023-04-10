//day 5 lap 
let Name, Age, Gender;

Name = prompt("Please Enter your  name");
Gender = prompt("Please Enter your gender");
Age = Number(prompt("Please Enter your age"));

function teastAge() {
   
    if (parseInt(Age) <= 0) { 
        alert("age can't be less than or equal to zero");
    }
}
teastAge();

let Wellcom = confirm("Do you want to wants to skip the welcoming message?");

if ( !Wellcom ) {
    switch (Gender.toLocaleLowerCase()) {
        case "male" : alert("Wellcom Mr " + Name)
        break;
        case "female": alert("Wellcom Ms " + Name)
        break;
        default :alert("Wellcom " + Name)
        break;
    }

}

/*
//another way

function testGender() {
   
    if ( Gender.toLocaleLowerCase ()=== "female") { 
        alert("Wellcom Ms " + Name);
    }
    else if (Gender.toLocaleLowerCase() === "male") { 
        alert("Wellcom Mr " + Name); 
    }
    else {
         alert("Wellcom " + Name);
    }
}
if ( !Wellcom ) {
    testGender();
}
*/
