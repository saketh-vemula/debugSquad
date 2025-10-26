// Create a program to estimate electricity bills based on total units consumed:
// * If the units consumed are below one hundred, display “Minimum charge only.”
// * If the units consumed are between one hundred and three hundred, apply a
// rate for normal consumption.
// * If the units consumed are between three hundred and five hundred, apply a
// higher rate and display energy-saving tips.
// * If the units consumed are above five hundred, display “High consumption
// alert” and add a penalty.
// Students must calculate the total payable amount and print it with appropriate
// messages.

let units=parseInt(prompt("enter counsumed units"));
let total=0;
let rate=0;
let penalty=0;
if(units<100){
    console.log("minimum charges only");
total=100;
}
else if((units>100) && (units<300)){
    rate=3;
    total=units*rate;
    console.log("normal consumption");
}
else if((units>300) && (units<500)){
    rate=5;
    total=units*rate;
    console.log("use less power consumption items");
}
else if(units>500){
    penalty=500
    total=units+penalty;
    console.log("high consumption");
}
console.log("total amount"+total);
console.log("penality applied = "+penalty);
console.log("rate applied =" +rate )

