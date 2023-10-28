
//prompt()
//alert()

//alert("hello world!")

//button query selector
let myButton = document.querySelector("#myButton");


// find elemnt by id
// find elements by class


// add event listner
myButton.addEventListener("click", myClick);

function myClick(){
    // console.log('Clicking!')
    // console.log(myName);
    // alert("Hello" + myName + "!")

    let myName = prompt("What is your name? Welcome to our Weather app");
    
    // Run condition to check if the name is "null" prompt
    if (myName === null){
        myName = "there!!"
    }
    
    alert(`Hello ${myName}!`)
    
    
    const weather = prompt(`What's your favorite type of weather?`);
    
    
    let myImage = document.querySelector(".weatherImage");
    
    //Run condition to check what I wrote in the "weather" prompt

    //if (weather === "sunny"|| weather === "Sunny" || weather === "SUNNY")

    // .toLowerCase()

    if (weather.toLowerCase() === "sunny") {
        myImage.src = "/CA_01/assets/sunny.jpg";

    } else if (weather.toLowerCase() === "rainy") {
        myImage.src = "/CA_01/assets/rainy.jpg";  
        
    } else if (weather.toLowerCase() === "thunderstorm") {
        myImage.src = "/CA_01/assets/thunderstorm.jpeg";  

    } else if (weather.toLowerCase() === "windy") {
        myImage.src = "/CA_01/assets/windy.jpg";  

    } else if (weather.toLowerCase() === "cloudy") {
        myImage.src = "/CA_01/assets/cloudy.jpg";  

    } else if (weather.toLowerCase() === "snowy") {
        myImage.src = "/CA_01/assets/snowy.jpeg";  

    } else if (weather.toLowerCase() === "foggy") {
        myImage.src = "/CA_01/assets/foggy.jpg";  

    } else if (weather.toLowerCase() === "moving") {
        myImage.src = "/CA_01/assets/moving.gif";  

    } else {
        alert('Sorry, we do not have that weather in our system right now!')
    }
    

    //Run condition to check what I wrote in the "weather" prompt


    

    
}




