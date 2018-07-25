(function () {
  // show tag line
  showTagLine();
})();

function showTagLine() {
  var tagLines = [
    "JavaScript Developer",
    "Have a day :D",
  ]

  function getRandomTag(tagLines) {
    var len = tagLines.length;
    return tagLines[Math.floor(Math.random() * len) + 0];
  }

  $('#tag-line').text(getRandomTag(tagLines));
}
