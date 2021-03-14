const express = require('express');
const router = express.Router();
const contactContent = require('../services/contact-content');

router.get('/', async function(req, res, next) {
  try {
    res.json(await contactContent.getContent());
  }
  catch (err) {
    console.error(`Error while getting content `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await contactContent.createContent(req.body));
  } catch (err) {
    console.error(`Error while creating content`, err.message);
    next(err);
  }
});

module.exports = router;
