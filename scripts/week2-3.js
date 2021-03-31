const charles={};
charles.name="charles";
charles.lastName="lee"
charles.company="CoderSchool";
charles.age=30;

function isCoderSchoolStaff(chrl){
    if(chrl.company==="CoderSchool"){
        console.log(chrl.name +"if working in coderschool");
    }
}
isCoderSchoolStaff(charles);

//2
function describePerson(person){
    console.log(person.name, person.age, person.company)
}
describePerson(charles);
//3
function lastName(person){
    console.log(person.lastName)
}
describePerson(charles);
//4
function getOneYear(person){
    var agePlus=person.age;
   var lastage= agePlus+1;
    console.log(lastage)
}
getOneYear(charles);
//5 
function birthYear(person){
    var thisYear=new Date().getFullYear();
    var age=person.age;
    var year=thisYear - age;
    console.log(year);

}
birthYear(charles);
//6
