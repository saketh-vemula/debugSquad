// Develop a program to schedule hospital appointments based on patient age and
// health issue type:
// * If the issue is “Emergency,” always print “Send to Emergency Room
// immediately.”
// * Else if the age is below ten, route to “Pediatric Section.”
// * Else if the age is between ten and sixty, route to “General Section.”
// * Else route to “Senior Citizen Section.”
// Students should combine both condition checks logically.

let age=parseInt(prompt("enter age"));
let issue=prompt("is it emergency (yes/no)");

 
if(issue=="yes"){
    console.log("send to emergency room immediately");
    
}

else if(age<10){
    console.log("pediatric section")
}
else if((age>10) && (age<60)){
    console.log("go to general section")
}
else if(age>60){
    console.log("go to senior citizen section")
}