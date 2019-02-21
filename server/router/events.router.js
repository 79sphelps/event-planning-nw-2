"use strict";

const ctrlEvents = require('../controllers/events.controller');

module.exports = (app, jwtCheck, adminCheck) => {
    app.get('/apii/events', ctrlEvents.getEvents);
    app.get('/apii/events/admin', jwtCheck, adminCheck, ctrlEvents.getAdminEvents);
    app.get('/apii/event/:id', jwtCheck, ctrlEvents.getEvent);
    app.post('/apii/event/new', jwtCheck, adminCheck, ctrlEvents.create);
    app.put('/apii/event/:id', jwtCheck, adminCheck, ctrlEvents.update);
    app.delete('/apii/event/:id', jwtCheck, adminCheck, ctrlEvents.delete);
};
