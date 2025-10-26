// Input vehicle type, speed, and road type:
// * If the speed exceeds the limit on a highway, show “Fine of one thousand.”
// * If in a city area, the fine is doubled.
// * If the vehicle is a heavy type such as a truck or bus, increase the fine by
// fifty percent.
// If none of the conditions match, show “Safe Driving – No Fine.” Students must
// combine multiple layered `if-else if` conditions to calculate the total fine
// dynamically.

let type=prompt("enter heavy vehicle type(truck/bus)");
let speed =parseInt(prompt("enter speed"));
let road=prompt("enter road type");
let fine=0;
if(speed>100 && road=="highway"){
fine=1000;

}
else if(road=="city" && speed>70){
    fine=2000;
    
}

 if(type=="truck" || type=="bus" && fine>0){
    fine+=fine*0.50;
    
}
else{console.log("safe driving no fine")}
console.log("fine charged="+fine);