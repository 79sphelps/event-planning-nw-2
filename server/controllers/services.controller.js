const Service = require("../models/Service");

const _servicesProjection = "title description thumbnail";

module.exports.getServices = (req, res) => {
  Service.find({}, _servicesProjection, (err, services) => {
    let servicesArr = [];
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (services) {
      services.forEach(img => {
        servicesArr.push(img);
      });
    }

    res.send(servicesArr);
  });
};

module.exports.getService = (req, res) => {
  Service.findById(req.params.id, (err, service) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (!service) {
      return res.status(400).send({
        message: "service not found."
      });
    }
    res.send(service);
  });
};

module.exports.create = (req, res) => {
  Service.findOne(
    {
      title: req.body.title,
      description: req.body.description
    },
    (err, existingService) => {
      if (err) {
        return res.status(500).send({
          message: err.message
        });
      }
      if (existingService) {
        return res.status(409).send({
          message: "You already have this service."
        });
      }

      const service = new Service({
        title: req.body.title,
        description: req.body.description,
        thumbnail: req.body.thumbnail
      });

      service.save(err => {
        if (err) {
          return res.status(500).send({
            message: err.message
          });
        }
        res.send(service);
      });
    }
  );
};

module.exports.update = (req, res) => {
  Service.findById(req.params.id, (err, service) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (!service) {
      return res.status(400).send({
        message: "Service not found."
      });
    }

    //service._id = req.body._id;
    service.title = req.body.title;
    service.thumbnail = req.body.thumbnail;
    service.description = req.body.description;

    service.save(err => {
      if (err) {
        return res.status(500).send({
          message: err.message
        });
      }
      res.send(service);
    });
  });
};

module.exports.delete = (req, res) => {
  Service.findById(req.params.id, (err, service) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (!service) {
      return res.status(400).send({
        message: "Service not found."
      });
    }
    Services.find(
      {
        _id: req.params.id
      },
      (err, services) => {
        service.remove(err => {
          if (err) {
            return res.status(500).send({
              message: err.message
            });
          }
          res.status(200).send({
            message: "Service successfully deleted."
          });
        });
      }
    );
  });
};
