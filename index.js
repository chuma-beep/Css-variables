//set variable to select control inputs
const inputs = document.querySelectorAll(".controls input");


//function that updates css variables
function handleUpdate(){
    //get value from input
      const suffix = this.dataset.sizing || "";
      //allows css variables to be changed
      document.documentElement.style.setProperty(`--${this.name}`, this.value  + suffix);

}

//set up eventListeners to effect chage and mouse move.
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
