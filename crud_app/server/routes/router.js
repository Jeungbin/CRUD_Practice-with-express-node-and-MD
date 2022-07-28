const express = require("express");
const route = express.Router();
// route => this app will create new app
// this method allows us to create different router in a separate file

const services = require("../services/render");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/", services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get("/add-user", services.add_user);

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get("/update-user", services.update_user);

module.exports = route;
// you can use any file
