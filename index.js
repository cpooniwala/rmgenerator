var api = require("./utils/api.js");
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generatemarkdown.js");
var fs = require("fs");
var path = require("path");

const questions = [
  {
    message: "Enter your GitHub username",
    name: "username"
  },
  {
    message: "Enter a title",
    name: "title"
  },
  {
    message: "Enter a description",
    name: "description"
  },
  {
    message: "Enter the install instructions",
    name: "installation"
  },
  {
    message: "Enter the usage",
    name: "usage"
  },
  {
    message: "Enter the license",
    name: "license"
  },
  {
    message: "Enter the contributing",
    name: "contributing"
  },
  {
    message: "Enter the tests",
    name: "tests"
  }
];

function init() {
  inquirer.prompt(questions).then(function(answer) {
    let githubUserInfo = api.getUser(answer.username);
    //console.log({ answer });
    //var combinedData = { answer, githubUserInfo };
    //console.log(combinedData);
    //fs.writeFile("README.md", generateMarkdown(combinedData));
  });
}

init();