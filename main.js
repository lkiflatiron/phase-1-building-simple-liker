// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.getElementsByClassName('like-glyph')


for (const heart of hearts) {
  heart.addEventListener("click", processLike)
}

function processLike(e) {
  mimicServerCall()
  .then((res) => {toggleHeart(e)})
  .catch(rej => {hideModal(rej)})
}

function toggleHeart(e) {
  if (e.target.textContent === EMPTY_HEART) {
    e.target.textContent = FULL_HEART
    e.target.classList.add('activated-heart')
  } else {
    e.target.textContent = EMPTY_HEART
    e.target.classList.remove('activated-heart')
  }
}

function hideModal(rej) {
  const modal = document.getElementById('modal')
  const messageArea = document.getElementById('modal-message')
  messageArea.textContent = rej
  modal.classList.remove('hidden')
  setTimeout(()=> modal.classList.add("hidden"),3000)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .1
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
