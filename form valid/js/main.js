
//
//localStorage.setItem("register", JSON.stringify([]));
//regLength = JSON.parse(localStorage.getItem("register")).length;
//regArray = JSON.parse(localStorage.getItem("register"));



function regster(name,pass){
    this.user =name;
    this.password1 =pass;
    
}

//  Get Register elements

var sign_up_name = document.getElementById("sign-up-name");
var sign_up_email =document.getElementById("sign-up-email");
var sign_up_pass =document.getElementById("sign-up-pass");
var sign_up_re_pass =document.getElementById("re_pass");
var sign_up =document.getElementById("signup");
var span_name=document.getElementById("span-name");
var span_pass=document.getElementById("span-pass");
var span_email=document.getElementById("span-email");
var span_re_pass=document.getElementById("span-re-pass");




//Array of registered users
var users = [];





// Adding Events on elements

sign_up_name.addEventListener("blur",function(){
    if(!isValidName()){
        span_name.style.display = 'block';
        sign_up_name.focus();
        sign_up_name.select();
    }else{
        span_name.style.display = 'none';
    }
});
sign_up_email.addEventListener("blur",function(){
    if(!isValidEmail()){
        span_email.style.display = 'block';
        sign_up_email.focus();
        sign_up_email.select();
    }else{
        span_email.style.display = 'none';
    }
});
sign_up_pass.addEventListener("blur",function(){
    if(!isValidPass()){
        span_pass.style.display = 'block';
        sign_up_pass.focus();
        sign_up_pass.select();
    }else{
        span_pass.style.display = 'none';
    }
});
sign_up_re_pass.addEventListener("blur",function(){
    if(!isMatchPass()){
        span_re_pass.style.display="block";
        sign_up_re_pass.focus();
        sign_up_re_pass.select();
    }else{
        span_re_pass.style.display="none";
    }

});



    
    
    sign_up.addEventListener("click",function(e){
        
    if(!isValidName()&&!isValidEmail()&&!isValidPass()&&!isMatchPass()){
        e.preventDefault();
        sign_up.setAttribute("href","#");
        sign_up.removeAttribute("target");
    }
    if(!isValidName()){
        span_name.style.display="block";
    }
    if(!isValidEmail()){
        span_email.style.display="block";
    }
    if(!isValidPass()){
        span_pass.style.display="block";
    }
    
    
    
    
    
    if(isValidName()&&isValidEmail()&&isValidPass()&&isMatchPass()){
        
        
        index= users.findIndex(item => item.user ==sign_up_name.value);
        if(index == -1){
            
            //Pushing new username and password
            users.push(new regster(sign_up_name.value,sign_up_pass.value));
            localStorage.setItem("register", JSON.stringify(users));
            
            
            sign_up.setAttribute("href","signin.html");
            sign_up.setAttribute("target","_blank");
        }
        else{
            sign_up.setAttribute("href","#");
            sign_up.removeAttribute("target");
            alert("Sorry! This name is already taken!!!");
        }
    
    }
    
});
    
    
    
    
    
    
    
    
    
    
    
    
//fuctions validation


    function isValidName(){
        namePattern = /^[a-zA-Z]{2,10}$/;
        if(sign_up_name.value.match(namePattern)){
            return true;
        }else{
            return false;
        }
    }
    function isValidEmail(){
        emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(sign_up_email.value.match(emailPattern)){
            return true;
        }else{
            return false;
        }
    }
    function isValidPass(){
        passPattern=/^[1-9]{4,10}$/;
        if(sign_up_pass.value.match(passPattern)){
            return true;
        }else{
            return false;
        }
    }
    function isMatchPass(){
        if(sign_up_re_pass.value===sign_up_pass.value){
            return true;
        }else{
            return false;
        }
    }







