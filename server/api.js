"use strict";

/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function(app, config) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: "RS256"
  });

  // Check for an authenticated admin user
  const adminCheck = (req, res, next) => {
    const roles = req.user[config.NAMESPACE] || [];
    if (roles.indexOf("admin") > -1) {
      next();
    } else {
      res.status(401).send({
        message: "Not authorized for admin access"
      });
    }
  };

  /*
   |--------------------------------------
   | API Routes
   |--------------------------------------
   */
  require('./router/events.router')(
    app,
    jwtCheck,
    adminCheck
  );

  require('./router/homepage.router')(
    app,
    jwtCheck,
    adminCheck
  );

  require('./router/images.router')(
    app,
    jwtCheck,
    adminCheck
  );

  require('./router/personel.router')(
    app,
    jwtCheck,
    adminCheck
  );

  require('./router/request.router')(
    app,
    jwtCheck,
    adminCheck
  );

  require('./router/services.router')(
    app,
    jwtCheck,
    adminCheck
  );

  require('./router/testimonials.router')(
    app,
    jwtCheck,
    adminCheck
  );


  // GET API root
  app.get("/apii/", (req, res) => {
    res.send("API Works");
  });

};
