define(function (require) {

    'use strict';

    var $ = require('jquery'),
        $window = $(window),
        $header = $('.site-header'),
        $list = $header.find('nav ul'),
        scroll = {
            y: 0,
            timeout: null
        };

    $header.on('click', '.toggle-nav', function (e) {

        e.preventDefault();

        $list.toggle();

    });

    $window.on('scroll', function (e) {

        clearTimeout(scroll.timeout);

        if (screen.width < 960 && !$list.is(':visible')) {

            scroll.timeout = setTimeout(function () {

                var y = $window.scrollTop();

                if (y < scroll.y || y < 200) {

                    $header.stop(true, true).animate({ top: 0 });

                } else {

                    $header.stop(true, true).delay(500).animate({ top: -100 });

                }

                scroll.y = y;

            }, 10);

        }

    });

});
