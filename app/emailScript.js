
/*Function to send Email for Contact Us form.*/     
function sendEmail() {
    
    var name=document.querySelector('.form-control-m-211').value;
    var email=document.querySelector('.form-control-m-212').value;
    var phone=document.querySelector('.form-control-m-213').value;
    var message=document.querySelector('.form-control-m-214').value;

    Email.send({
    SecureToken: "b8908323-9876-4ca9-9c41-e13e8e4c569e",
    To: email+",healthokseva@gmail.com",
    From: "healthokseva@gmail.com",
    Subject: 'Thankyou for contacting HealthOk',
    Body: '<h2>Copy Of Your Responses</h2> <br> Name: '+name+'<br> Email: '+email+'<br> Phone: '+phone+'<br> Message: '+message, 
})
.then(function () {
  alert("Mail Sent Successfully")
});
}   

/*Function to send Email for Volunteer Registration form.*/ 

function sendVolunteerEmail(){
    var name=document.querySelector('.form-control-m-215').value;
    var email=document.querySelector('.form-control-m-216').value;
    var phone=document.querySelector('.form-control-m-217').value;
    var details=document.querySelector('.form-control-m-219').value;
    var e = document.getElementById("Volunteering-Option");
    var strUser = e.value;
    

    Email.send({
    SecureToken: "b8908323-9876-4ca9-9c41-e13e8e4c569e",
    To: email+",healthokseva@gmail.com",
    From: "healthokseva@gmail.com",
    Subject: 'Volunteer Registration Details',
    Body: '<h2>Volunteer Details:</h2> <br>Name: '+name+'<br> Email: '+email+'<br> Phone: '+phone+'<br> Volunteering-Option: '+strUser+'<br> Details: '+details, 
})
.then(function (message) {
  alert("Mail Sent Successfully")
});

}  


function sendAskQuestionEmail() {
        var e = document.getElementById("Category-Option");
        var strUserOption = e.value;
        var name=document.getElementById('name').value;
        var email=document.getElementById('email').value;
        var message=document.getElementById('textmsg').value;
        Email.send({
        SecureToken: "b8908323-9876-4ca9-9c41-e13e8e4c569e",
        To: email+",healthokseva@gmail.com",
        From: "healthokseva@gmail.com",
        Subject: 'Question Details sent to HealthOk',
        Body: '<h2>Question Details sent to HealthOk:</h2> <br>Category-Option: '+strUserOption+'<br> Full Name: '+name+'<br> Email Id: '+email+'<br> Question Asked/Query: '+message, 
    })
    .then(function (message) {
      alert("Your Question Sent Successfully")
    });
        
    }    