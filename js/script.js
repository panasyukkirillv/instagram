$(function () {

    // Header Text Animation

    var headerTextStrings = [];

    $('.header__text-strings > li').each(function () {
        headerTextStrings.push($(this).text());
    });

    var headerText = new Typed('.header__text-output', {
        strings: headerTextStrings,
        loop: true,
        typeSpeed: 80,
        backSpeed: 40,
    });

    // Header Scroll Animation

    $('.header__button').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.header').outerHeight(),
        }, 500);
    });

    // Tabs

    $(".tabs-triggers__item").click(function (e) {
        e.preventDefault();
        $(".tabs-triggers__item").removeClass("tabs-triggers__item--active");
        $(this).addClass("tabs-triggers__item--active");
        $(".tabs-content__item").removeClass("tabs-content__item--active");
        $($(this).attr("href")).addClass("tabs-content__item--active");
      });
    
      $(".tabs-triggers__item:first").click();

    //   Form Validation

      var validateOptions = {
        onfocusout: false,
        onkeyup: false,
        onclick: true,
        errorElement: 'p',
        focusInvalid: false,
        rules: {
            email: {
                required: true,
                email: true,
            },
            username: {
                required: true,
            },
            text: {
                required: true,
            },
        },
      };

      $('#contact-form').validate(validateOptions);
      $('#payment-form').validate(validateOptions);



    // Payment Window

    $('.package__button').click(function (e) {
        e.preventDefault();
        $('.payment-window').addClass('payment-window--active');
        $('body').addClass('lock');
    });

    $('.payment-window__close-button').click(function (e){
        e.preventDefault();
        $('.payment-window').removeClass('payment-window--active');
        $('body').removeClass('lock');
    });



});