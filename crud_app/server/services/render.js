const axios = require("axios");
// this module is going to allow us to make a request

exports.homeRoutes = (req, res) => {
  //Make a get request to /api/users
  // this get request is going to return promise
  axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      console.log(response.data);
      res.render("index", { users: response.data });
      // first is index.js / second data has all the records of mongoDB
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  res.render("update_user");
};
