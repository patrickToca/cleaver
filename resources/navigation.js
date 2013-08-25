$(function() {
  $('section').each(function(i, v) {
    if (i)
      $(v).hide();
    else
      $(v).addClass('active');
  });

  // go back a slide
  var go_back = function() {
    var curr = $('section.active');
    if (!curr.prev().length) {
      $('section:last').show().addClass('active');
    } else {
      curr.prev().show().addClass('active');
    }
    curr.hide().removeClass('active');
  };

  // go forward a slide
  var go_forward = function() {
    var curr = $('section.active');
    if (!curr.next().length) {
      $('section:first').show().addClass('active');
    } else {
      curr.next().show().addClass('active');
    }
    curr.hide().removeClass('active');
  };

  $(document).on('keydown', function(e) {
    var kc = e.keyCode;

    // left, down, H, J, backspace - BACK
    // up, right, K, L, space, enter - FORWARD
    if (kc == 37 || kc == 40 || kc == 8 || kc == 72 || kc == 74) {
      go_back();
    } else if (kc == 38 || kc == 39 || kc == 13 || kc == 32 || kc == 75 || kc == 76) {
      go_forward();
    }

  });

  if ($('#next') && $('#prev')) {
    // clicking the next box
    $('#next').on('click', function(e) {
      e.preventDefault();
      go_forward();
    });

    // clicking the prev box
    $('#prev').on('click', function(e) {
      e.preventDefault();
      go_back();
    });
  }
});
