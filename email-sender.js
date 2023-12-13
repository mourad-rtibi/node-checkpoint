const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mouradrtibi9@gmail.com', 
    pass: '123456', 
  },
});

const mailOptions = {
  from: 'mouradrtibi9@gmail.com',
  to: 'test123@example.com',
  subject: 'Test Email',
  text: 'Hello from Node.js!',
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});