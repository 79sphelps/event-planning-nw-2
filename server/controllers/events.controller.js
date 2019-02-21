const mongoose = require('mongoose');
const Event = require('../models/Event');

const _eventProjection =
"title location groupSize eventType price purpose description " +
"viewPublic editable thumbnail";

module.exports.getEvents = (req, res) => {
    Event.find({}, _eventProjection, (err, events) => {
        let eventsArr = [];
        if (err) {
          return res.status(500).send({
            message: err.message
          });
        }
        if (events) {
          events.forEach(event => {
            eventsArr.push(event);
          });
        }
        res.send(eventsArr);
      });
}

module.exports.getAdminEvents = (req, res) => {
    Event.find({}, _eventProjection, (err, events) => {
      let eventsArr = [];
      if (err) {
        return res.status(500).send({
          message: err.message
        });
      }
      if (events) {
        events.forEach(event => {
          eventsArr.push(event);
        });
      }
      res.send(eventsArr);
    });
};

module.exports.getEvent = (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
          return res.status(500).send({
            message: err.message
          });
        }
        if (!event) {
          return res.status(400).send({
            message: "Event not found."
          });
        }
        res.send(event);
      });
}

module.exports.create = (req, res) => {
    Event.findOne(
        {
          title: req.body.title,
          location: req.body.location
        },
        (err, existingEvent) => {
          if (err) {
            return res.status(500).send({
              message: err.message
            });
          }
          if (existingEvent) {
            return res.status(409).send({
              message: "You already have this event."
            });
          }

          const event = new Event({
            title: req.body.title,
            location: req.body.location,
            groupSize: req.body.groupSize,
            eventType: req.body.eventType,
            price: req.body.price,
            purpose: req.body.purpose,
            description: req.body.description,
            viewPublic: req.body.viewPublic,
            editable: req.body.editable,
            thumbnail: req.body.thumbnail
          });

          event.save(err => {
            if (err) {
              return res.status(500).send({
                message: err.message
              });
            }
            res.send(event);
          });
        }
      );
}

module.exports.update = (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
          return res.status(500).send({
            message: err.message
          });
        }
        if (!event) {
          return res.status(400).send({
            message: "Event not found."
          });
        }

        event.title = req.body.title;
        event.location = req.body.location;
        event.groupSize = req.body.groupSize;
        event.eventType = req.body.eventType;
        event.price = req.body.price;
        event.purpose = req.body.purpose;
        event.description = req.body.description;
        event.viewPublic = req.body.viewPublic;
        event.editable = req.body.editable;
        event.thumbnail = req.body.thumbnail;

        event.save(err => {
          if (err) {
            return res.status(500).send({
              message: err.message
            });
          }
          res.send(event);
        });
      });
}

module.exports.delete = (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if (err) {
          return res.status(500).send({
            message: err.message
          });
        }
        if (!event) {
          return res.status(400).send({
            message: "Event not found."
          });
        }
        Event.find(
          {
            _id: req.params.id
          },
          (err, events) => {
            /*
          if (events) {
            events.forEach(event => {
              event.remove();
            });
          }
          */
            event.remove(err => {
              if (err) {
                return res.status(500).send({
                  message: err.message
                });
              }
              res.status(200).send({
                message: "Event successfully deleted."
              });
            });
          }
        );
      });
}
