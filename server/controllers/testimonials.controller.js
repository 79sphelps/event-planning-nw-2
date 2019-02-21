const Testimonials = require("../models/Testimonials");

const _testimonialProjection = "name quote editable";

module.exports.getTestimonials = (req, res) => {
  Testimonials.find({}, _testimonialProjection, (err, testimonials) => {
    let testimonialsArr = [];
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (testimonials) {
      testimonials.forEach(testimony => {
        testimonialsArr.push(testimony);
      });
    }

    res.send(testimonialsArr);
  });
};
