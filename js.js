$.validator.setDefaults({
    submitHandler: function() {
        alert("enviado");
    }
});


$(document).ready(function() {
    $('#signupForm').validate({
        rules: {
            fullname: {
                required: true,
                minlength: 5
            },
            ciudad: {
                required: true,
                minlength: 4
            },
            rut: {
                required: true,
                minlength: 8
            },
            comments: {
                required: true,
                minlength: 50
            },
            number: {
                required: true,
                minlength: 9
            },
            confirm_number: {
                required: true,
                minlength: 9,
                equalTo: "#number"
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        messages: {
            fullname: {
                required: "Por favor ingresa tu nombre completo",
                minlength: "Tu nombre debe ser de no menos de 8 caracteres"
            },
            ciudad: {
                required: "Por favor ingresa tu ciudad",
                minlength: "Tu ciudad debe ser de no menos de 4 caracteres"

            },
            rut: {
                required: "Por favor ingresa tu rut",
                minlength: "Tu rut debe ser de no menos de 5 caracteres"
            },
            comments: "Por favor ingresa un comentario",
            number: {
                required: "Por favor ingresa un número valido",
                minlength: "Tu número debe ser de no menos de 9 digitos de longitud"
            },

            email: "Por favor ingresa un correo válido",
            agree: "Por favor acepta nuestra política",
            luckynumber: {
                required: "Por favor"
            }
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-10").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-10").addClass("has-success").removeClass("has-error");
        }
    });
});