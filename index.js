var form = document.querySelector("form")
var email = document.querySelector(".email")
var submit = document.querySelector(".submit-btn")
// var errorBorder = document.querySelector(".error-border")
var errorMsg = document.querySelector(".error-msg")

submit.addEventListener("click", button)

function button(){
    
    var sampleInput = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    var empty = ""
    if (email.value == sampleInput){
        return true
    } else if (email.value === empty) {
        errorMsg.style.display = "block"
        email.classList.add("error-border")

    } else{
        errorMsg.style.display = "block"
        email.classList.add("error-border")

    }

}
