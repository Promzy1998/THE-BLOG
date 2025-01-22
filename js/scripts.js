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

Log.addEventListener("click",()=>{

})

  