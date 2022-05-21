const fname = document.getElementById("FirstName");
const fnamemsg = document.getElementById("FirstNameMsg");

fname.addEventListener('keyup',function(){
    let msg = fname.value;
    if(msg.length == 0){
        fname.style.border = "#ff7978 solid";
        fnamemsg.style.display = "block";
        fname.placeholder = "";
        // fname.background = "url('../images/icon-error.svg')"
    }
    else{
        fnamemsg.style.display = "none";
        fname.style.border = " 1px #b0b0b2 solid";
    }
})

const lname = document.getElementById("LastName");
const lnamemsg = document.getElementById("LastNameMsg");

lname.addEventListener('keyup',function(){
    let msg = lname.value;
    if(msg.length == 0){
        lname.style.border = "#ff7978 solid";
        lnamemsg.style.display = "block";
    }
    else{
        lnamemsg.style.display = "none";
        lname.style.border = " 1px #b0b0b2 solid";
    }
})

const email = document.getElementById("Email");
const emailmsg = document.getElementById("EmailMsg");

email.addEventListener('keyup',function(){
    let msg = email.value;
    if(msg.length == 0){
        email.style.border = "#ff7978 solid";
        emailmsg.style.display = "block";
    }
    else{
        emailmsg.style.display = "none";
        email.style.border = " 1px #b0b0b2 solid";
    }
})

const pwd = document.getElementById("Pwd");
const pwdmsg = document.getElementById("PwdMsg");

pwd.addEventListener('keyup',function(){
    let msg = pwd.value;
    if(msg.length == 0){
        pwd.style.border = "#ff7978 solid";
        pwdmsg.style.display = "block";
    }
    else{
        pwdmsg.style.display = "none";
        pwd.style.border = " 1px #b0b0b2 solid";
    }
})
