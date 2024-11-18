const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email service
  auth: {
    user: 'defiwallet391@gmail.com',
    pass: 'kfxm nezz sdsw pvqz'
  }
});

app.post('/api/send-email', (req, res) => {
  const { walletAddress, network, amount } = req.body;

  const mailOptions = {
    from: 'moshaafrika@gmail.com',
    to: 'defiwallet391@gmail.com',
    subject: 'New Withdrawal Request',
    text: `A user has requested a withdrawal:\n\nWallet Address: ${walletAddress}\nNetwork: ${network}\nAmount: ${amount}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Export the app for Vercel
module.exports = app;
