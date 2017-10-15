


// On submit, the inner text of the card values will change to the value of the input field.
// Formatting is inserted on line 14 to ensure that the link maintains full functionality
// without altering the appearance of the link on the card. The console logs are to test
// that the input is what we expected. 
// Fun bug to sort out: submitting the info duplicates the underline in the card display. 

// Michelle - Just putting my name in so that we can know who wrote what. 
// I liked the idea of using .text and .html, but it changed the existing card instead of creating a new one. 
// Katie in Mod 2, hinted towards using .append() or .prepend(), so I played with that and it worked really well!


var cardStorage = $('#card-storage');


$('#btn-submit').on('click', function () {
  var websiteTitleInput = $('#website-title-input').val();
  var websiteURLInput = $('#website-url-input').val();

  cardStorage.prepend(
    '<article class="card"><h2 class="website-title">' + websiteTitleInput + '</h2><a href="websiteURLInput" id="website-link">' + websiteURLInput + '</a><button id="read-button">Read</button><button id="delete-button">Delete</button></article');
  
  // var websiteTitleCard = $('.website-title')
  // var websiteLinkCard = $('#website-link')  
  // console.log(websiteTitleInput);
  // console.log(websiteURLInput); 
  // // $(websiteTitleCard).text(websiteTitleInput);
  // // $(websiteLinkCard).html('<a href="https://www." '+websiteURLInput+' id="website-link">'+websiteURLInput+'</a>');
  // console.log(websiteTitleCard);
  // console.log(websiteLinkCard);
  
});

