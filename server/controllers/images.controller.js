const Images = require("../models/Images");

const _imagesProjection = "caption path description editable";

module.exports.getImages = (req, res) => {
    Images.find({}, _imagesProjection, (err, images) => {
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
}

module.exports.getImage = (req, res) => {
    Images.findById(req.params.id, (err, image) => {
        if (err) {
            return res.status(500).send({
                message: err.message
            });
        }
        if (!image) {
            return res.status(400).send({
                message: "image not found."
            });
        }
        res.send(image);
    });
}

module.exports.create = (req, res) => {
    Images.findOne(
        {
            path: req.body.path,
            caption: req.body.caption
        },
        (err, existingImage) => {
            if (err) {
                return res.status(500).send({
                    message: err.message
                });
            }
            if (existingImage) {
                return res.status(409).send({
                    message: "You already have this image."
                });
            }

            const image = new Images({
                caption: req.body.caption,
                path: req.body.path,
                description: req.body.description,
                editable: req.body.editable
            });

            image.save(err => {
                if (err) {
                    return res.status(500).send({
                        message: err.message
                    });
                }
                res.send(image);
            });
        }
    );
}

module.exports.update = (req, res) => {
    Images.findById(req.params.id, (err, image) => {
        if (err) {
            return res.status(500).send({
                message: err.message
            });
        }
        if (!image) {
            return res.status(400).send({
                message: "Image not found."
            });
        }

        //image._id = req.body._id;
        image.caption = req.body.caption;
        image.path = req.body.path;
        image.description = req.body.description;
        image.editable = req.body.editable;

        image.save(err => {
            if (err) {
                return res.status(500).send({
                    message: err.message
                });
            }
            res.send(image);
        });
    });
}

module.exports.delete = (req, res) => {
    Images.findById(req.params.id, (err, image) => {
        if (err) {
            return res.status(500).send({
                message: err.message
            });
        }
        if (!image) {
            return res.status(400).send({
                message: "Image not found."
            });
        }
        Images.find(
            {
                _id: req.params.id
            },
            (err, images) => {
                image.remove(err => {
                    if (err) {
                        return res.status(500).send({
                            message: err.message
                        });
                    }
                    res.status(200).send({
                        message: "Image successfully deleted."
                    });
                });
            }
        );
    });
}
