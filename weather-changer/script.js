function checkweather(){
     console.log("Button clicked");

    let weather =
    document.getElementById("weatherInput").value;

    if(weather === "rainy"){
        document.getElementById("message").innerHTML =
        "Carry an umbrella ☔";
    } else if(weather === "sunny"){
        document.getElementById("message").innerHTML =
        "Wear sunglasses 😎";
    } else if(weather === "cold"){
        document.getElementById("message").innerHTML =
        "Wear a jacket 🧥";
    } else{
        document.getElementById("message").innerHTML =
        "Weather not recognized";
    }

}
