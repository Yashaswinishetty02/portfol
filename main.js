var typed=new Typed(".text", {
    strings:["Frontend Developer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
    
});
function sendMail(){
    let parms={
        name : document.getElementById("name").Value,
        email:document.getElementById("email").Value,
        subject:document.getElementById("subject").Value,
        message:document.getElementById("message").Value,
    }

    emailjs.send("service_5sajw0l", "template_1jhvhxj" ,parms).then(alert("Email Sent !!"))
}