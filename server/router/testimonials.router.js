"use strict";

const ctrlTestimonials = require('../controllers/testimonials.controller');

module.exports = (app, jwtCheck, adminCheck) => {
    app.get('/apii/testimonials', ctrlTestimonials.getTestimonials);
    /*
    app.get('/apii/admin/testimonials/:id', jwtCheck, ctrlTestimonials.getTestimonial);
    app.post('/apii/admin/testimonials/new', jwtCheck, adminCheck, ctrlTestimonials.create);
    app.put('/apii/admin/testimonials/:id', jwtCheck, adminCheck, ctrlTestimonials.update);
    app.delete('/apii/admin/testimonials/:id', jwtCheck, adminCheck, ctrlTestimonials.delete);
    */
};
