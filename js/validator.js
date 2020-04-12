(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();

                    $(form).find('.form-control:invalid').toArray().forEach(function (elem) {
                        $(elem).next('.invalid-feedback').toArray().forEach(function (invalid) {
                            $(invalid).addClass('d-block')
                        });
                    });

                    $('.select2').toArray()
                        .forEach(function (elem) {
                            $(elem).next('.select2-container').toArray()
                                .forEach(function (container) {
                                    if(!$(elem).val()){
                                        $(container).addClass('has-error');
                                    }else {
                                        $(container).removeClass('has-error');
                                        $(container).addClass('has-success');
                                        $(container).next('.invalid-feedback').removeClass('d-block')
                                    }
                                });
                        });
                    Swal.fire({
                        type:'error',
                        title:'<strong style="color:#dc3545;">Por favor complete los campos del formulario</strong>',
                        position:'bottom-right',
                        toast:true,
                        showConfirmButton: false,
                        timer:2000
                    });
                }
                form.classList.add('was-validated');
                $(form).find('.form-control:valid').toArray().forEach(function (elem) {
                    $(elem).next('.invalid-feedback').toArray().forEach(function (invalid) {
                        $(invalid).removeClass('d-block');
                    });
                });
            }, false);
        });
    }, false);
})();
$(document).ready(function(){
    var selects = document.getElementsByClassName('select2');
    Array.prototype.filter.call(selects, function(select) {
        $(select).on('change',function(){
            $(select).next('.select2-container').toArray()
                .forEach(function (container) {
                    if(!$(select).val()){
                        $(container).addClass('has-error');
                    }else {
                        $(container).removeClass('has-error');
                        $(container).addClass('has-success');
                        $(container).next('.invalid-feedback').removeClass('d-block')
                    }
                });
        });
    });
    var inputs = document.getElementsByClassName('form-control');
    Array.prototype.filter.call(inputs, function(input) {
        $(input).keyup(function () {
            $(input).next('.invalid-feedback').toArray()
                .forEach(function (elem) {
                    $(elem).removeClass('d-block');
                });
        });
    });
});