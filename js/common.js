//main navigation

jQuery(document).ready(function ($) {

  if (jQuery(window).width() > 1024) {
    $("html").niceScroll({
      scrollspeed: 120,
      touchbehavior: false,
      autohidemode: false,
    });
  }

   $(".htl1").click(function(){

    $('.htls2').css({'opacity':'0', 'pointer-events': 'none','transition': '0.3s ease-in-out'});

     $('.htls1').css({'opacity': '1', 'pointer-events': 'all', 'transform': 'inherit', 'transition': '0.6s ease-in-out'});

   })


   $(".htl2").click(function(){

    $('.htls1').css({'opacity':'0', 'pointer-events': 'none' ,'transition': '0.3s ease-in-out'});

    $('.htls2').css({'opacity': '1', 'pointer-events': 'all', 'transform': 'inherit' , 'transition': '0.6s ease-in-out'});

  })




  $('#our-hotels').change(function(){

    var filter_hotel = $(this).val();

    if(filter_hotel  == 'ind'){
      $('#air').addClass('d-none');
      $('#oly').addClass('d-none');
      $('#ind').addClass('d-flex').removeClass('d-none');

    }
    if(filter_hotel  == 'air'){
      $('#air').addClass('d-flex').removeClass('d-none');
      $('#oly').addClass('d-none');
      $('#ind').addClass('d-none');
    }

    if(filter_hotel  == 'oly'){
      $('#air').addClass('d-none');
      $('#oly').addClass('d-flex').removeClass('d-none');
      $('#ind').addClass('d-none');
    }

    console.log(filter_hotel);


  })



  $('#select-offers').change(function(){

    var filter_select_offer = $(this).val();

    if(filter_select_offer  == 'ind'){
      $('#air-items').addClass('d-none');
      $('#oly-items').addClass('d-none');
      $('#ind-items').addClass('d-flex').removeClass('d-none');

    }
    if(filter_select_offer  == 'air'){
      $('#air-items').addClass('d-flex').removeClass('d-none');
      $('#oly-items').addClass('d-none');
      $('#ind-items').addClass('d-none');
    }

    if(filter_select_offer  == 'oly'){
      $('#air-items').addClass('d-none');
      $('#oly-items').addClass('d-flex').removeClass('d-none');
      $('#ind-items').addClass('d-none');
    }

  })




  $('#filter-attr').change(function(){

    var filter_attr = $(this).val();

    if(filter_attr  == 'ind'){
      $('#air-desc').addClass('d-none');
      $('#oly-desc').addClass('d-none');
      $('#ind-desc').addClass('d-flex').removeClass('d-none');

      $('#ind-attractions').css({'height': 'auto', 'visibility': 'visible'});
      $('#air-attractions').css({'height': '0', 'visibility': 'hidden'});
      $('#oly-attractions').css({'height': '0', 'visibility': 'hidden'});

    }
    if(filter_attr  == 'air'){
      $('#air-desc').addClass('d-flex').removeClass('d-none');
      $('#oly-desc').addClass('d-none');
      $('#ind-desc').addClass('d-none');

      $('#ind-attractions').css({'height': '0', 'visibility': 'hidden'});
      $('#air-attractions').css({'height': 'auto', 'visibility': 'visible'});
      $('#oly-attractions').css({'height': '0', 'visibility': 'hidden'});
    }

    if(filter_attr  == 'oly'){
      $('#air-desc').addClass('d-none');
      $('#oly-desc').addClass('d-flex').removeClass('d-none');
      $('#ind-desc').addClass('d-none');

      $('#ind-attractions').css({'height': '0', 'visibility': 'hidden'});
      $('#air-attractions').css({'height': '0', 'visibility': 'hidden'});
      $('#oly-attractions').css({'height': 'auto', 'visibility': 'visible'});
    }


  })


  $('#filter-restaurants').change(function(){

    var filter_restaurants = $(this).val();

    if(filter_restaurants  == 'ind'){

      $('#ind-restaurants').css({'height': 'auto', 'visibility': 'visible', 'opacity': 1});
      $('#air-restaurants').css({'height': '0', 'visibility': 'hidden', 'opacity': 0});
      $('#oly-restaurants').css({'height': '0', 'visibility': 'hidden', 'opacity': 0});

    }
    if(filter_restaurants  == 'air'){

      $('#ind-restaurants').css({'height': '0', 'visibility': 'hidden', 'opacity': 0});
      $('#air-restaurants').css({'height': 'auto', 'visibility': 'visible', 'opacity': 1});
      $('#oly-restaurants').css({'height': '0', 'visibility': 'hidden', 'opacity': 0});
    }

    if(filter_restaurants  == 'oly'){
      $('#ind-restaurants').css({'height': '0', 'visibility': 'hidden', 'opacity': 0});
      $('#air-restaurants').css({'height': '0', 'visibility': 'hidden', 'opacity': 0});
      $('#oly-restaurants').css({'height': 'auto', 'visibility': 'visible', 'opacity': 1});
    }


  })






  $('#filter-meeting').change(function(){

    var filter_meeting = $(this).val();

    if(filter_meeting  == 'ind'){
      $('#air-text-rooms').addClass('d-none');
      $('#oly-text-rooms').addClass('d-none');
      $('#ind-text-rooms').addClass('d-flex').removeClass('d-none');

      $('#ind-rooms').css({'height': 'auto', 'visibility': 'visible'});
      $('#air-rooms').css({'height': '0', 'visibility': 'hidden'});
      $('#oly-rooms').css({'height': '0', 'visibility': 'hidden'});

    }
    if(filter_meeting  == 'air'){
      $('#air-text-rooms').addClass('d-flex').removeClass('d-none');
      $('#oly-text-rooms').addClass('d-none');
      $('#ind-text-rooms').addClass('d-none');

      $('#ind-rooms').css({'height': '0', 'visibility': 'hidden'});
      $('#air-rooms').css({'height': 'auto', 'visibility': 'visible'});
      $('#oly-rooms').css({'height': '0', 'visibility': 'hidden'});
    }

    if(filter_meeting  == 'oly'){
      $('#air-text-rooms').addClass('d-none');
      $('#oly-text-rooms').css({'height': 'auto', 'visibility': 'visible'});
      $('#ind-text-rooms').addClass('d-none');

      $('#ind-rooms').css({'height': '0', 'visibility': 'hidden'});
      $('#air-rooms').css({'height': '0', 'visibility': 'hidden'});
      $('#oly-rooms').css({'height': 'auto', 'visibility': 'visible'});
    }

  })



  $('#filter-weddings').change(function(){

    var filter_weddings = $(this).val();

    if(filter_weddings  == 'ind'){

      $('#ind-wedding').css({'height': 'auto', 'visibility': 'visible'});
      $('#air-wedding').css({'height': '0', 'visibility': 'hidden'});
      $('#oly-wedding').css({'height': '0', 'visibility': 'hidden'});

    }
    if(filter_weddings  == 'air'){

      $('#ind-wedding').css({'height': '0', 'visibility': 'hidden'});
      $('#air-wedding').css({'height': 'auto', 'visibility': 'visible'});
      $('#oly-wedding').css({'height': '0', 'visibility': 'hidden'});
    }

    if(filter_weddings  == 'oly'){

      $('#ind-wedding').css({'height': '0', 'visibility': 'hidden'});
      $('#air-wedding').css({'height': '0', 'visibility': 'hidden'});
      $('#oly-wedding').css({'height': 'auto', 'visibility': 'visible'});
    }

  })



  $('#btn-siha').click(function(){
   
    $('#siha').css({'height': 'auto', 'visibility': 'visible'});
    $('#penh').css({'height': '0', 'visibility': 'hidden'});

    $(this).addClass('active');
    $('#btn-penh').removeClass('active');


  })


  $('#btn-penh').click(function(){
   
    $('#siha').css({'height': '0', 'visibility': 'hidden'});
    $('#penh').css({'height': 'auto', 'visibility': 'visible'});

    $(this).addClass('active');
    $('#btn-siha').removeClass('active');

  })


  $('#our-offers').change(function(){

    var filter_offer = $(this).val();

    if(filter_offer  == 'ind'){
      $('#offer-air').css({'height': '0', 'visibility': 'hidden'});
      $('#offer-oly').css({'height': '0', 'visibility': 'hidden'});
      $('#offer-ind').css({'height': 'auto', 'visibility': 'visible'});

    }
    if(filter_offer  == 'air'){
      $('#offer-air').css({'height': 'auto', 'visibility': 'visible'});
      $('#offer-oly').css({'height': '0', 'visibility': 'hidden'});
      $('#offer-ind').css({'height': '0', 'visibility': 'hidden'});
    }
    if(filter_offer  == 'oly'){
      $('#offer-air').css({'height': '0', 'visibility': 'hidden'});
      $('#offer-oly').css({'height': 'auto', 'visibility': 'visible'});
      $('#offer-ind').css({'height': '0', 'visibility': 'hidden'});
    }


  })




  $("<span class='navabr_clickd'></span>").insertAfter(".navbar-nav li.menu-item-has-children > a");
  $('.navbar-nav li .navabr_clickd').click(function (e) {
    e.preventDefault();
    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.removeClass('toggled');
      $("body,html").removeClass("hidd_pprt");
    } else {
      $this.parent().parent().find('.navabr_clickd_submenu').removeClass('show');
      $this.parent().parent().find('.toggled').removeClass('toggled');
      $this.next().toggleClass('show');
      $this.toggleClass('toggled');
      $("body,html").toggleClass("hidd_pprt");
    }
  });

  ////nav animation
  $(".navbar_submenu_prant_close").click(function () {
    $(".navabr_clickd_submenu").removeClass("show");
    $("body,html").removeClass("hidd_pprt");
    $(".navabr_clickd").removeClass("toggled");
  });

  if ($('.navabr_clickd_submenu').length) {
    let cr_el = $(".child_parent_spn"),
      cr_el_tip = $(".navbar_submenu_prant_top_row .vbtnn"),
      cr_el_logo = $(".navbar_submenu_prant_logo");

    gsap.set(cr_el, {
      x: "-100",
      opacity: 0,
    });
    gsap.set(cr_el_tip, {
      y: "100",
      opacity: 0,
    });
    gsap.set(cr_el_logo, {
      opacity: 0,
    });

    $(".navabr_clickd").click(function () {
      gsap.set(cr_el, {
        x: "-100",
        opacity: 0,
      });
      gsap.set(cr_el_tip, {
        y: "100",
        opacity: 0,
      });
      gsap.set(cr_el_logo, {
        opacity: 0,
      });
      //OPEN
      if ($(this).hasClass("toggled")) {
        gsap.to(cr_el, 1, {
          stagger: 0.2,
          x: "0",
          opacity: 1,
          delay: 0.55,
          //  ease: Expo.easeInOut
        });
        gsap.to(cr_el_tip, 1, {
          stagger: 0.1,
          y: "0",
          opacity: 1,
          delay: 0.55,
        });
        gsap.to(cr_el_logo, 0.7, {
          opacity: 1,
          delay: 1,
        });
      }
      //CLOSE
      else {
        gsap.to(cr_el, 0.3, {
          stagger: 0.1,
          x: "-100",
          opacity: 0,
          delay: 0,
          //  ease: Expo.easeInOut
        });
        gsap.to(cr_el_tip, 0.3, {
          stagger: 0.1,
          y: "100",
          opacity: 0,
          delay: 0,
        });
        gsap.to(cr_el_logo, 0.3, {
          opacity: 0,
        });
      }
    });
  }
  ///nav animation end--


  $('.homer_page_banner_slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
  });

  if ($('.custom_datepicker_input').length) {

    $(".custom_datepicker_input").datepicker({
      autoClose: true,
      viewStart: 2,
      format: 'dd mm yyyy',
    });

  }

  $('.our_offerss_Sec_col_left_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.our_offerss_Sec_col_right_slider'
  });
  $('.our_offerss_Sec_col_right_slider').slick({
    slidesToShow: 15,
    slidesToScroll: 1,
    asNavFor: '.our_offerss_Sec_col_left_slider',
    dots: false,
    arrows: false,
    vertical: true,
    infinite: false,
    adaptiveHeight: true,
    focusOnSelect: true
  });
  equal_height();
  $('.planng-event-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.planng-event-slider-nav'
  });
  $('.planng-event-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.planng-event-slider-for',
    dots: false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.slider_giftdf_hotel_dfns_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    centerPadding: '300px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '60px',
        }
      },
    ]
  });

  // ===== Scroll to Top ====
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() >= 400) {        // If page is scrolled more than 50px
      jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  jQuery('#return-to-top').click(function () {      // When arrow is clicked
    jQuery('body,html').animate({
      scrollTop: 0                       // Scroll to top of body
    }, 500);
  });
  // back to top btn end

  // Add smooth scrolling to all links
  jQuery(".top-to-back").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      jQuery('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
  // top to back end

  // $('.hotel_dfntn_sec_btmm_slider').slick({
  //   speed: 5000,
  //   autoplay: true,
  //   autoplaySpeed: 0,
  //   cssEase: 'linear',
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: true,
  //   swipeToSlide: true,
  //   centerMode: true,
  //   centerPadding: '300px',
  //   focusOnSelect: true,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         centerPadding: '180px',
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         centerPadding: '120px',
  //       }
  //     },
  //     {
  //       breakpoint: 370,
  //       settings: {
  //         centerPadding: '50px',
  //       }
  //     },
  //   ]
  // });

  $('.about_aprtmnt_dtls_sec_slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.about_aprtmnt_dtls_sec_slider_nav ',
  });
  $('.about_aprtmnt_dtls_sec_slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.about_aprtmnt_dtls_sec_slider_for',
    dots: false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  if ($(".galry_slidr_mobile").length){
    $(".galry_slidr_mobile").each(function(){
        let gl = $(this);
        gl.slick({
          infinite: true,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: gl.parents(".galry_slidr_mobile_wrappr").find('.galry_slidr_mobile_wrappr_arrow .prev-sl'),
          nextArrow: gl.parents(".galry_slidr_mobile_wrappr").find('.galry_slidr_mobile_wrappr_arrow .next-sl'),
        });
    });

  }



  

  $('.homer_page_banner_slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  });

  $(".main_head_btm .navbar-toggler").click(function () {
    $("body,html").toggleClass("show_hd_bdy");
  });
  $(".mobile-menu-close.mobileMenuClose").click(function () {
    $(".navbar-collapse").removeClass("show");
    $("body,html").removeClass("show_hd_bdy");
  });

  $(".our_offerss_Sec_col_right").each(function () {
  let abc = $(this);
  let el1 = ".our_offerss_Sec_col_right_wrppr.new", el2 = ".btm_offers_content", el3 = ".top_offers_content";
  console.log(abc.find(el1).length);

  if (abc.find(el1).length >= 2) {
    //on first load
    abc.find(el2).slideUp(0);
    abc.find(el1).eq(0).addClass('active');
    abc.find(el1).eq(0).find(el2).slideDown(0);

    abc.find(el3).on("click touch", function () {
      abc.find(el1).not($(this).parents(el1)).removeClass("active");
      abc.find(el2).not($(this).parents(el1).find(el2)).stop().slideUp(450);

      if ($(this).parents(el1).hasClass("active")) {
        $(this).parents(el1).removeClass("active");
        $(this).parents(el1).find(el2).stop().slideUp(450);
      }
      else {
        $(this).parents(el1).addClass("active");
        $(this).parents(el1).find(el2).stop().slideDown(450);
      }
    });
    // abc.find(el1).on("click touch", function () {
    //   abc.find(el1).not($(this)).removeClass("active");
    //   abc.find(el2).not($(this).find(el2)).stop().slideUp(450);

    //   if ($(this).hasClass("active")) {
    //     $(this).removeClass("active");
    //     $(this).find(el2).stop().slideUp(450);
    //   }
    //   else {
    //     $(this).addClass("active");
    //     $(this).find(el2).stop().slideDown(450);
    //   }
    // });
  }
});



  var images = document.querySelectorAll('.paralax-img img');
  new simpleParallax(images, {
    scale: 1.2,
    delay: 1.6,
    transition: 'cubic-bezier(0,0,0,6)'
  });

  header_sticky();

  if ($(".splitAnim").length) {
    $(".splitAnim").each(function () {
      let $split_text = $(this);
      $split_text.html($split_text.html().replace("&amp;", "&").replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
      gsap.set($split_text.children(), {
        display: "inline-block",
        opacity: 0,
        y: 50,
        transformOrigin: "50% 50%",
      });
    });
  }



function hr_scroll() {
  if ($(".hotel_dfntn_sec_btmm_slider").length) {
    const sections_el = gsap.utils.toArray(".hotel_dfntn_sec_btmm_slider");
    sections_el.forEach((_now_el) => {
      let sections = gsap.utils.toArray($(_now_el).find(".hotel_dfntn_sec_btmm_slider_panel"));
      let maxWidth = 0;
      const getMaxWidth = () => {
        sections.forEach((section) => {
          maxWidth += section.offsetWidth;
        });
      };
      getMaxWidth();

      gsap.to(sections, {
        x: () => -Math.abs(parseInt(window.innerWidth - maxWidth)),
        ease: "none",
        scrollTrigger: {
          trigger: _now_el,
          pin: true,
          scrub: true,
          scrub: 1,
          start: "top +=150px top",
          end: () => `+=${maxWidth}`,
          //  invalidateOnRefresh: true,
        }
      });

      sections.forEach((sct, i) => {
        ScrollTrigger.create({
          trigger: sct,
          start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
          end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
          toggleClass: { targets: sct, className: "active" },
        });
      });
    });
  }
}
hr_scroll();


});

$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.galry_slidr_mobile').slick('setPosition');
});



function header_sticky() {
  $(".main_head").sticky({ topSpacing: 0 });
}

function equal_height() {
  $('.what_happening_dara_slider .slick-slide').jQueryEqualHeight('.what_happening_dara_slider_outr');
}
$(window).on('load', function (event) {
  equal_height();
  header_sticky();
});
$(window).resize(function (event) {
  equal_height();
  header_sticky();
});


//pageloader
jQuery(".bg,img").imagesLoaded({
  background: true,
})
  .progress(function (instance, image) {
    //count load percent
    // k++;
    // percent = (k / n * 100);
    // percent = percent.toFixed(2);
    //document.querySelector(".loader_progress").innerHTML = percent + "%";
    gsap.set(".anim_logo", {
      scale: 0.9,
      opacity: 0,
    });

    let tl = new TimelineMax({ repeat: -1, repeatDelay: 1.5, });
    let cur_el = $("#motionPath").get(0);
    let length = cur_el.getTotalLength();
    $("#motionPath").css({
      'stroke-dasharray': length + 1,
      'stroke-dashoffset': length + 1,
      'opacity': 1,
    });
    tl.to("#motionPath", 2.5, { strokeDashoffset: 0, opacity: 1, })
      .to("#motionPath", 0.3, { strokeWidth: 10, })
      .to("#motionPath", 0.3, { strokeWidth: 5, })
      .to("#motionPath", 0.3, { opacity: 0 });

  })
  .always(function () {
    window.scrollTo(0, 0);
    let tl_delay = 2;
    gsap.to(".anim_path", 0.3, {
      opacity: 0,
      delay: tl_delay,
    });
    gsap.to(".anim_logo", 0.4, {
      scale: 1,
      opacity: 1,
      delay: tl_delay,
      onComplete: function () {
        gsap.to(".preloader", 1, {
          delay: 0.2,
          opacity: 0,
        });

        //split animation
        if ($(".splitAnim").length) {
          inView('.splitAnim')
            .on('enter', function (el) {
              if (!el.classList.contains("sec_active")) {
                el.classList.add("sec_active");
                gsap.to($(el).children(), 0.25, {
                  stagger: 0.04,
                  y: 0,
                  opacity: 1,
                  delay: 0.8,
                });
              }
            })
        }

        //add class on visable viewport
        if ($(".inView").length) {
          inView('.inView')
            .on('enter', function (el) {
              if (!el.classList.contains("inView_active")) {
                el.classList.add("inView_active");
              }
            })
          // .on('exit', function (el) {
          //if (!el.classList.contains("inView_active")) {
          //  el.classList.remove("inView_active");
          //  }
          // });
        }

        if ($(".wow").length) {
          // wow animation
          var wow = new WOW(
            {
              boxClass: 'wow',      // animated element css class (default is wow)
              animateClass: 'animated', // animation css class (default is animated)
              offset: 0,          // distance to the element when triggering the animation (default is 0)
              mobile: true,       // trigger animations on mobile devices (default is true)
              live: true,       // act on asynchronously loaded content (default is true)
              callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
              },
              scrollContainer: null,    // optional scroll container selector, otherwise use window,
              resetAnimation: true,     // reset animation on end (default is true)
            }
          );
          wow.init();
        }
        setTimeout(function () {
          $(".preloader").remove();
        }, 800);
      }
    });
  });



    $(window).on('load resize orientationchange', function() {
        $('.what_happening_dara_slider').each(function(){
            var $carousel1 = $(this);
            if ($(window).width() > 1024) {
                if ($carousel1.hasClass('slick-initialized')) {
                    $carousel1.slick('unslick');
                }
            }
            else{
                if (!$carousel1.hasClass('slick-initialized')) {
                    $carousel1.slick({
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        adaptiveHeight: true,
                        prevArrow: $('.slider_hapnn_slide_aroow .prev-sl'),
                        nextArrow: $('.slider_hapnn_slide_aroow .next-sl'),
                        responsive: [
                          {
                            breakpoint: 768,
                            settings: {
                              slidesToShow: 1,
                            }
                          },
                        ]
                    });
                }
            }
        });


        $('.dara_moment_insta_acnt_ul').each(function(){
            var $carousel2 = $(this);
            if ($(window).width() > 767) {
                if ($carousel2.hasClass('slick-initialized')) {
                    $carousel2.slick('unslick');
                }
            }
            else{
                if (!$carousel2.hasClass('slick-initialized')) {
                    $carousel2.slick({
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        adaptiveHeight: true,
                        prevArrow: $('.dara_moment_insta_acnt_arrow .prev-sl'),
                        nextArrow: $('.dara_moment_insta_acnt_arrow .next-sl'),
                    });
                }
            }
        });


        $('.careers_defnnts_slider_ptr_sliders').each(function(){
            var $carousel3 = $(this);
            if ($(window).width() > 1024) {
                if ($carousel3.hasClass('slick-initialized')) {
                    $carousel3.slick('unslick');
                }
            }
            else{
                if (!$carousel3.hasClass('slick-initialized')) {
                    $carousel3.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        adaptiveHeight: true,
                        prevArrow: $('.careers_defnnts_slider_ptr_arrow .prev-sl'),
                        nextArrow: $('.careers_defnnts_slider_ptr_arrow .next-sl'),
                    });
                }
            }
        });



   });     