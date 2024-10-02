$(document).ready(function () {
    $('#submitButton').on('click', function () {
        var name = $('#name').val();
        var email = $('#email').val();
        var description = $('#description').val();

        if (name === '' || name === null) {
            $('input[id="name"]').addClass('border-danger');
            $('#message').append('<span class="text-danger" style="font-size:14px;">Name field is required!</span>');
        }

        if (email === '' || email === null) {
            $('input[id="email"]').addClass('border-danger');
            $('#messageEmail').append('<span class="text-danger" style="font-size:14px;">Email field is required!</span>');
        }

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "talhahabib956@gmail.com", // Your Gmail email
            Port: "2525",
            Password: "A9018334F600B06B98FE6B61EA5A8D3BAC63", // Your Gmail password or App Password (if using 2FA)
            To: 'talhahabib956@gmail.com',  // Recipient's email
            From: "talhahabib956@gmail.com",   // Sender's email (your Gmail address)
            Subject: "Test Email",
            Body: "Test Body"
        }).then(function (message) {
            alert(message);  // Success message
        }).catch(function (error) {
            alert("Failed to send mail: " + error);  // Error message
        });
    });


});