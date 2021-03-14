const express = require('express');
const router = express.Router();
const aboutContent = require('../services/about-content');

router.get('/', async function(req, res, next) {
  try {
    const data = await aboutContent.getContent();
    res.json({ header: data[0][0], paragraphs: data[1]});
  }
  catch (err) {
    console.error(`Error while getting content `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await aboutContent.createContent(req.body));
  } catch (err) {
    console.error(`Error while creating content`, err.message);
    next(err);
  }
});

module.exports = router;
