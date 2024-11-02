(function ($) {
    'use strict';

    function st_service_list_slider_acency_element($wrapper) {
        let wrapper_list = $('.st-list-service', $wrapper);
        let imageCarousel = $('.st-list-service .swiper-container', $wrapper);
        let pagination = wrapper_list.attr('data-pagination');
        let navigation = wrapper_list.attr('data-navigation');
        let auto_play = wrapper_list.attr('data-auto-play');
        let delay = wrapper_list.attr('data-delay');
        let loop = wrapper_list.attr('data-loop');
        let responsive = wrapper_list.attr('data-responsive');
        let option = {
            observer: true,
            observeParents: true,
            speed: 400,
            spaceBetween: 20,
            preloadImages: true,
            // effect: wrapper_list.attr('data-effect'),
        }
        if (typeof responsive !== 'undefined') {
            option.breakpoints = JSON.parse(responsive);
        } else {
            option.breakpoints = {
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1366: {
                    slidesPerView: wrapper_list.attr('data-slides-per-view'),
                    spaceBetween: 24,
                },
            };
        }
        if (pagination == 'on') {
            option.pagination = {
                el: '.swiper-pagination',
                clickable: true,
            };
        }
        if (navigation == 'on') {
            option.navigation = {
                nextEl: '.st-button-next',
                prevEl: '.st-button-prev',
            };
        }
        if (auto_play == 'on') {
            if (delay.length > 0) {
                option.autoplay = {
                    delay: delay,
                };
            } else {
                option.autoplay = {
                    delay: 2000,
                };
            }

        }
        if (loop == 'true') {
            option.loop = true;
        }

        const Swiper = elementorFrontend.utils.swiper;
        if (imageCarousel.length) {
            const swipers = new Swiper(imageCarousel, option);
        }


    }

    function st_sliders_agency_element($wrapper) {
        let wrapper_list = $('.st-sliders', $wrapper);
        let imageCarousel = $('.st-sliders .swiper-container', $wrapper);
        let pagination = wrapper_list.attr('data-pagination');
        let navigation = wrapper_list.attr('data-navigation');
        let auto_play = wrapper_list.attr('data-auto-play');
        let delay = wrapper_list.attr('data-delay');
        let loop = wrapper_list.attr('data-loop');
        let style_slider = wrapper_list.attr('data-style-slider') || 'style-1';
        let center_slider = wrapper_list.attr('data-center-slider');
        let spaceBetween = wrapper_list.attr('data-space-between') || 20;

        let responsive = wrapper_list.attr('data-responsive');

        let option = {
            observer: true,
            observeParents: true,
            speed: 400,
            spaceBetween: parseInt(spaceBetween),
            preloadImages: true,
            centeredSlides: !!(center_slider == 'on'),
            centeredSlidesBounds: true,
            // effect: wrapper_list.attr('data-effect'),

        }

        if (center_slider == 'on') {

            option.breakpoints = {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                },
            };
        } else {

            if (typeof responsive !== 'undefined') {
                option.breakpoints = JSON.parse(responsive);
            } else {
                option.breakpoints = {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: wrapper_list.attr('data-slides-per-view'),
                        spaceBetween: 30,
                    },
                };
            }
        }

        if (pagination == 'on') {
            option.pagination = {
                el: '.swiper-pagination',
                clickable: true,
            };
        }
        if (navigation == 'on') {
            option.navigation = {
                nextEl: '.st-button-next',
                prevEl: '.st-button-prev',
            };
        } else {
            option.navigation = false;
        }
        if (auto_play == 'on') {
            if (delay.length > 0) {
                option.autoplay = {
                    delay: delay,
                };
            } else {
                option.autoplay = {
                    delay: 2000,
                };
            }

        }
        if (loop == 'true') {
            option.loop = true;
        }

        const Swiper = elementorFrontend.utils.swiper;
        const swipers = new Swiper(imageCarousel, option);
        console.log('option', option);

    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/st_team.default', function ($wrapper) {
            st_service_list_slider_acency_element($wrapper);
            $('.service-list-wrapper .swiper-wrapper .swiper-slide', $wrapper).matchHeight({
                remove: true
            });
            $('.service-list-wrapper .swiper-wrapper .swiper-slide', $wrapper).matchHeight();
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/st_list_service_room.default', function ($wrapper) {
            st_service_list_slider_acency_element($wrapper);
            $('.service-list-wrapper .swiper-wrapper .swiper-slide', $wrapper).matchHeight({
                remove: true
            });
            $('.service-list-wrapper .swiper-wrapper .swiper-slide', $wrapper).matchHeight();
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/st_slider_room.default', function ($wrapper) {
            st_sliders_agency_element($wrapper);
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/st_sliders.default', function ($wrapper) {
            st_sliders_agency_element($wrapper);
        });
    });
    //subcrible
    $(".traveler-form").each(function () {
        var id = $(this).attr('data-validation-id');
        $('#form-subscribe-' + id).submit(function (event) {
            event.preventDefault();
            var email = $('#EMAIL-' + id).val();
            var name = $('#NAME-' + id).val();
            var api_key = $('.api_key').val();
            var id_list_mailchimp = $('.id_list_mailchimp').val();
            var status_email = $('.status_email').val();
            $.ajax({
                type: "post",
                dataType: "json",
                url: cpm_object.ajax_url,
                data: {
                    action: "traveler_newsletter",
                    email: email,
                    api_key: api_key,
                    name: name,
                    id_list_mailchimp: id_list_mailchimp,
                    status_email: status_email,
                },
                beforeSend: function () {},
                success: function (response) {
                    alert(response.message);
                    $('#EMAIL-' + id).val('');
                    $('#NAME-' + id).val('');
                },
                error: function (jqXHR, textStatus, errorThrown) {

                    console.log('The following error occured: ' + textStatus, errorThrown);
                }
            })

        });
    });

})
(jQuery);