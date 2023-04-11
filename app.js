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



//day 6 lap 

function askQuestion(question, answers) {
    let response = prompt(question + ' (Yes/No)');
    if (response === null || response === '') {
      answers.push('invalid');
    } else {
      answers.push(response.toLowerCase());
    }
  }
  
let answers = [];
  
askQuestion('are you from jordan?', answers);
askQuestion('are you enjoying this site?', answers);
askQuestion('do you like coding?', answers);

console.log('Answers:', answers);
