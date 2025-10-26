// Students must calculate cab fare based on multiple conditions:
// * If the distance is less than five kilometers, charge a minimum fare.
// * If the distance is between five and fifteen kilometers, apply a mid-tier
// fare.
// * If the distance is above fifteen, apply a long-distance fare.
// Additionally, if the ride time is during night hours (e.g., after ten PM or
// before five AM), add a twenty percent night charge. If the user has a promo
// code, apply an extra discount.

let distance =parseInt(prompt("enter your diatance km"));
let rideTime =parseInt(prompt("enter ride time"));
let promo=prompt("enter promo code")
let fair=0;
let night=0;
let disc=0;
 if(distance <5){
   fair=distance *5;
   console.log("minimum fair="+fair)
 }
 else if((distance>5)&&(distance<15)){
   fair=distance *9;
   console.log("mid-tier fair="+fair)
 }
else if(distance>12){
   fair=distance *20;
   console.log("long distance fair="+fair)
}

if((rideTime<5) || (rideTime>=22)&&(rideTime<=24)){
   night=30
   fair=fair+night;
   console.log("along with night charges="+fair)
}
 if(promo=="vit"){
   disc=0.30;
   fair=fair-(fair*disc)
   console.log("total with discount ="+fair)
}
else{
  console.log("invalid promo code")
}


