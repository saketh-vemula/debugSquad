// Build a program to calculate cinema ticket prices based on age:

// * Children below twelve years get half price.

// * Adults between twelve and sixty years get full price.

// * Senior citizens above sixty get twenty percent off.

// The program should ask for the user's age and display the actual ticket price
// after applying the appropriate discount.

let age=parseInt(prompt("enter your age"));
console.log("your age "+age);
let ticketprice=250;
console.log("original ticket price"+ticketprice);
discount=0;


if(age<=12){
    console.log("fifty percentage discount");
    discount=0.50*ticketprice;    
}
else if((age>12) && (age<=60)){
    console.log("original ticket price"+ticketprice);
}
else if(age>=60){
    console.log("twenty percent discount");
    discount=0.20*ticketprice;
}
let finalprice=ticketprice-discount;
console.log("finalprice"+finalprice);