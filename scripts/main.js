(function () {
  animateSocialLinks();

  // show tag line
  showTagLine();
})();

function animateSocialLinks() {
  $('#social-links-container').attr('class', 'animated flipInX')
}

function showTagLine() {
  var tagLines = [
    "JavaScript Developer",
    "Have a day :D",
  ]

  function getRandomTag(tagLines) {
    var len = tagLines.length;
    return tagLines[Math.floor(Math.random() * len) + 0];
  }

  $('#tag-line').removeClass('hidden');
  $('#tag-line').text(getRandomTag(tagLines));

}
