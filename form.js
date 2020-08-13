$(document).ready(function(){

    $("#formjs").validate({
        rules:{
            fname:{
                required:true,
                minlength:3
            },
            lname:{
                required:true,
                minlength:3

            },
            email:{
                required:true,
                email:true

            },
            pass:{
                minLength: 12, 
                minUpperCase: 2, 
                     
            }

          
        },
        // Messages have to start after the rules otherwise it will not work
        messages:
        {
            fname:{
                required:"Enter Your First Name"
            }
        }

    })
})