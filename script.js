$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            required:true,
            minlength:4,
            maxlength:10
        },
        sname:{
            required:true,
            mainlength:4
        },
        emailAddress:{
            required:true,
            email:true
        },
        password:{
            mainlength:6
        },
        Day:{
            required:true
        },
        gender:{
            required:true
        },
        messages:{
            fname:{
            required:"Enter full name",
            mainlength:"Enter atleast 4 characters"
        }
    }


    })
})