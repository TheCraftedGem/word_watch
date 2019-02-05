import $ from 'jquery'


function getWord() {
  fetch(`https://wordwatch-api.herokuapp.com/api/v1/top_word`)
    .then(response => response.json())
    .then(word => appendWord(word))
    .catch(error => console.error({
      error
    }));
};

function appendWord(word) {
 var  top_word  = Object.keys(word.word)[0];
 var  count = Object.values(word.word)[0];
  $('.most-used-word').append(`
  Top Word: "<p class="name"> ${top_word} </p>
  Count: "<p class="name"> ${count} </p>`)
}

function postWord() {
  var input = document.querySelector(".txt").value;
  
  fetch("https://wordwatch-api.herokuapp.com/api/v1/words", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({
        input
      })
    })
    .then((response) => {
      response 
      console.log(response)
      //do something awesome that makes the world a better place
    });
}


$(document).ready(() => {
  getWord();
  $(".submit").click(function() {
    postWord();
  });
 });
