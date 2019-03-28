// Copyright (C) Optic Cyber Solutions, LLC. All Rights Reserved.

jQuery(document).ready(function() {

    /*
        Initialize wow.js for animations
    */
    new WOW().init();

    /*
        Smooth scrolling from navbar and footer links
    */
    $(".navbar a, .footer a").on('click', function(event) {
        // Verify there is a hash value on the link (href="#*")
        if(this.hash !== "") {
            // console.log(this.hash);

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store the hash value
            var hash = this.hash;

            // jQuery animate to smoothly scroll
            // 900 is the time in milliseconds it takes to scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                // Restore hash in URL (default click behavior)
                window.location.hash = hash;
            });
        } // end if
    });
})
