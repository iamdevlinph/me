(function () {
  // populate todo list
  activate();
})();

function activate() {
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
      issues.urls.push('https://github.com/' + repoAuthor + '/' + repoName + '/issues');
      issues.badge.push('https://img.shields.io/github/issues/' + repoAuthor + '/' + repoName + '.svg?style=flat-square');
      prs.urls.push('https://github.com/' + repoAuthor + '/' + repoName + '/pulls');
      prs.badge.push('https://img.shields.io/github/issues-pr/' + repoAuthor + '/' + repoName + '.svg?style=flat-square');
    });
  }

  // draw page
  drawPage(issues, prs);
}

function drawPage(issues, prs) {
  console.log(issues)
  console.log(prs)
}
