"use strict";

const _requestProjection = "name email message editable";

module.exports.getRequests = (req, res) => {
  Request.find({}, _requestProjection, (err, images) => {
    let imagesArr = [];
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }

    if (images) {
      images.forEach(img => {
        imagesArr.push(img);
      });
    }

    res.send(imagesArr);
  });
};
