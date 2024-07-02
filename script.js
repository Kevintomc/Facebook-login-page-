$(document).ready(function () {
    $("#signupform").validate({
        rules: {
            emailll: {
                required: true,
                email: true
            },
            passw: {
                required: true,
                minlength: 4
            }


        }

    })
})