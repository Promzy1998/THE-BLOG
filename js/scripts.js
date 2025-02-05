 // Creating components or calling out html classes 
 const btn = document.querySelectorAll(".account_btn")
 const first = document.querySelector(".Signup_container")
 const second = document.querySelector(".Login_container")
 const Log=document.querySelector(".Log")
 const Sig = document.querySelector(".Sig")
 const account_btn=document.querySelector(".account_btn")
 const login=document.querySelector(".form-login")
 const sign=document.querySelector(".form_sign")
 const transitionbody = document.querySelector(".transition-body")
 const acct=document.querySelector(".acct")
 // creating a kind of toggling mechanism by overiding initial as true and false 
 let initial=true
 btn.forEach((btn)=>{
     btn.addEventListener('click',()=>{
        account_btn.classList.add("btn")
       // initial turns false and vice-versa
         initial=!initial
         if(initial){
             //this takes place when the initial becomes true
             Sig.classList.remove("dnone")
             Log.classList.remove("dblock")
             sign.classList.add("dnone")
             acct.classList.add("acct")
             login.classList.remove("dnone", "transition")
             transitionbody.classList.add("translateright")
             transitionbody.classList.remove("translateleft")
             first.classList.remove('color','transition','Sig-Config-Mediaquery')
             second.classList.remove( 'Log-Config-Mediaquery')
           
            
         }
    
         else{
             // else this should initially take place
             Sig.classList.add("dnone")
             Log.classList.add("dblock", "transition","btn")
             sign.classList.remove("dnone")
             login.classList.add("dnone", "transition")
             first.classList.add('color', 'transition','Sig-Config-Mediaquery')
             second.classList.add('Log-Config-Mediaquery')
             second.classList.remove('color','transition')
             transitionbody.classList.remove("translateright")
             transitionbody.classList.add("translateleft")
             acct.classList.remove("acct")
            
            
           
         }
     })
 })

document.addEventListener("DOMContentLoaded",()=>{
    let password=document.getElementById("password");
    let cpassword=document.getElementById("confirmpassword");
    let modal_password=document.getElementById("modal_password");
    let strengthText=document.getElementById("strength")
    let eyeToggler=document.getElementById('toggler')
    let confirmToggler=document.getElementById('confirmtoggler')
    let button=document.getElementById("btn")
    password.addEventListener("input", checkStrength)
    cpassword.addEventListener("input", checkMatch)
    eyeToggler.addEventListener("click", () => togglePassword("password",eyeToggler));
    confirmToggler.addEventListener("click", () => togglePassword("confirmpassword",confirmToggler));
    button.addEventListener("click",()=>{
        let passwordValue=password.value
        let cpasswordValue=cpassword.value
        if (cpasswordValue.trim() === "") {
            modal_password.innerHTML = "⚠️ Please confirm your password!";
            modal_password.style.color = "orange";
            return;
        }
        if (passwordValue === cpasswordValue) {
            modal_password.style.color = "green";
            modal_password.innerHTML = "✅ Passwords match!";
        } else {
            modal_password.style.color = "red";
            modal_password.innerHTML = "❌ Passwords do not match!";
        }
    })
    // Check Password Strength
    function checkStrength() {
        eyeToggler.style.display="inline"
        strengthText.style.display='inline'
        let passwordV = password.value;
        let strength = 0;
        if (passwordV.length >= 8) strength++;
        if (/[A-Z]/.test(passwordV)) strength++;
        if (/[a-z]/.test(passwordV)) strength++;
        if (/[0-9]/.test(passwordV)) strength++;
        if (/[@$!%*?&]/.test(passwordV)) strength++;

        let strengthLevels = ["Weak ❌", "Moderate ⚠️", "Strong ✅"];

        if (strength <= 2) {
            strengthText.style.color = "red";
            strengthText.innerHTML = `Strength: ${strengthLevels[0]}`;
        } else if (strength <= 4) {
            strengthText.style.color = "orange";
            strengthText.innerHTML = `Strength: ${strengthLevels[1]}`;
        } else {
            strengthText.style.color = "green";
            strengthText.innerHTML = `Strength: ${strengthLevels[2]}`;
        }
    }
    function checkMatch(){
        confirmToggler.style.display="inline"
        modal_password.style.display='inline'
        let passwordValue=password.value
        let cpasswordValue=cpassword.value
        if (cpasswordValue.trim() === "") {
            modal_password.innerHTML = "⚠️ Please confirm your password!";
            modal_password.style.color = "orange";
            return;
        }
        else if (passwordValue === cpasswordValue) {
            modal_password.style.color = "green";
            modal_password.innerHTML = "✅ Passwords match!";
        } else {
            modal_password.style.color = "red";
            modal_password.innerHTML = "❌ Passwords do not match!";
        }
    }
    opacity=true
    function togglePassword(id,toggle) {
        let passwordInput = document.getElementById(id);
        opacity=!opacity
        if (passwordInput) {
            if(opacity){
                toggle.style.opacity=1
             }
            else{
                toggle.style.opacity=0.2 
            }
              passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        }
    }

})
  