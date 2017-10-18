


// On submit, the inner text of the card values will change to the value of the input field.
// Formatting is inserted on line 14 to ensure that the link maintains full functionality
// without altering the appearance of the link on the card. The console logs are to test
// that the input is what we expected. 
// Fun bug to sort out: submitting the info duplicates the underline in the card display. 

// Michelle - Just putting my name in so that we can know who wrote what. 
// Katie in Mod 2, hinted towards using .append() or .prepend(), so I played with that and it worked really well! Check it out and see what you think.
// I was going to leave the .prepend() commented out, but now the original card isn't showing up the way it was for the initial set up. Whoops. Sorry!!

var cardStorage = $('#card-storage');
var websiteURLInput = $('#website-url-input');
var websiteTitleInput = $('#website-title-input');
var inputForm = $('#input-form');

function createCard() {
  var websiteTitleInput = $('#website-title-input').val();
  var websiteURLInput = $('#website-url-input').val();
  if (websiteTitleInput === '') {
    $('.warning').text('Please enter a valid title');
  }
  else if (websiteURLInput === '') {
    $('.warning').text('Please enter a valid URL');
  }
  else{
  cardStorage.prepend(
    `
    <article class="card">
    <h2 class="website-title">${websiteTitleInput}</h2>
    <a href="https://www.${websiteURLInput}" id="website-link">${websiteURLInput}</a>
    <button class="read-button">Read</button>
    <button class="delete-button">Delete</button>
    </article>
    `
  );
  inputReset();
  displayCardTotal();
}
}

function toggleReadClass() {
  $(this).closest('article').toggleClass('card-read');
  displayReadTotal();
}

function deleteCard() {
  $(this).closest('article').remove();
}

function inputReset() {
  var websiteTitleInput = $('#website-title-input').val('');
  var websiteURLInput = $('#website-url-input').val('');
}

function enableEnterButton(){
  if((websiteTitleInput.val().length > 0) && (websiteURLInput.val().length >0)) {
    $('#btn-submit').removeClass('disabled');
  }
}

function displayCardTotal() {
  $('.total-cards').text('Total:' + ' ' + $('.card').length);
}

function displayReadTotal() {
  $('.total-read').text('Total Read:' + ' ' + $('.card-read').length);
}


$('#btn-submit').on('click',  createCard);
$('#card-storage').on('click', '.read-button', toggleReadClass);
$('#card-storage').on('click', '.delete-button', deleteCard);
$('#website-url-input, #website-title-input').bind('keyup', enableEnterButton);



// websiteURLInput.on('keyup', function() {
//     if ((websiteTitleInput.val() != '') && (websiteURLInput.val() != '')) {
//       $('btn-submit').removeAttr('disabled');
//     }    
// });

