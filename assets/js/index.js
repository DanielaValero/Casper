/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function($, undefined) {
    "use strict";

    var $document = $(document);

    var read_time = function(text) {
        var minutes = Math.floor(text.split(' ').length / 200);
        if (minutes === 0) {
            minutes = 1;
        }
        return '<b>Est. time read: </b>' + minutes;
    };

    $document.ready(function() {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        var pageText = $postContent.text().replace(/\r?\n/g, '');
        var $postTimeRead = $('.post-time-read');

        if ($postTimeRead) {
            $postTimeRead.append(' ' + read_time(pageText) + '');
        }

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e) {
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function(options) {

        var defaults = {
                elem: $(this),
                speed: 500
            },

            allOptions = $.extend(defaults, options);

        allOptions.elem.click(function(event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({
                    scrollTop: ($(this.hash).offset().top + toMove)
                }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({
                    scrollTop: toMove
                }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({
                    scrollTop: ($(this.hash).offset().top)
                }, allOptions.speed);
            }
        });

    };
})(jQuery);
