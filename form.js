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

            }
          
        }
    })
})