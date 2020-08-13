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
                minLowerCase: 2, 
                minDigits: 2,  
                minSpecial: 2,      
            }

          
        }
    })
})