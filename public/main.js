
$(document).ready(function () {
    $('.submit').click(function (e){
        e.preventDefault()

        var fname = $('.fname').val();
        var lname = $('.lname').val();
        var phone = $('.phone').val();
        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        var status = $('.status');
        status.empty();


        if(fname.length > 1){
           // console.log("VALID")
        }
        else{
            status.append('<div>First name can not be left empty</div>')
        }

        if(fname.length > 1 && /\d/.test(fname)){
           status.append('<div>First name can not contain a number</div>')
        }

        if(lname.length > 1){
            //console.log("VALID")
        }
        else{
            status.append('<div>Last name can not be left empty</div>')
        }

       if(lname.length > 1 && /\d/.test(lname)){
           status.append('<div>Last name can not contain a number</div>')
        }

        if(phone.length == 10 && !isNaN(phone)){
            //console.log("valid")
        } else{
            status.append('<div>Enter a valid phone number</div>')
        }

        if(email.length > 10 && email.includes('.') & email.includes('@')){
            //console.log("valid")
        } else{
            status.append('<div>Enter a valid email address</div>')
        }

        if(subject.length > 1){
            //console.log("VALID")

        }
        else{
            status.append('<div>The message should have a subject</div>')
        }

        if(message.length < 1){
            status.append('<div>Empty message can not be sent</div>')
        }
    })
})