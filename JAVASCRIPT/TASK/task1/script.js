// Create a program that checks a user’s purchase amount and applies discounts
// based on the following criteria:

// * If the total is less than one thousand, display “No discount.”
// * If the total is between one thousand and two thousand, display “Ten percent
// discount.”

// * If the total is between two thousand and five thousand, display “Twenty
// percent discount.”

// * If the total is above five thousand, display “Thirty percent discount and
// free delivery.”

// The program should prompt the user for the purchase amount and print a final
// bill summary, including the discount applied (if any).

let purchaseAmount=parseInt(prompt("enter the purchase amount"));
if(purchaseAmount<1000){
    console.log("NO Discount.");
    console.log("Total bill is:"+purchaseAmount);
}
else if((purchaseAmount>=1000) && (purchaseAmount<=2000)){
    console.log("Ten percent (10%) discount.");
    var totalAmount= purchaseAmount*(1-(10/100));
    console.log("after discount "+totalAmount);
}
else if(purchaseAmount>=5000){
    console.log("thirty percent discount");
    console.log("free delivery");
    var totalAmount= purchaseAmount*(1-(30/100));
    console.log("after discount"+totalAmount);
}