$(document).ready(function() {
  runGoogleAnalytics();
  activateTabAndShowContent('home');
  runFadeshow();
  $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false, overlay_gallery: false, slideshow: 3000});

  $('#home-tab').on('click', {id: 'home'}, activateTabAndShowContent);
  $('#services-tab').on('click', {id: 'services'}, activateTabAndShowContent);
  $('#photos-tab').on('click', {id: 'photos'}, activateTabAndShowContent);
  $('#contact-tab').on('click', {id: 'contact'}, activateTabAndShowContent);
});

function runGoogleAnalytics() {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-22476759-1']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
}

function activateTabAndShowContent(event) {
  var id = event;

  if(event.data)
    if(event.data.id)
      id = event.data.id

  var tabId = '#' + id + '-tab';
  var contentId = '#' + id + '-content';

  $('.tab').removeClass('active-tab')
  $('.tab').addClass('inactive-tab')
  $(tabId).removeClass('inactive-tab');
  $(tabId).addClass('active-tab');

  $('.content').hide();
  $(contentId).show();
}

function runFadeshow() {
  $('#fadeshow').crossSlide({
    sleep: 2,
    fade: 1
  }, [
    { src: 'images/gallery/fullsize/greyAllstar.jpg' }, // TODO - set up images
    { src: 'images/gallery/fullsize/greyGlass.jpg'   }
  ]);
}