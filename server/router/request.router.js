"use strict";

const ctrlRequest = require('../controllers/request.controller');

module.exports = (app, jwtCheck, adminCheck) => {
    app.get('/apii/requests', ctrlRequest.getRequests);
    /*
    app.get('/apii/admin/personel/:id', jwtCheck, ctrlRequest.getAdminPersonelDetail);
    app.post('/apii/admin/personel/new', jwtCheck, adminCheck, ctrlRequest.create);
    app.put('/apii/admin/personel/:id', jwtCheck, adminCheck, ctrlRequest.update);
    app.delete('/apii/admin/personel/:id', jwtCheck, adminCheck, ctrlRequest.delete);
    */
};
