


// On submit, the inner text of the card values will change to the value of the input field.
// Formatting is inserted on line 14 to ensure that the link maintains full functionality
// without altering the appearance of the link on the card. The console logs are to test
// that the input is what we expected. 
$('#btn-submit').on('click', function () {
  var websiteTitleInput = $('#website-title-input').val();
  var websiteURLInput = $('#website-url-input').val();
  var websiteTitleCard = $('.website-title')
  var websiteLinkCard = $('#website-link')
  console.log(websiteTitleInput);
  console.log(websiteURLInput); 
  $(websiteTitleCard).text(websiteTitleInput);
  $(websiteLinkCard).html('<a href=https://www.' + websiteURLInput + '>' + websiteURLInput + '</a>');
  console.log(websiteTitleCard);
  console.log(websiteLinkCard);
});
