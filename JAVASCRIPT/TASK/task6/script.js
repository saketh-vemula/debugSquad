// Design a delivery fee logic for an online food delivery service:
// * If the user’s order value is less than two hundred, display “Delivery not
// available.”
// * If the order value is between two hundred and five hundred, charge fifty as
// delivery fee.
// * If the order value is between five hundred and one thousand, charge twentyfive.
// * If the order value is above one thousand, offer free delivery.
// Additionally, if the user is a premium member, delivery should always be free.
// This task requires nested `if-else` statements within the main conditions.

let orderValue=parseInt(prompt("enter the order value"));
let premiumMember=prompt("are you premimum memeber?(yes/no)");

if(premiumMember=="yes"){
    console.log("delivery is free");
}
else if(orderValue<200){
    console.log("delivery not available");
}

else if((orderValue>200) && (orderValue<500)){
    console.log("delivery fee:=50");
   
}

else if((orderValue>500) && (orderValue<1000)){
    console.log("delivery fee:=25");
   
}
else if(orderValue>1000){
    console.log("free delivery")
}




