const Homepage = require("../models/Homepage");

const _homepageProjection =
  "welcomeMsg aboutMsg aboutQuote personHighlight personHighlightQuote" +
  " personHighlightBio personHighlightThumbnail" +
  " personHighlightThumbnailCaption editable";

module.exports.getHomepage = (req, res) => {
  Homepage.find({}, _homepageProjection, (err, homepageDetails) => {
    let homepageArr = [];
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }

    if (homepageDetails) {
      homepageDetails.forEach(homepageDetail => {
        homepageArr.push(homepageDetail);
      });
    }

    res.send(homepageArr[0]);
  });
};

module.exports.getHomepageDetail = (req, res) => {
  Homepage.findById(req.params.id, (err, homepage) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (!homepage) {
      return res.status(400).send({
        message: "Homepage not found."
      });
    }
    res.send(homepage);
  });
};

module.exports.update = (req, res) => {
  Homepage.findById(req.params.id, (err, homepage) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (!homepage) {
      return res.status(400).send({
        message: "Homepage not found."
      });
    }

    homepage.welcomeMsg = req.body.welcomeMsg;
    homepage.aboutMsg = req.body.aboutMsg;
    homepage.aboutQuote = req.body.aboutQuote;
    homepage.personHighlight = req.body.personHighlight;
    homepage.personHighlightQuote = req.body.personHighlightQuote;
    homepage.personHighlightBio = req.body.personHighlightBio;
    homepage.personHighlightThumbnail = req.body.personHighlightThumbnail;
    homepage.personHighlightThumbnailCaption =
      req.body.personHighlightThumbnailCaption;
    homepage.editable = req.body.editable;

    homepage.save(err => {
      if (err) {
        return res.status(500).send({
          message: err.message
        });
      }
      res.send(homepage);
    });
  });
};
