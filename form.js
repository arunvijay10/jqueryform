$(document).ready(function(){
    $("#userfname").hide();
    $("#userlname").hide();
    $("#useremail").hide();
    $("#userpass").hide();
    $("#usercpass").hide();

    var email_err=true;
    var pass_err=true;
    var cpass_err=true;

    $("#user").keyup(function(){
        user_check();
    });
    function user_check(){
        var user_name=$("#user").val();
        alert(user_name);
    };
});