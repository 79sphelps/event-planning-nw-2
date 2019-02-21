"use strict";

const ctrlImages = require('../controllers/images.controller');

module.exports = (app, jwtCheck, adminCheck) => {
    app.get('/apii/admin/images', ctrlImages.getImages);
    app.get('/apii/admin/images/:id', jwtCheck, ctrlImages.getImage);
    app.post('/apii/admin/images/new', jwtCheck, adminCheck, ctrlImages.create);
    app.put('/apii/admin/images/:id', jwtCheck, adminCheck, ctrlImages.update);
    app.delete('/apii/admin/images/:id', jwtCheck, adminCheck, ctrlImages.delete);
};
