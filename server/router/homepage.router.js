"use strict";

const ctrlHomepage = require('../controllers/homepage.controller');

module.exports = (app, jwtCheck, adminCheck) => {
    app.get('/apii/homepage', ctrlHomepage.getHomepage);
    app.get('/apii/homepage/:id', jwtCheck, ctrlHomepage.getHomepageDetail);
    app.put('/apii/homepage/:id', jwtCheck, adminCheck, ctrlHomepage.update);
};
