// Design a program to check a user's eligibility for a bank loan based on their
// monthly income and age:
// * If the income is below twenty thousand, the user is not eligible.
// * If the income is between twenty thousand and fifty thousand, the user is
// eligible for a personal loan.
// * If the income is above fifty thousand, the user is eligible for both
// personal and home loans.
// The program should print an eligibility message accordingly.

let age=parseInt(prompt("enter your age"));
console.log(age);
if(age<18){
    console.log("user's not eligible");
}
else if(age>=18){
    console.log("user is eligible");
}

let income=parseInt(prompt("enter monthly income"));
console.log(income);
if(income<20000){
console.log("income:" +income);
console.log("user's not eligible");
}
else if((income>20000) && (income<50000)){
    console.log("income:" +income);
    console.log("user is eligible for  personal loan");
}
else if(income>50000){
    console.log("income:" +income);
    console.log("user is eligible for both personal and home loan");
}