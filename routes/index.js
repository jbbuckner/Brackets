/*!
 * Module dependencies.
 */

/**
 * Controllers
 */

  var client = require('../controllers/client')

/**
 * Expose routes
 */

module.exports = function (app) {

  // home route
  app.get('/', client.index);
  
}