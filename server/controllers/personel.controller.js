const Personel = require("../models/Personel");

const _personelProjection = "name role editable";

module.exports.getPersonel = (req, res) => {
  Personel.find({}, _personelProjection, (err, personel) => {
    let personArr = [];
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    //res.set('Content-Type', 'text/html');

    if (personel) {
      personel.forEach(person => {
        personArr.push(person);
      });
    }

    res.send(personArr);
  });
};

module.exports.getAdminPersonel = (req, res) => {
  Personel.find({}, _personelProjection, (err, personel) => {
    let personelArr = [];
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (personel) {
      personel.forEach(img => {
        personelArr.push(img);
      });
    }

    res.send(personelArr);
  });
};

module.exports.getAdminPersonelDetail = (req, res) => {
  Personel.findById(req.params.id, (err, personel) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (!personel) {
      return res.status(400).send({
        message: "personel not found."
      });
    }
    res.send(personel);
  });
};

module.exports.create = (req, res) => {
  Personel.findOne(
    {
      name: req.body.name,
      role: req.body.role
    },
    (err, existingPersonel) => {
      if (err) {
        return res.status(500).send({
          message: err.message
        });
      }
      if (existingPersonel) {
        return res.status(409).send({
          message: "You already have this personel."
        });
      }

      const personel = new Personel({
        name: req.body.name,
        role: req.body.role,
        editable: req.body.editable
      });

      personel.save(err => {
        if (err) {
          return res.status(500).send({
            message: err.message
          });
        }
        res.send(personel);
      });
    }
  );
};

module.exports.update = (req, res) => {
  Personel.findById(req.params.id, (err, personel) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (!personel) {
      return res.status(400).send({
        message: "Personel not found."
      });
    }

    personel._id = req.body._id;
    personel.name = req.body.name;
    personel.role = req.body.role;
    personel.editable = req.body.editable;

    personel.save(err => {
      if (err) {
        return res.status(500).send({
          message: err.message
        });
      }
      res.send(personel);
    });
  });
};

module.exports.delete = (req, res) => {
  Personel.findById(req.params.id, (err, personel) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (!personel) {
      return res.status(400).send({
        message: "Personel not found."
      });
    }
    Personel.find(
      {
        _id: req.params.id
      },
      (err, person) => {
        personel.remove(err => {
          if (err) {
            return res.status(500).send({
              message: err.message
            });
          }
          res.status(200).send({
            message: "Personel successfully deleted."
          });
        });
      }
    );
  });
};
