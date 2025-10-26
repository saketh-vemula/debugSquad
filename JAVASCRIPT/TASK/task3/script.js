// Develop a program that calculates a student's grade based on their marks out of
// one hundred:
// * If the marks are above ninety, print “Excellent – Grade A.”
// * If the marks are between seventy-five and ninety, print “Good – Grade B.”
// * If the marks are between fifty and seventy-five, print “Average – Grade C.”
// * If the marks are below fifty, print “Failed – Needs Improvement.”
// The program should also print a motivational message along with the grade.

let studentMarks=parseInt(prompt("enter student marks"));
console.log(studentMarks);

if(studentMarks>=90){
    console.log("grade A");
    console.log("excellent");
}
 else if((studentMarks>=75) && (studentMarks<90)){
     console.log("grade B");
    console.log("good");
}
else if((studentMarks>=50) && (studentMarks<75)){
    console.log("grade c");
    console.log("average");
}
else if(studentMarks<50){
     console.log("failed");
    console.log("needs improvement");
}