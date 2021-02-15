var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");
// clear old content
repoContainerEl.textContent = "";
repoSearchTerm.textContent = searchTerm;

var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a request to the url
 response.json().then(function(data) {
  displayRepos // loop over repos
for (var i = 0; i < repos.length; i++) {
  // format repo name
  var repoName = repos[i].owner.login + "/" + repos[i].name;

  // create a container for each repo
  var repoEl = document.createElement("div");
  repoEl.classList = "list-item flex-row justify-space-between align-center";

  // create a span element to hold repository name
  var titleEl = document.createElement("span");
  titleEl.textContent = repoName;

  // append to container
  repoEl.appendChild(titleEl);

  // append container to the dom
  repoContainerEl.appendChild(repoEl);
}
});
  
      var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
      var formSubmitHandler = function(event) {
  event.preventDefault();
  console.log(event);
};
    });
    
  });
  userFormEl.addEventListener("submit", formSubmitHandler);
  event.preventDefault()
  // get value from input element
var username = nameInputEl.value.trim();

if (username) {
  getUserRepos(username);
  nameInputEl.value = "";
} else {
  alert("Please enter a GitHub username");
}
};
var displayRepos = function(repos, searchTerm) {
  console.log(repos);
  console.log(searchTerm);
};
