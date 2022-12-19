let name = prompt ('Student name');
let section = prompt ('Student class');
let roll = prompt ('Student roll');
let age = prompt ('Student age');
let bn = prompt ('Bangla');

let gpa = '';
let grade = ''; 

if(bn>=0 && bn<33) {
   
    gpa   = 0;
    grade = 'F';     
}
else if (bn>=33 && bn<40){
  
    gpa   = 1;
    grade ='D';     
}
else if (bn>=40 && bn<50){
    gpa   = 2;
    grade ='C'; 
}
else if (bn>=60 && bn<70){
    gpa   = 3;
    grade ='B'; 
}
else if (bn>=70 && bn<80){
    gpa   = 4;
    grade ='A'; 
}
else if (bn>=80 && bn<90){
    gpa   = 5;
    grade ='A='; 
}
else{
    grade = 'invalid';
    gpa   = 'invalid';
}
console.log(`
    Name : ${name}
    Class: ${section}
    Roll : ${roll}
    Age  : ${age}
-------------------------------------------------------------
 Marks  Bangla = ${bn} Grade = ${grade} Gpa = ${gpa}   
   
`);