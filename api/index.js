const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const introContent = require('./routes/intro-content');
const skillsContent = require('./routes/skills-content');
const aboutContent = require('./routes/about-content');
const experienceContent = require('./routes/experience-content');
const testimonialsContent = require('./routes/testimonials-content');
const contactContent = require('./routes/contact-content');
const cors = require('cors');

app.options('*', cors());
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/introSection', introContent);
app.use('/skillsSection', skillsContent);
app.use('/experienceSection', experienceContent);
app.use('/testimonialsSection', testimonialsContent);
app.use('/aboutSection', aboutContent);
app.use('/contactSection', contactContent);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});


  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
