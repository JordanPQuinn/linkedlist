$('#btn-submit').on('click',  createCard);
$('#card-storage').on('click', '.read-button', toggleReadClass);
$('#card-storage').on('click', '.delete-button', deleteCard);
$('#website-url-input, #website-title-input').bind('keyup', enableEnterButton);
$('.delete-all-read-button').on('click', removeAllRead);

var cardStorage = $('#card-storage');
var websiteURLInput = $('#website-url-input');
var websiteTitleInput = $('#website-title-input');
var inputForm = $('#input-form');

function createCard() {
  var websiteTitleInput = $('#website-title-input').val();
  var websiteURLInput = $('#website-url-input').val();
  console.log(isValidUrl(websiteURLInput));
  if(validateInput() === false){
    return;
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
  $('.warning').text('');
  inputReset();
  disableEnterButton();
  displayCardTotal();
  }
}

function validateInput() {
  var websiteTitleInput = $('#website-title-input').val();
  var websiteURLInput = $('#website-url-input').val();
  if (websiteTitleInput === '') {
    $('.warning').text('Please enter a valid title');
    return false;
  }
  else if (websiteURLInput === '' || isValidUrl(websiteURLInput) === false) {
    $('.warning').text('Please enter a valid URL ending in .com');
    return false;
  }
  else{
    return true;
  }
}

function toggleReadClass() {
  $(this).closest('article').toggleClass('card-read');
  displayReadTotal();
}

function deleteCard() {
  $(this).closest('article').remove();
  displayCardTotal();
  displayReadTotal();
}

function inputReset() {
  $('#website-title-input').val('');
  $('#website-url-input').val('');
}

function enableEnterButton() {
  if((websiteTitleInput.val().length > 0) && (websiteURLInput.val().length >0)) {
    $('#btn-submit').removeClass('disabled');
  }
}

function disableEnterButton() {
  if((websiteTitleInput.val().length === 0) && (websiteURLInput.val().length === 0)) {
    $('#btn-submit').addClass('disabled');
  }
}

function displayCardTotal() {
  $('.total-cards').text('Total:' + ' ' + $('.card').length);
}

function displayReadTotal() {
  $('.total-read').text('Total Read:' + ' ' + $('.card-read').length);
}

function removeAllRead() {
  $('.card-read').remove();
  displayCardTotal();
  displayReadTotal();
}

function isValidUrl(url) {
  return /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url);
}

