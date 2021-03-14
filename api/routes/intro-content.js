const express = require('express');
const router = express.Router();
const introContent = require('../services/intro-content');

router.get('/', async function(req, res, next) {
  try {
    res.json(await introContent.getContent());
  }
  catch (err) {
    console.error(`Error while getting content `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await introContent.createContent(req.body));
  } catch (err) {
    console.error(`Error while creating content`, err.message);
    next(err);
  }
});

module.exports = router;
