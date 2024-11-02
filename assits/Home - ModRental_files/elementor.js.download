;
(function ($) {
    'use strict';
    //Slider item service
    function st_service_list_slider_element($wrapper) {
        let wrapper_list = $('.st-list-service', $wrapper);
        let imageCarousel = $('.st-list-service .swiper-container', $wrapper);
        let pagination = wrapper_list.attr('data-pagination');
        let navigation = wrapper_list.attr('data-navigation');
        let auto_play = wrapper_list.attr('data-auto-play');
        let delay = wrapper_list.attr('data-delay');
        let loop = wrapper_list.attr('data-loop');
        let option = {
            observer: true,
            observeParents: true,
            speed: 400,
            spaceBetween: 20,
            preloadImages: true,
            // effect: wrapper_list.attr('data-effect'),
        }
        option.breakpoints = {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1366: {
                slidesPerView: wrapper_list.attr('data-slides-per-view'),
                spaceBetween: 20,
            },
        };
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

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/st_list_service.default', function ($wrapper) {
            st_service_list_slider_element($wrapper);
        });
    });
    //End Slider item service

    //Slider Image
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/st_sliders.default', function ($wrapper) {
            if (!$('.st-sliders').hasClass('st-list-slider')) {
                st_sliders_element($wrapper);
            }
        });

        elementorFrontend.hooks.addAction('frontend/element_ready/st_destination.default', function ($wrapper) {
            if ($('.st-list-destination.st-sliders').length) {
                st_sliders_element_destination($wrapper);
            }
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/st_blog_list.default', function ($wrapper) {
            st_blogs_element($wrapper);
        });
    });

    function st_blogs_element($wrapper) {
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
        let option = {
            observer: true,
            observeParents: true,
            speed: 400,
            spaceBetween: spaceBetween,
            preloadImages: true,
            centeredSlides: !!(center_slider == 'on'),
            centeredSlidesBounds: true,
            // effect: wrapper_list.attr('data-effect'),

        }
        if (style_slider === 'style-2') {
            option.on = {
                slideChange: function () {
                    $(".count-item-index", $wrapper).text(parseInt(this.realIndex + 1) + ' / ' + (this.loopedSlides));
                },
                init: function () {
                    $(".count-item-index", $wrapper).text(parseInt(this.realIndex + 1) + ' / ' + (this.loopedSlides));
                }
            };
        }
        option.breakpoints = {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1366: {
                slidesPerView: wrapper_list.attr('data-slides-per-view'),
                spaceBetween: 20,
            },
        };
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
    }

    function st_sliders_element($wrapper) {
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
            spaceBetween: spaceBetween,
            preloadImages: true,
            centeredSlides: !!(center_slider == 'on'),
            centeredSlidesBounds: true,
            effect: wrapper_list.attr('data-effect'),

        }

        if (style_slider === 'style-2') {

            option.on = {

                slideChange: function () {
                    if (window.matchMedia('(max-width: 768px)').matches) {
                        var total_slider = this.slides.length - 2;
                    } else {
                        var total_slider = this.loopedSlides;
                    }
                    $(".count-item-index", $wrapper).text(parseInt(this.realIndex + 1) + ' / ' + (total_slider));
                },
                init: function () {
                    if (window.matchMedia('(max-width: 768px)').matches) {
                        var total_slider = this.slides.length - 2;
                    } else {
                        var total_slider = this.loopedSlides;
                    }
                    $(".count-item-index", $wrapper).text(parseInt(this.realIndex + 1) + ' / ' + (total_slider));
                }
            };
        }
        if (style_slider === 'style-3') {
            if (typeof responsive !== 'undefined') {
                option.breakpoints = JSON.parse(responsive);
            } else {

                option.breakpoints = {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1366: {
                        slidesPerView: wrapper_list.attr('data-slides-per-view'),
                        spaceBetween: 40,
                    },
                };
            }
        } else {
            if (center_slider == 'on') {
                option.breakpoints = {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                    },
                };
            } else {
                if (typeof responsive !== 'undefined') {
                    option.breakpoints = JSON.parse(responsive);
                } else {
                    option.breakpoints = {
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
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
                            spaceBetween: 20,
                        },
                    };
                }
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

    }

    function st_sliders_element_destination($wrapper) {
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
        let option = {
            observer: true,
            observeParents: true,
            speed: 400,
            spaceBetween: spaceBetween,
            preloadImages: true,
            centeredSlides: !!(center_slider == 'on'),
            centeredSlidesBounds: true,
            // effect: wrapper_list.attr('data-effect'),
            slidesPerView: 2,
            spaceBetween: 20

        }
        if (style_slider === 'style-2') {
            option.on = {
                slideChange: function () {
                    $(".count-item-index", $wrapper).text(parseInt(this.realIndex + 1) + ' / ' + (this.loopedSlides));
                },
                init: function () {
                    $(".count-item-index", $wrapper).text(parseInt(this.realIndex + 1) + ' / ' + (this.loopedSlides));
                }
            };
        }
        if (center_slider == 'on') {
            option.breakpoints = {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 12
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                },
            };
        } else {
            option.breakpoints = {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                },
                1366: {
                    slidesPerView: wrapper_list.attr('data-slides-per-view'),
                    spaceBetween: 40,
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
        if (imageCarousel.length) {
            const swipers = new Swiper(imageCarousel, option);
        }

    }
    //End Slider Image

    //Slider Testimonial
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/st_testimonial.default', function ($wrapper) {
            st_testimonial_element($wrapper);
        });
    });

    function st_testimonial_element($wrapper) {
        let wrapper_list = $('.st-testimonial', $wrapper);
        let imageCarousel = $('.st-testimonial .swiper-container', $wrapper);
        let pagination = wrapper_list.attr('data-pagination');
        let navigation = wrapper_list.attr('data-navigation');
        let auto_play = wrapper_list.attr('data-auto-play');
        let delay = wrapper_list.attr('data-delay');
        let loop = wrapper_list.attr('data-loop');
        let responsive = wrapper_list.attr('data-responsive');
        let option = {
            speed: 400,
            spaceBetween: 20,
            preloadImages: true,
            observer: true,
            observeParents: true,
            // effect: wrapper_list.attr('data-effect'),
        }
        if (typeof responsive !== 'undefined') {
            option.breakpoints = JSON.parse(responsive);
        } else {
            option.breakpoints = {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: wrapper_list.attr('data-slides-per-view'),
                    spaceBetween: 20,
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
        $('.st-testimonial .swiper-wrapper .swiper-slide', $wrapper).matchHeight({
            remove: true
        });
        $('.st-testimonial .swiper-wrapper .swiper-slide', $wrapper).matchHeight();
        const swipers = new Swiper(imageCarousel, option);
        $('.st-testimonial .swiper-wrapper .swiper-slide', $wrapper).matchHeight();
    }

    //Ajax list of service
    function URLToArrayNew() {
        var res = {};

        $('.toolbar .layout span').each(function () {
            if ($(this).hasClass('active')) {
                res['layout'] = $(this).data('value');
            }
        });

        res['orderby'] = '';

        var sPageURL = window.location.search.substring(1);
        if (sPageURL != '') {
            var sURLVariables = sPageURL.split('&');
            if (sURLVariables.length) {
                for (var i = 0; i < sURLVariables.length; i++) {
                    var sParameterName = sURLVariables[i].split('=');
                    if (sParameterName.length) {
                        let val = decodeURIComponent(sParameterName[1]);
                        res[decodeURIComponent(sParameterName[0])] = val == 'undefined' ? '' : val;
                    }
                }
            }
        }
        return res;
    }
    var dataAjax = URLToArrayNew();
    var requestRunning = false;
    var xhr;
    $(document).on('click', '.panigation-list-new-style a.page-numbers:not(.current, .dots)', function (e) {
        e.preventDefault();
        var t = $(this);
        var parent_panigation = t.closest('.panigation-list-new-style');

        var pagUrl = t.attr('href');
        var action_service = parent_panigation.data('action_service');
        let posts_per_page = parent_panigation.data('posts_per_page');
        let item_row = parent_panigation.data('st_item_row');
        let item_row_tablet = parent_panigation.data('st_item_row_tablet');
        let st_item_row_tablet_extra = parent_panigation.data('st_item_row_tablet_extra');
        if (typeof parent_panigation.data('st_location_id') !== 'undefined') {
            var location_id = parent_panigation.data('st_location_id');
        } else {
            var location_id = '';
        }
        let order = parent_panigation.data('order');
        let orderby = parent_panigation.data('orderby');
        let stt_service = parent_panigation.data('stt_service');
        pageNum = 1;

        if (typeof pagUrl !== typeof undefined && pagUrl !== false) {
            var arr = pagUrl.split('/');
            var pageNum = arr[arr.indexOf('page') + 1];
            if (isNaN(pageNum)) {
                pageNum = 1;
            }

            ajaxFilterHandler(action_service, posts_per_page, pageNum, order, orderby, item_row, item_row_tablet, st_item_row_tablet_extra, stt_service, t, location_id);
            if ($('.modern-search-result-popup').length) {
                $('.col-left-map').animate({
                    scrollTop: 0
                }, 'slow');
            }

            if ($('#modern-result-string').length) {
                window.scrollTo({
                    top: $('#modern-result-string').offset().top - 20,
                    behavior: 'smooth'
                });
            }
            return false;
        } else {
            return false;
        }
    });

    function ajaxFilterHandler(action_service = '', posts_per_page = '', pageNum = 1, order = '', orderby = '', item_row = 4, item_row_tablet = 2, st_item_row_tablet_extra = 3, stt_service = '', t, location_id = '') {
        if (requestRunning) {
            xhr.abort();
        }
        $('.filter-loading').show();
        //Check layout search rental acency in library
        if ($('.st_agency_list_service').length > 0) {
            dataAjax['agency'] = 'agency';
        }
        //End Check layout search rental acency in library
        dataAjax['format'] = 'normal';
        dataAjax['version_layout'] = '';
        dataAjax['st_order'] = order;
        dataAjax['st_orderby'] = orderby;
        dataAjax['st_item_row'] = item_row;
        dataAjax['st_item_row_tablet'] = item_row_tablet;
        dataAjax['location_id'] = location_id;
        dataAjax['st_item_row_tablet_extra'] = st_item_row_tablet_extra;
        dataAjax['page'] = pageNum;
        dataAjax['action'] = action_service;
		dataAjax['is_search_page'] = 1;
        if (posts_per_page != '') {
            dataAjax['posts_per_page'] = posts_per_page;
        }

        dataAjax['_s'] = st_params._s;
        if (typeof dataAjax['page'] == 'undefined') {
            dataAjax['page'] = 1;
        }

        var divResult = t.closest('.stt-tab-list-ofservice').find('.modern-search-result');
        var divResultString = $('.modern-result-string');
        var divPagination = t.closest('#nav-list-of_service' + stt_service).find('.moderm-pagination');
        dataAjax['layout'] = 'grid';
        if (t.closest('.st_list_service_room').find('.panigation-list-new-style').length > 0) {
            var divResult = t.closest('.st_list_service_room');
            var divPagination = t.closest('.st_list_service_room').find('.panigation-list-new-style');
            dataAjax['layout'] = 'list';
        }
		if (t.closest('.st_list_service_room').find('.panigation-list-new-style').data('layout') == 'grid') {
			dataAjax['layout'] = 'grid';
		}
        divResult.addClass('loading');
        $('.map-content-loading').fadeIn();
        // console.log(divResult);
        let wrapper = $('.search-result-page');
        dataAjax['version'] = 'elementorv2';
        xhr = $.ajax({
            url: st_params.ajax_url,
            dataType: 'json',
            type: 'get',
            data: dataAjax,
            success: function (doc) {
                if (typeof doc.pag === 'undefined') {
                    divResult.html(doc.content);
                } else {
                    divResult.html(doc.content);

                    divResultString.each(function () {
                        $(this).html(doc.count);
                    });
                    //console.log(doc.content);
                    divPagination.each(function () {
                        $(this).html(doc.pag);
                    });
                }

            },
            complete: function () {
                divResult.removeClass('loading');
                $('.map-content-loading').fadeOut();

                var time = 0;
                divResult.find('img').one("load", function () {
                    $(this).addClass('loaded');
                    if (divResult.find('img.loaded').length === divResult.find('img').length) {
                        if ($('.has-matchHeight').length) {
                            $('.has-matchHeight').matchHeight({
                                remove: true
                            });
                            $('.has-matchHeight').matchHeight();
                        }
                    }
                });
                requestRunning = false;
            },
        });
        requestRunning = true;
    }
    $(".login").on('click', function () {
        $("#st-main-menu").removeClass("open");
    });

})
    (jQuery);