;
(function ($) {
    "use strict";
    //Search form
    let SearchForm = {
        $body: $('body'),
        isValidated: {},
        init: function () {
            let base = this;
            var advFacilities = [];
            base._dropdownselect();
            base._destinationSelect();
            base._destinationSelectCarTransfer();
            base._scrollFormSearch();
            base._dropdownselectDate();
            base._addNextPreInput();
            base._rangeSliderPrice();
            base._chooseTaxonomy(advFacilities);
            base._chooseTaxonomyChecked(advFacilities);
            base._initSearchLocation();
            base._initSearchLocationCarTransfer();
        },

        _initSearchLocation() {
            var base = this;
            $(".st-banner-search-form.style_2 .tab-pane").each(function (index) {
                var input = $(this).find('[name="location_name"]');
                var timer = null;
                input.on('keydown', function () {
                    clearTimeout(timer);
                    timer = setTimeout(doStuff, 200)
                });
            });


            function doStuff() {
                let parent = input.closest('.destination-search'),
                    ulEl = $('.dropdown-menu ul', parent),
                    loader = $('.dropdown-menu .loader-wrapper', parent);

                loader.show();
                $.post(st_params.ajax_url, {
                    action: 'st_get_list_location',
                    _s: input.val(),
                    post_type: input.data('post-type')
                }, function (respon) {
                    if (typeof respon === 'object') {
                        ulEl.find('.item').remove();
                        if (respon.options !== '') {
                            $(respon.options).insertAfter($('.location-heading', ulEl));
                            $('.location-heading', ulEl).hide();
                            ulEl.removeClass('no-data');
                        } else {
                            $('.location-heading', ulEl).text(input.data('text-no')).show();
                            ulEl.addClass('no-data');
                        }
                    } else {
                        console.log('Can not get data');
                    }
                    $('#dropdown-destination').dropdown('show');
                    base._destinationSelect();
                    loader.hide();
                }, 'json');
            }
        },

        _initSearchLocationCarTransfer() {
            var base = this;
            var input_to = $('.st-banner-search-form.style_2 [name="location_name_to"]');
            var timer = null;
            input_to.on('keydown', function () {
                clearTimeout(timer);
                timer = setTimeout(doStuff, 200)
            });

            function doStuff() {
                let parent = input.closest('.destination-search'),
                    ulEl = $('.dropdown-menu ul', parent),
                    loader = $('.dropdown-menu .loader-wrapper', parent);

                loader.show();
                $.post(st_params.ajax_url, {
                    action: 'st_get_list_location',
                    _s: input.val(),
                    post_type: input.data('post-type')
                }, function (respon) {
                    if (typeof respon === 'object') {
                        ulEl.find('.item').remove();
                        if (respon.options !== '') {
                            $(respon.options).insertAfter($('.location-heading', ulEl));
                            $('.location-heading', ulEl).hide();
                            ulEl.removeClass('no-data');
                        } else {
                            $('.location-heading', ulEl).text(input.data('text-no')).show();
                            ulEl.addClass('no-data');
                        }
                    } else {
                        console.log('Can not get data');
                    }
                    $('#dropdown-destination-to').dropdown('show');
                    base._destinationSelectCarTransfer();
                    loader.hide();
                }, 'json');
            }
        },

        _chooseTaxonomyChecked: function (advFacilities) {
            $('.advance-item.facilities input[type="checkbox"]').each(function () {
                var t = $(this);
                if (t.is(':checked')) {
                    advFacilities.push(t.val());
                }
            });
        },
        _chooseTaxonomy: function (advFacilities) {
            $('.advance-item.facilities input[type="checkbox"]').on('change', function () {
                var t = $(this);
                if (t.is(':checked')) {
                    advFacilities.push(t.val());
                } else {
                    var index = advFacilities.indexOf(t.val());
                    if (index > -1) {
                        advFacilities.splice(index, 1);
                    }
                }
                t.closest('.facilities').find('.data_taxonomy').val(advFacilities.join(','));
            });
        },
        //pure JS
        scrollToBottom(id, name_item) {
            $(id)
                .on('click', function (event) {
                    console.log();
                    var target = $(id);
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 30
                        }, 300, function () {

                        });
                    }
                });
        },

        _scrollFormSearch: function () {
            $('.search-form-v2 .field-detination').each(function () {
                SearchForm.scrollToBottom(this, '.field-detination');
            });
            $('.search-form-v2 .form-date-search').each(function () {
                SearchForm.scrollToBottom(this, '.form-date-search');
            });
            $('.search-form-v2 .field-guest').each(function () {
                SearchForm.scrollToBottom(this, '.field-guest');
            });
        },

        _destinationSelect: function () {
            /*Destination selection*/

            $('.field-detination').each(function () {

                var t = $(this),
                    parent = $(this).closest('.border-right'),
                    dropdown_menu = $('.dropdown-menu', parent);
                if (parent.length < 1) {
                    parent = $(this).closest('.destination-search');
                    dropdown_menu = $('.dropdown-menu', parent);
                }



                $('li', dropdown_menu).on('click', function () {
                    console.log(this);
                    var target = $(this).closest('.dropdown-menu').attr('aria-labelledby');
                    var focus = parent.find('#' + target);

                    $('.destination', focus).text($(this).find('span').text());
                    $('input[name="location_name"]', focus).val($(this).find('span').text());
                    $('input.location_name', focus).val($(this).find('span').text());
                    $('input[name="location_id"]', focus).val($(this).data('value'));
                    $('input.location_id', focus).val($(this).data('value'));
                    t.dropdown('hide');
                });
            });
        },
        _destinationSelectCarTransfer: function () {
            /*Destination selection*/
            //From
            $('.field-detination-from').each(function () {

                var t = $(this),
                    parent = $(this).closest('.border-right'),
                    dropdown_menu = $('.dropdown-menu', parent);
                if (parent.length < 1) {
                    parent = $(this).closest('.destination-search');
                    dropdown_menu = $('.dropdown-menu', parent);
                }



                $('li', dropdown_menu).on('click', function () {
                    console.log(this);
                    var target = $(this).closest('.dropdown-menu').attr('aria-labelledby');
                    var focus = parent.find('#' + target);

                    $('.destination', focus).text($(this).find('span').text());
                    $('input[name="transfer_from_name"]', focus).val($(this).find('span').text());
                    $('input.transfer_from_name', focus).val($(this).find('span').text());
                    $('input[name="transfer_from"]', focus).val($(this).data('value'));
                    t.dropdown('hide');
                });
            });
            //To
            $('.field-detination-to').each(function () {

                var t = $(this),
                    parent = $(this).closest('.border-right'),
                    dropdown_menu = $('.dropdown-menu', parent);
                if (parent.length < 1) {
                    parent = $(this).closest('.destination-search');
                    dropdown_menu = $('.dropdown-menu', parent);
                }



                $('li', dropdown_menu).on('click', function () {
                    console.log(this);
                    var target = $(this).closest('.dropdown-menu').attr('aria-labelledby');
                    var focus = parent.find('#' + target);

                    $('.destination', focus).text($(this).find('span').text());
                    $('input[name="transfer_to_name"]', focus).val($(this).find('span').text());
                    $('input.transfer_to_name', focus).val($(this).find('span').text());
                    $('input[name="transfer_to"]', focus).val($(this).data('value'));
                    t.dropdown('hide');
                });
            });
        },
        _rangeSliderPrice: function () {
            function format_money($money) {

                $money = st_number_format($money, st_params.booking_currency_precision, st_params.decimal_separator, st_params.thousand_separator);
                var $symbol = st_params.currency_symbol;
                var $money_string = '';

                switch (st_params.currency_position) {
                    case "right":
                        $money_string = $money + $symbol;
                        break;
                    case "left_space":
                        $money_string = $symbol + " " + $money;
                        break;

                    case "right_space":
                        $money_string = $money + " " + $symbol;
                        break;
                    case "left":
                    default:
                        $money_string = $symbol + $money;
                        break;
                }

                return $money_string;
            }

            function st_number_format(number, decimals, dec_point, thousands_sep) {
                number = (number + '')
                    .replace(/[^0-9+\-Ee.]/g, '');
                var n = !isFinite(+number) ? 0 : +number,
                    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                    s = '',
                    toFixedFix = function (n, prec) {
                        var k = Math.pow(10, prec);
                        return '' + (Math.round(n * k) / k)
                            .toFixed(prec);
                    };
                // Fix for IE parseFloat(0.55).toFixed(0) = 0;
                s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
                    .split('.');
                if (s[0].length > 3) {
                    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
                }
                if ((s[1] || '')
                    .length < prec) {
                    s[1] = s[1] || '';
                    s[1] += new Array(prec - s[1].length + 1)
                        .join('0');
                }
                return s.join(dec);
            }
            $(".price_range").each(function () {
                var t = $(this);
                var min = $(this).data('min');
                var max = $(this).data('max');
                var step = $(this).data('step');
                var value = $(this).val();
                var from = value.split(';');
                var prefix_symbol = $(this).data('symbol');
                var to = from[1];
                from = from[0];
                $(this).ionRangeSlider({
                    min: min,
                    max: max,
                    type: 'double',
                    prefix: prefix_symbol,
                    prettify: false,
                    step: step,
                    onFinish: function (data) {
                        t.trigger('st_ranger_price_change');
                        set_price_range_val(data, $('input[name="price_range"]'));
                        format_price_price_ranger(data);
                    },
                    from: from,
                    to: to,
                    force_edges: true,
                });
            });
            var rangeContainer = $('.sidebar-item.range-slider');

            function format_price_price_ranger(data) {


                var min = rangeContainer.find('.price_range').data('min');
                var max = rangeContainer.find('.price_range').data('max');
                var convert_price_min = format_money(data.from);
                var convert_price_max = format_money(data.to);
                rangeContainer.find('.irs-from').text(convert_price_min);
                rangeContainer.find('.irs-to').text(convert_price_max);

            }

            function set_price_range_val(data, element) {
                var exchange = 1;
                var from = Math.round(parseInt(data.from) / exchange);
                var to = Math.round(parseInt(data.to) / exchange);
                var text = from + ";" + to;
                element.val(text);
            }
        },
        _addNextPreInput: function () {
            $('.st-number-wrapper').each(function () {
                var timeOut = 0;
                var t = $(this);
                var input = t.find('.st-input-number');
                input.before('<span class="prev"><svg width="18px" height="2px" viewBox="0 0 18 2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                    '    <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->\n' +
                    '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n' +
                    '        <g id="Tour_Detail_1" transform="translate(-1180.000000, -1085.000000)" stroke="#5E6D77" stroke-width="1.5">\n' +
                    '            <g id="check-avai" transform="translate(1034.000000, 867.000000)">\n' +
                    '                <g id="adults" transform="translate(0.000000, 184.000000)">\n' +
                    '                    <g id="ico_subtract" transform="translate(147.000000, 35.000000)">\n' +
                    '                        <path d="M0.5,0.038 L15.5,0.038" id="Shape"></path>\n' +
                    '                    </g>\n' +
                    '                </g>\n' +
                    '            </g>\n' +
                    '        </g>\n' +
                    '    </g>\n' +
                    '</svg></span>');
                input.after('<span class="next"><svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                    '    <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->\n' +
                    '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n' +
                    '        <g id="Tour_Detail_1" transform="translate(-1258.000000, -1077.000000)" stroke="#5E6D77" stroke-width="1.5">\n' +
                    '            <g id="check-avai" transform="translate(1034.000000, 867.000000)">\n' +
                    '                <g id="adults" transform="translate(0.000000, 184.000000)">\n' +
                    '                    <g id="ico_add" transform="translate(225.000000, 27.000000)">\n' +
                    '                        <path d="M0.5,8 L15.5,8" id="Shape"></path>\n' +
                    '                        <path d="M8,0.5 L8,15.5" id="Shape"></path>\n' +
                    '                    </g>\n' +
                    '                </g>\n' +
                    '            </g>\n' +
                    '        </g>\n' +
                    '    </g>\n' +
                    '</svg></span>');

                t.find('span').on("click", function () {
                    var $button = $(this);
                    var min = parseFloat( $button.closest('.st-number-wrapper').find('.st-input-number').attr('data-min') );
                    var max = parseFloat( $button.closest('.st-number-wrapper').find('.st-input-number').attr('data-max') );
					if ( $( 'body' ).hasClass( 'single-hotel_room' ) ) {
						numberButtonFuncRoom($button, min, max);
					} else {
						numberButtonFunc($button, min, max);
					}
                });
                t.find('span').on("touchstart", function (e) {
                    $(this).trigger('click');
                    e.preventDefault();
                    var $button = $(this);
                    timeOut = setInterval(function () {
                        // numberButtonFunc($button);
                    }, 150);
                }).on('mouseup mouseleave touchend', function () {
                    clearInterval(timeOut);
                });

                function numberButtonFunc($button, min = 0, max = 20) {
                    var oldValue = $button.parent().find("input").val();
                    if ($('.single-st_rental').length > 0) {
                        var container = $button.closest('.st-number-wrapper');
                    } else {
                        var container = $button.closest('.form-guest-search');
                    }

                    var total = 0;
                    $('input[type="text"]', container).each(function () {
                        total += parseInt($(this).val());
                    });
                    var newVal = oldValue;
                    if ($button.hasClass('next')) {
                        if (total < max) {
                            if (oldValue < max) {
                                newVal = parseFloat(oldValue) + 1;
                            } else {
                                newVal = max;
                            }
                        } else {
							let html = `<div class="alert alert-danger"> Max of people is ${total} people`;
							$( '#form-booking-inpage .message-wrapper-2' ).append( html ).fadeTo( 5000, 1, () => {
								$( '#form-booking-inpage .message-wrapper-2 .alert' ).remove();
							} );
						}
                    } else {
                        if (oldValue > min) {
                            newVal = parseFloat(oldValue) - 1;
                        } else {
                            newVal = min;
                        }
                    }
                    $button.parent().find("input").val(newVal);
                    $('input[name="' + $button.parent().find("input").attr('name') + '"]', '.search-form').trigger('change');
                    $('input[name="' + $button.parent().find("input").attr('name') + '"]', '.form-check-availability-hotel').trigger('change');
                    $('input[name="' + $button.parent().find("input").attr('name') + '"]', '.single-room-form').trigger('change');
                    $('input[name="' + $button.parent().find("input").attr('name') + '"]', '.activity-booking-form').trigger('change');
                    if (window.matchMedia('(max-width: 767px)').matches) {
                        $('#dropdown-1 label', $button.closest('.field-guest')).hide();
                        $('#dropdown-1 .render', $button.closest('.field-guest')).show();
                    }
                };
				function numberButtonFuncRoom($button, min = 0, max = 20) {
                    var oldValue = $button.parent().find("input").val();
					var container = $button.closest('.st-number-wrapper');

                    var total = 0;
                    $('input[type="text"]', container).each(function () {
                        total += parseInt($(this).val());
                    });
                    var newVal = oldValue;
                    if ($button.hasClass('next')) {
                        if (total < max) {
                            if (oldValue < max) {
                                newVal = parseFloat(oldValue) + 1;
                            } else {
                                newVal = max;
                            }
                        } else {
							let html = `<div class="alert alert-danger"> Max of people is ${total} people`;
							$( '#form-booking-inpage .message-wrapper-2' ).append( html ).fadeTo( 2000, 1, () => {
								$( '#form-booking-inpage .message-wrapper-2 .alert' ).remove();
							} );
						}
                    } else {
                        if (oldValue > min) {
                            newVal = parseFloat(oldValue) - 1;
                        } else {
                            newVal = min;
                        }
                    }
                    $button.parent().find("input").val(newVal);
                    $('input[name="' + $button.parent().find("input").attr('name') + '"]', '.search-form').trigger('change');
                    $('input[name="' + $button.parent().find("input").attr('name') + '"]', '.form-check-availability-hotel').trigger('change');
                    $('input[name="' + $button.parent().find("input").attr('name') + '"]', '.single-room-form').trigger('change');
                    $('input[name="' + $button.parent().find("input").attr('name') + '"]', '.activity-booking-form').trigger('change');
                    if (window.matchMedia('(max-width: 767px)').matches) {
                        $('#dropdown-1 label', $button.closest('.field-guest')).hide();
                        $('#dropdown-1 .render', $button.closest('.field-guest')).show();
                    }
                }
            });
        },
        _dropdownselectDate: function () {
            if (!$('body').hasClass("single-hotel_room") && !$('body').hasClass("single-st_hotel") && !$('body').hasClass("single-st_activity") && !$('body').hasClass("single-st_tours") &&
                !$('body').hasClass("single-st_cars") && !$('body').hasClass("single-st_rental")
            ) {

                $('.form-date-search', 'body').each(function () {
                    var parent = $(this),
                        date_wrapper = $('.date-wrapper', parent),
                        check_in_input = $('.check-in-input', parent),
                        check_out_input = $('.check-out-input', parent),
                        check_in_out = $('.check-in-out', parent),
                        check_in_render = $('.check-in-render', parent),
                        check_out_render = $('.check-out-render', parent);
                    var timepicker = parent.data('timepicker');

                    if (typeof timepicker == 'undefined' || timepicker == '') {
                        timepicker = false;
                    } else {
                        timepicker = true;
                    }
                    var options = {
                        singleDatePicker: false,
                        sameDate: false,
                        autoApply: true,
                        minDate: new Date(),
                        dateFormat: 'DD/MM/YYYY',
                        customClass: '',
                        widthSingle: 500,
                        onlyShowCurrentMonth: true,
                        timePicker: timepicker,
                        timePicker24Hour: (st_params.time_format == '12h') ? false : true,
                    };
                    if (typeof locale_daterangepicker == 'object') {
                        options.locale = locale_daterangepicker;
                    }
                    check_in_out.daterangepicker(options,
                        function (start, end, label) {
                            check_in_input.val(start.format(parent.data('format'))).trigger('change');
                            $('#tp_hotel .form-date-search .check-in-input').val(start.format('YYYY-MM-DD')).trigger('change');
                            check_in_render.html(start.format(parent.data('format'))).trigger('change');
                            check_out_input.val(end.format(parent.data('format'))).trigger('change');
                            $('#tp_hotel .form-date-search .check-out-input').val(end.format('YYYY-MM-DD')).trigger('change');
                            check_out_render.html(end.format(parent.data('format'))).trigger('change');
                            if (timepicker) {
                                check_in_input.val(start.format(parent.data('date-format'))).trigger('change');
                                $('.check-in-input-time', parent).val(start.format(parent.data('time-format'))).trigger('change');
                                check_out_input.val(end.format(parent.data('date-format'))).trigger('change');
                                $('.check-out-input-time', parent).val(end.format(parent.data('time-format'))).trigger('change');
                                $('.check-out-input-time', parent).val(end.format(parent.data('time-format'))).trigger('change');
                            }
                            check_in_out.trigger('daterangepicker_change', [start, end]);
                            if (window.matchMedia('(max-width: 767px)').matches) {
                                $('label', parent).hide();
                                $('.render', parent).show();
                                $('.check-in-wrapper span', parent).show();
                            }
                        }
                    );

                    date_wrapper.on('click', function (e) {
                        check_in_out.trigger('click');
                    });
                });
                $('.form-date-search-v3', 'body').each(function () {

                    var parent = $(this),
                        date_wrapper = $('.date-wrapper', parent),
                        check_in_input = $('.check-in-input', parent),
                        check_out_input = $('.check-out-input', parent),
                        check_in_out = $('.check-in-out', parent),
                        check_in_render = $('.check-in-render', parent),
                        check_out_render = $('.check-out-render', parent);
                    var timepicker = parent.data('timepicker');
                    if (typeof timepicker == 'undefined' || timepicker == '') {
                        timepicker = false;
                    } else {
                        timepicker = true;
                    }
                    var customClass = parent.data('custom-class') || '';
                    var options = {
                        singleDatePicker: false,
                        autoApply: true,
                        disabledPast: true,
                        dateFormat: 'DD/MM/YYYY',
                        customClass: customClass,
                        widthSingle: 500,
                        onlyShowCurrentMonth: true,
                        timePicker: timepicker,
                        timePicker24Hour: (st_params.time_format == '12h') ? false : true,
                    };
                    if (typeof locale_daterangepicker == 'object') {
                        options.locale = locale_daterangepicker;
                    }
                    check_in_out.daterangepicker(options,
                        function (start, end, label) {
                            check_in_input.val(start.format(parent.data('format'))).trigger('change');
                            $('#tp_hotel .form-date-search .check-in-input').val(start.format('YYYY-MM-DD')).trigger('change');
                            var html = start.format(parent.data('format')) + ' - ';
                            check_in_render.html(html).trigger('change');
                            check_out_input.val(end.format(parent.data('format'))).trigger('change');
                            $('#tp_hotel .form-date-search .check-out-input').val(end.format('YYYY-MM-DD')).trigger('change');
                            check_out_render.html(end.format(parent.data('format'))).trigger('change');

                            if (timepicker) {
                                check_in_input.val(start.format(parent.data('date-format'))).trigger('change');
                                $('.check-in-input-time', parent).val(start.format(parent.data('time-format'))).trigger('change');
                                check_out_input.val(end.format(parent.data('date-format'))).trigger('change');
                                $('.check-out-input-time', parent).val(end.format(parent.data('time-format'))).trigger('change');
                                $('.check-out-input-time', parent).val(end.format(parent.data('time-format'))).trigger('change');


                            }
                            check_in_out.trigger('daterangepicker_change', [start, end]);
                            $('body').removeClass('st_overflow');
                            if (window.matchMedia('(max-width: 767px)').matches) {
                                $('label', parent).hide();
                                $('.render', parent).show();
                                $('.check-in-wrapper span', parent).show();
                            }
                        });
                    date_wrapper.on('click', function (e) {
                        console.log('ok đã click');
                        check_in_out.trigger('click');
                    });
                });
            }

        },
        _dropdownselect: function () {
            $('.form-extra-field').each(function () {
                let wrapper = $('.field-guest');
                var parent = $(this).parent('.form-group');
                parent.on('click', function (e) {
                    console.log('ok');
                    $(this).find('.arrow').toggleClass('fa-angle-down fa-angle-up');
                });

                $('.arrow', parent).on('click', function (e) {
                    var drop_down = $(this).closest('.dropdown');
                    var dropdown_menu = $('[aria-labelledby="' + drop_down.find('.dropdown-toggle').attr('id') + '"]', parent);
                    $('.form-extra-field').find('.dropdown-menu').not(dropdown_menu).slideUp(50);
                    dropdown_menu.slideToggle(50);
                    $(this).toggleClass('fa-angle-down fa-angle-up');
                });
                $('input[name="adult_number"]', parent).on('change', function () {
                    var adults = parseInt($(this).val());
                    var html = adults;
                    if (typeof adults == 'number') {
                        if (adults < 2) {
                            html = adults + ' ' + $('.render .adult', wrapper).data('text');
                        } else {
                            html = adults + ' ' + $('.render .adult', wrapper).data('text-multi');
                        }
                    }
                    $('.render .adult', parent).html(html);
                });
                //$('input[name="adult_number"]', parent).trigger('change');
                $('input[name="child_number"]', parent).on('change', function () {
                    var children = parseInt($(this).val());
                    var html = children;
                    if (typeof children == 'number') {
                        if (children < 2) {
                            html = children + ' ' + $('.render .children', wrapper).data('text');
                        } else {
                            html = children + ' ' + $('.render .children', wrapper).data('text-multi');
                        }
                    }
                    $('.render .children', parent).html(html);
                });
                //$('input[name="child_number"]', parent).trigger('change');
            });

            /*Travel Payout Hotel*/
            $('#nav-tp_hotel .form-extra-field').each(function () {
                var parent = $(this);
                $('input[name="adults"]', parent).on('change', function () {

                    var adults = parseInt($(this).val());
                    var html = adults;
                    if (typeof adults == 'number') {
                        if (adults < 2) {
                            html = adults + ' ' + $('.render .adult', parent).data('text');
                        } else {
                            html = adults + ' ' + $('.render .adult', parent).data('text-multi');
                        }
                    }
                    $('.render .adult', parent).html(html);
                });
                $('input[name="children"]', parent).on('change', function () {
                    var children = parseInt($(this).val());
                    var html = children;
                    if (typeof children == 'number') {
                        if (children < 2) {
                            html = children + ' ' + $('.render .children', parent).data('text');
                        } else {
                            html = children + ' ' + $('.render .children', parent).data('text-multi');
                        }
                    }
                    $('.render .children', parent).html(html);
                });
            });


        }
    }
    SearchForm.init();
})(jQuery);