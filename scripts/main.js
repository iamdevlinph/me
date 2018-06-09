(animateSocialLinks = () => {
  document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('social-links-container').className = 'animated flipInX';
  });
})();

const tagLines = [
  "JavaScript Developer",
  "Have a day :D",
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
