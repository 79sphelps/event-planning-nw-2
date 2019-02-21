"use strict";

const ctrlServices = require('../controllers/services.controller');

module.exports = (app, jwtCheck, adminCheck) => {
    app.get('/apii/admin/services', ctrlServices.getServices);
    app.get('/apii/admin/services/:id', jwtCheck, ctrlServices.getService);
    app.post('/apii/admin/services/new', jwtCheck, adminCheck, ctrlServices.create);
    app.put('/apii/admin/services/:id', jwtCheck, adminCheck, ctrlServices.update);
    app.delete('/apii/admin/services/:id', jwtCheck, adminCheck, ctrlServices.delete);
};
