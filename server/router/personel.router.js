"use strict";

const ctrlPersonel = require('../controllers/personel.controller');

module.exports = (app, jwtCheck, adminCheck) => {
    app.get('/apii/personel', ctrlPersonel.getPersonel);
    app.get('/apii/admin/personel', ctrlPersonel.getAdminPersonel);
    app.get('/apii/admin/personel/:id', jwtCheck, ctrlPersonel.getAdminPersonelDetail);
    app.post('/apii/admin/personel/new', jwtCheck, adminCheck, ctrlPersonel.create);
    app.put('/apii/admin/personel/:id', jwtCheck, adminCheck, ctrlPersonel.update);
    app.delete('/apii/admin/personel/:id', jwtCheck, adminCheck, ctrlPersonel.delete);
};
