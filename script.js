var input=document.querySelector("#pass-input");
var submit=document.querySelector("#btn-submit");
var outputMsg=document.querySelector("#output");

function checkPassword(){
 if(input.value!="")  { 
if(input.value.length < 10){
    alert("Enter more than 10 characters");
}
else{
    outputMsg.innerText="Your password is saved";
}
 }
 else{
    alert("Please enter password");
 }
}

submit.addEventListener("click",checkPassword);