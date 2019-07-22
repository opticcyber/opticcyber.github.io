// Copyright (C) Optic Cyber Solutions, LLC. All Rights Reserved.

jQuery(document).ready(function() {

    /*
        Initialize wow.js for animations
    */
    new WOW().init();

    /*
        Smooth scrolling for anchors
    */
    $('a.smooth-scroll').on('click', function(event) {
        if (
                window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&  window.location.hostname == this.hostname
        ) {
            var target = this.hash;
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: $(target).offset().top - 70
                }, 900);
                return false;
            } // end if
        } // end if
    });

    /* 
        Add minus icon for collapse element, which is open by default
    */
    $(".collapse show").each(function() {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    /*
        Toggle plus/minus icon on show/hide of collapse element
    */
   $(".collapse").on("show.bs.collapse", function() {
       $(this).prev(".card-header").find(".fas").removeClass("fa-plus").addClass("fa-minus");
    }).on("hide.bs.collapse", function() {
        $(this).prev(".card-header").find(".fas").removeClass("fa-minus").addClass("fa-plus");
    });

})
