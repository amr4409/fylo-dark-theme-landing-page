let email = document.getElementById("email");
let btn = document.getElementById("btn");
let formDiv = document.querySelector(".form"); 
  let divMessages = document.createElement("div"); 
  divMessages.className = "Messages";
  formDiv.appendChild(divMessages);
btn.onclick = function () {
  
  // email.oninput = function () {

  
  
    for (let i = 0; i < email.value.length; i++) {
      
      
      if (email.value[i] == "#") {

        let span = document.createElement("span");
        span.className = "validtion";
        span.textContent = "Please enter a valid email address";
        divMessages.appendChild(span);

      }else {
        console.log("valed");
      }
  
    };
  
  
  
  // }
}




    // if (email !== "#") {
    //   console.log("valed")
    // } else {
    //   console.log("not valed")

    // }