function getScore(word) {
  var letters = { 'd': 2, 'g': 2, 'b': 3, 'c' : 3, 'm': 3, 'p': 3, 'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4, 'k': 5, 'j' : 8, 'x': 8, 'q': 10,  'z': 10 };
  var score = letters[word] ? letters[word] : 1;

  return score;
}


jQuery(document).ready(function() {
  $("#").focus();
  $("#").submit(function(event) {



    event.preventDefault();
  });
});
