define(function (require) {

    'use strict';

    var $ = require('jquery'),
        $header = $('.site-header'),
        $list = $header.find('nav ul');

    $header.on('click', '.toggle-nav', function (e) {

        e.preventDefault();

        $list.toggle();

    });

});
