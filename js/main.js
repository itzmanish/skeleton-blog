$(document).ready(function() {
  // Variables
  var $codeSnippets = $('.code-example-body'),
    $nav = $('.navbar'),
    $body = $('body'),
    $window = $(window),
    navOffsetTop = $nav.offset().top,
    $document = $(document),
    entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;'
    };

  function init() {
    // $window.on('scroll', onScroll);
    // $window.on('resize', resize);

    $('a[href^="#"]').on('click', smoothScroll);
    buildSnippets();
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off('scroll');
    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 40
        },
        0,
        'swing',
        function() {
          window.location.hash = target;
          $(document).on('scroll', onScroll);
        }
      );
  }

  $('#button').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#elementtoScrollToID').offset().top
      },
      2000
    );
  });
  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function(s) {
      return entityMap[s];
    });
  }

  function buildSnippets() {
    $codeSnippets.each(function() {
      var newContent = escapeHtml($(this).html());
      $(this).html(newContent);
    });
  }

  init();
});
// Header animation
// Hide Header on on scroll down
$(document).ready(function() {
  'use strict';

  var c,
    currentScrollTop = 0,
    navbar = $('nav');

  $(window).scroll(function() {
    var a = $(window).scrollTop();
    var b = navbar.height();

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.addClass('scrollUp');
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass('scrollUp');
    }
    c = currentScrollTop;
  });
});
// Header animation end
