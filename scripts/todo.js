(function () {
  // populate todo list
  activate();
})();

function activate() {
  var list =  [];
  var issues = {
    urls: [],
    badge: []
  };
  var prs = {
    urls: [],
    badge: []
  };

  var repos = {
    iamdevlinph: [
      'me',
      'resume',
      'blog',
      'git-summary-sh'
    ],
    codesandcoffees: [
      'common-utils-pkg',
      'react-pkg',
      'react-kit'
    ]
  };

  for (var repoAuthor in repos) {
    // skip loop if the property is from prototype
    if (!repos.hasOwnProperty(repoAuthor)) continue;

    var repoArr = repos[repoAuthor];
    repoArr.forEach(function (repoName) {
      list.push({
        author: repoAuthor,
        repo: repoName,
        issueUrl: 'https://github.com/' + repoAuthor + '/' + repoName + '/issues',
        issueBadge: 'https://img.shields.io/github/issues/' + repoAuthor + '/' + repoName + '.svg?style=flat-square',
        prUrl: 'https://github.com/' + repoAuthor + '/' + repoName + '/pulls',
        prBadge: 'https://img.shields.io/github/issues-pr/' + repoAuthor + '/' + repoName + '.svg?style=flat-square'
      });
    });
  }

  // draw page
  drawPage(list);
}

function drawPage(list) {
  console.log(list)
}
