(function() {
  var waitForJquery = null;
  try {
    var markup = ('<!DOCTYPE html>\n<html>\n' + document.documentElement.innerHTML + '\n</html>').replace(/<script.*help.*<\/script>/gim, '').replace(/>/gm, '&gt;').replace(/</gm, '&lt;');
    if(typeof jQuery==='undefined') {
      document.write(unescape('%3Cscript src="../cmn/jquery.min.js"%3E%3C/script%3E'));
    }
    document.write('\n<link rel="stylesheet" href="../help/help.css" />\n');
    waitForJquery = setInterval(function() {
  
      var help = {
        basic: [
          'This example uses clickable images to demonstrate the before/after states (pages) of a log-in process.',
          'Clicking on the image on the first page will load the second page.',
          'The first page is a simple log-in screen with a pre-populated email address.',
          'The second is a welcome screen, shown after a successful log-in.'
        ],
        simple: [
          'This example also uses clickable images to demonstrate states (pages), however, this time, we\'re prototyping a registration flow, and only one HTML document is used.',
          'Instead of taking the user to a completely separate document, it uses anchored links to move the user down a single document, which contains all of the states.'
          // 'The first page is a simple sign-up screen with a pre-populated email address.',
          // 'The second is a welcome screen, shown after a successful log-in.'
        ],
        intermediate: [
          'This example is (nearly) identical to the <a href="../simple/register.html">simple</a> example, however, this time, we\'ve added Javascript, so rather than move down a single page, we\'re swapping (hiding/showing) images instead.'
        // 'The first page is a simple sign-up screen with a pre-populated email address.',
        // 'The second is a welcome screen, shown after a successful log-in.'    
        ],
        advanced: [
          'This example demonstrates a full self-contained log-in process, including a registration path, as well as both  "Connect with Facebook" and "I Forgot My Password" options.',
          'There are no clickable images in this example. Instead, we\'re using valid HTML5, styled using CSS, and with enhanced interactions added using Javascript. (If you view the source, you will see annotated Javascript.)',
          'There are three separate HTML documents supporting this prototype.',
          'The first, <span class="file">login.html</span>, provides all the log-in functionality: the ability to enter and submit credentials (with built-in validation for browsers which support HTML5 forms); the option to request a forgotten password; an option to log in via Facebook; and, the option to switch to the registration path, if not already a member.',
          'The second, <span class="file">register.html</span>, provides all the registration functionality: the ability to enter and submit credentials (with built-in validation for browsers which support HTML5 forms); the option to connect (sign up) using Facebook; an optional step for picking a display name; and, the option to switch to the log-in path, if already a member.',
          'The third, <span class="file">welcome.html</span> is the same welcome page we\'ve been using since the beginning, except that it is coded using HTML5, CSS, and Javascript.'
        ],
        absurd: [
          'This example is identical to the <a href="../advanced/login.html">advanced</a> example, except I tweaked it while bored one evening, and the welcome page actually allows for some (very) limited input and interaction.',
          'I did not fully annotate the absurdity, as it wasn\'t done particularly well.'
        ]
    
      }; // help

      if(typeof jQuery!=='undefined') {
        clearInterval(waitForJquery);
        $('body:not(.indexx)').append(
          '\n<div class="menu" id="help-menu"><a href="../" class="ico ico-home" title="Return to the index page">home</a> <a href="#" class="ico ico-info" title="View the markup for this prototype">info</a> <a href="#" class="ico ico-help" title="What\'s going on here?">help</a> <a href="http://github.com/infinityplusone/projectuxd" class="ico ico-git" title="View project on Github" target="_blank">github</a></div>\n<div id="screen" class="hide"><div id="modal"></div></div>'
        );
        var $window = $(window);
        var $screen = $('#screen');
        var close = '\n<a href="#" class="ico ico-close">close</a>';
        
        var clearModal = function() {
          $screen
            .addClass('hide')
            .find('#modal').html('');
        }; // clearModal
        
        $('.menu .ico[href="#"], .ico-close').live('click', function(e) {
          e.preventDefault();
          switch(this.innerHTML) {
            case 'help':
              var page = location.pathname.replace(/\/?(projectuxd\/)?(.+)\.html$/gim, '$2').split(/\//)[0];
              var helpText = '\n<h1>' + page + ' Prototype</h1>';
              for(var i=0, pLen=help[page].length; i<pLen; i++) {
                helpText += '\n<p>' + help[page][i] + '</p>';
              }
              helpText += '\n';
              $screen
                .removeClass('hide')
                .find('#modal')
                  .css({maxHeight:$window.height()*0.7})
                  .html(helpText + close);
              break;
            case 'info':
              $screen
                .removeClass('hide')
                .find('#modal')
                  .css({maxHeight:$window.height()*0.7})
                  .html('<pre>' + markup + '</pre>' + close);
              break;
            case 'close':
              clearModal();
              break;

            default:
              break;
          }
        }); // actions
        

        
        $screen.live('click', function(e) {
          if(e.target==this) {
            clearModal();
          }
        });
        $(document).bind('keydown', function(e) {
          if(+e.keyCode==27) { // ESC
            clearModal();
            
          }
        });

      }


    }, 50);
  }
  catch(err) {
    clearInterval(waitForJquery);
  }
})();
