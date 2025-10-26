// Create a program that provides weather condition alerts based on temperature:
// * If the temperature is below ten, display “It’s freezing cold, wear a
// jacket.”
// * If the temperature is between ten and twenty-five, display “Cool weather,
// perfect for outdoor activities.”
// * If the temperature is between twenty-five and thirty-five, display “Warm
// day, stay hydrated.”
// * If the temperature is above thirty-five, display “It’s too hot, avoid going
// out in the afternoon.”

let weather=parseInt(prompt("enter weather temperature"));
console.log(weather);
if(weather<10){
    console.log("weather temperature :"+weather +"degrees") ;
    console.log("It’s freezing cold, wear jacket.");

}
else if((weather>=10) && (weather<26)){
      console.log("weather temperature :"+weather +"degrees") ;
    console.log(" Cool weather perfect for outdoor activities.");
}
else if((weather>=26) && (weather<35)){
      console.log("weather temperature :"+weather +"degrees") ;
    console.log( "Warm day, stay hydrated.");
}
else if(weather>35){
    console.log("weather temperature :"+weather +"degrees") ;
    console.log("It’s too hot, avoid going out in the afternoon.");

}