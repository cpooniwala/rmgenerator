var inquirer = require("inquirer");
var axios = require("axios");

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios.get(queryUrl).then(function(res) {
      const data = {
        profileImage: res.data.avatar_url,
        username: res.data.login
        // name: res.data.name,
        // location: res.data.location,
        // profileLink: res.data.html_url,
        // blog: res.data.blog,
        // bio: res.data.bio,
        // repoCount: res.data.public_repos,
        // repoCount: res.data.public_repos,
        // following: res.data.following
      };
      console.log(data);
      return data;
    });
  }
};

module.exports = api;
