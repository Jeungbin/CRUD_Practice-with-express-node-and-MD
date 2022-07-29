var Userdb = require("../model/model");

// allthe create, find , update, delete are the function
// create and save new user
exports.create = (req, res) => {
  //Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
    // if the requst is empty.. user doen't put anything it's going to error
    //whenever user make a post request you need to specify body of that post request
    // when you make a post request using a form, all the data stored on the body of the request object
  }

  // new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save user in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};
// retrieve and return all users/ retrive and return a single user
exports.find = (req, res) => {};
// Update a new idetified user by user id
exports.update = (req, res) => {};
// Delete a user with specified user id in the request
exports.delete = (req, res) => {};
