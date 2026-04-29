const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("tofahrenheit");
const toCelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
const greet = document.getElementById("greet");

let temp;

function convert(){
    if (toFahrenheit.checked){
       temp = Number(textbox.value);
       temp = temp * 9/5 + 32;
       result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Please select a unit to convert to.";
    }

}

let name = localStorage.getItem("name");

if (name) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  greet.textContent = "Welcome, " + name + "!";
} else {
  greet.textContent = "Welcome!";
}
