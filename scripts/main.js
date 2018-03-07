(animateSocialLinks = () => {
  document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('social-links-container').className = 'animated flipInX';
    console.log('oh, hi mark')
  });
})();

const tagLines = [
  "JavaScript Developer",
  "Good day for fishin' ain't it?",
  "Why can't we screenshot the brightness of our phone? Hmm",
  "Civil War: Spaces vs Tabs",
  ";",
  "Still looking for the semi-colon",
  "I did not hit her",
  "The word 'bed' looks like a bed *mindblown*",
  "ablublu"
]

const tagLineP = document.getElementById('tag-line');

document.onreadystatechange = function (e) {
  if (document.readyState === 'complete') {
    tagLineP.style.display = 'block';
    tagLineP.innerHTML = getRandomTag(tagLines);
  }
};

getRandomTag = (tagLines) => {
  const len = tagLines.length;
  return tagLines[Math.floor(Math.random() * len) + 0];
}
