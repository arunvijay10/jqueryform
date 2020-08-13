$(document).ready(function(){

    $("#formjs").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            }
        }
    })
})