const validarEmail = document.querySelector(".email");
const validPassword = document.querySelector(".valid");
const confirmPassword = document.querySelector(".confirm");
const Boton = document.querySelector(".create");


Boton.addEventListener("click", (e)=>{
    if(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(validarEmail.value) == false){
        alert("Invalid email");
        e.preventDefault();
       
    }
    else if(validPassword.length <= 5){
        //e.stopPropagation();
        alert("Invalid password");
        e.preventDefault();
    }
    
    else if(confirmPassword.length <= 5 || validPassword.value != confirmPassword.value){
        //e.stopPropagation();
        alert("Confirm password again");
        e.preventDefault();
        
    }
})




