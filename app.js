const btn =document.querySelector("button");
const emailInput=document.querySelector("#email-input");
const small=document.querySelector("small");
const emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener("click",()=>{
    emailValidation();
});
function emailValidation() {
    if(emailInput.value===""){
        alert("Whoops! It looks like you forgot to add your email");
    }
    else if(emailInput.value.match(emailformat)){
        alert("Your email address is valid");
        emailInput.style.border="1px solid hsl(223, 87%, 63%)";
        small.style.display="none";
    }
    else{
        small.style.display="block";
        emailInput.style.border="1px solid hsl(354, 100%, 66%)";
    } 
}