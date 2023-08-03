(function($) {
  $(document).ready(function() {
    // Closes the sidebar menu
    $(document).on("click", ".menu-toggle", function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
      $(this).toggleClass("active");
  });

    // Smoothscroll script
    $(document).on("click", ".smooth-scroll", function(e) {
      e.preventDefault();
      var dis = $(this),
          target = dis.attr("href"),
          offset = parseInt($(target).offset().top),
          header = $(".sidebar-nav");

      dis.addClass("active").parent().siblings().find(".smooth-scroll").removeClass("active");
      $('html,body').stop().animate({ scrollTop: offset }, 200);
      $(".menu-toggle").trigger("click");
  });

    // Closes responsive menu when a scroll trigger link is clicked
    $(document).on("click", "#sidebar-wrapper .js-scroll-trigger", function() {
      $("#sidebar-wrapper").removeClass("active");
      $(".menu-toggle").removeClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

    // TESTIMONIALS CAROUSEL HOOK
    var owl = $('#customers-testimonials');
    owl.owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        },
        navigation: true,
        navigationText: true
    });
  });
})(jQuery);
