// Inputs are employee rating, experience in years, and department:
// * If the rating is excellent and experience is above five years, give a
// twenty percent bonus.
// * If the rating is good and experience is above three years, give a ten
// percent bonus.
// * If the rating is average, give a five percent bonus.
// Additionally, if the department is “Sales,” add a two percent incentive. Print
// the bonus percentage and remarks like “Outstanding,” “Good,” or “Needs
// Improvement.”

let rating=prompt("enter employ rating");
let experience=parseInt(prompt("enter years of experience"));
let dept=prompt("enter department");
let bonus=0;
let remarks="";
if((rating=="excellent") && (experience>5)){
bonus=20;
remarks="outstanding";
}
else if((rating=="good")&&(experience>3)){
    bonus=10;
remarks="good";
}
else if(rating=="average"){
     bonus=5;
remarks="need to improve";
}
if(dept=="sales"){
     bonus+=2;
}
console.log("bonus percent="+bonus);
console.log("remark="+remarks)