let name = prompt('Student Name');
let className = prompt('Class');
let roll = prompt('Roll');
let bn = prompt('Bangla');
let en = prompt('English');
let math = prompt('Math');
let s = prompt('Science');
let ss = prompt('SScience');
let rel = prompt('Religion')

console.log(`

Name      : ${name}
Class     : ${className}
Roll      : ${roll}
===========================================================================>
Subject       Marks               GPA                       Grade   
Bangla        ${bn}               ${getGpa(bn)}          ${getGrade(bn)}
English       ${en}               ${getGpa(en)}          ${getGrade(en)}
Math          ${math}             ${getGpa(math)}        ${getGrade(math)}      
Science       ${s}                ${getGpa(s)}           ${getGrade(s)}
S Science     ${ss}               ${getGpa(ss)}          ${getGrade(ss)}  
Religion      ${rel}              ${getGpa(rel)}         ${getGrade(rel)}      

`);