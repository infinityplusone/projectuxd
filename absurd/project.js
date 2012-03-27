var project = {
  
  setName: function(target) {
    var n = $('#email').val().split('@')[0];
    if(n!=='') {
      target.value = n;
    }
    $('form').hide();
    $(target.form).fadeIn('250');
  }, // setName
  
  activateFacebook: function() {
  }, // activateFacebook

  _init: function() {
    // facebook thingy
    $('.fb_button').live('click', function(e) {
      if(!confirm('User would ' + document.title.toLowerCase() + ' using Facebook connect, and then be sent to welcome page.')) {
        e.preventDefault();
      }
      else {
        var nameElem = document.getElementById('name');
        if(nameElem) {
          e.preventDefault();
          project.setName(nameElem);
        }
      }
    });

    // register form
    $('#register')
      .submit(function(e) {
        e.preventDefault();
        project.setName(document.getElementById('name'));
      });

    // forgot password
    $('.forgot').click(function(e) {
      e.preventDefault();
      $('form').hide();
      $(this.getAttribute('href')).fadeIn('250');
    });

    // show form
    if(location.hash!=='') {
      $(location.hash).show();     
    }
    else {
      $('form:first').show();
    }
    

  } // _init
  
}; // project 
project._init();