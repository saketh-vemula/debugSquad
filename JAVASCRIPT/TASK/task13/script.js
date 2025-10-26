// Input room type, number of nights, and customer rating:
// * If the room is “Standard,” the base cost is one thousand per night.
// * If the room is “Deluxe,” the cost is two thousand.
// * If the room is “Suite,” the cost is three thousand.
// Add a ten percent service charge if the rating is below four. Add a discount of
// five percent for stays longer than five nights. Students must calculate and
// print the total payable amount with messages.

let room=prompt("enter room type");
let nights=parseInt(prompt("enter number of nights"));
let rating=parseInt(prompt("enter your rating"));
let total=0;
if (room=="standard"){
    total=1000;
    total=total*nights;
    console.log("the total cost is ="+total);
}
else if(room=="delux"){
    total=2000;
    total=total*nights;
    console.log("the total cost is ="+total);
}
else if(room=="suite"){
    total=3000;
    total=total*nights;
    console.log("the total cost is ="+total);
}
if(rating<4){
    total=total+(total*0.10);
    console.log("total with 10% service charges="+total  )
}
if(nights>5){
     total=total-(total*0.05);
     console.log("total with 5% discount="+total )
}