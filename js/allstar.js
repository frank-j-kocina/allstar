$(document).ready(function() {
  activateTabAndShowContent('home');
  $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false, overlay_gallery: false, slideshow: 3000});

  $('#home-tab').on('click', {id: 'home'}, activateTabAndShowContent);
  $('#services-tab').on('click', {id: 'services'}, activateTabAndShowContent);
  $('#photos-tab').on('click', {id: 'photos'}, activateTabAndShowContent);
  $('#contact-tab').on('click', {id: 'contact'}, activateTabAndShowContent);
});

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