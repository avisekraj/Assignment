$(document).ready(function () {
    var popup = $('#contactFormPopup');
    var contactUsButton = $('#contactUsButton');

    contactUsButton.on('click', function () {
        popup.show();
    });

    

    $(window).on('click', function (event) {
        if (event.target.id === 'contactFormPopup') {
            popup.hide();
        }
    });

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            url: 'https://getform.io/f/ajjejxxa',
            method: 'POST',
            data: formData,
            success: function (response) {
                alert('Form submitted successfully!');
                popup.hide();
            },
            error: function (error) {
                alert('An error occurred. Please try again.');
            }
        });
    });
});

$(document).ready(function () {
    $('.project-content').on('click', function () {
        var imageSrc = $(this).data('image');
        $('#projectImage').attr('src', imageSrc);
        $('.project-content').removeClass('active');
        $(this).addClass('active');
    });
});