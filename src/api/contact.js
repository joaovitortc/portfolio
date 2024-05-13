var express = require('express');
var app = express();
var postmark = require('postmark');
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());
app.use(cors());

// Send an email:
var client = new postmark.ServerClient(process.env.POSTMARK_SERVER_CLIENT);

app.post('/contact', async function (req, res) {
    const body = req.body;
    try {
      await client.sendEmail({
        From: process.env.EMAIL_FROM,
        To: process.env.EMAIL_TO,
        Subject: 'Porfolio Contact Form',
        HtmlBody: `
          <h1>Portfolio Contact Form</h1>
          <p><strong>Name:</strong> ${body.person_name}</p>
          <p><strong>Company:</strong> ${body.company}</p>
          <p><strong>Message:</strong> ${body.message}</p>
        `,
        ReplyTo: body.email,
      });
      res.status(200).send('ok');
    } catch (e) {
      console.log(e);
      res.status(500).send('error');
    }
});

app.listen(3001, function () {
  console.log('App is listening on port 3001!');
});