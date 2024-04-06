
// const nodemailer = require('nodemailer');

// // Create a transporter using SMTP transport
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'mr.tomar18@gmail.com', // Your Gmail email address
//     pass: 's.s.tomar', // Your Gmail password or app-specific password
//   },
// });

// // Function to send email
// const sendEmail = async (to, subject, text) => {
//   try {
//     const mailOptions = {
//       from: 'your-email@gmail.com', // Sender email address
//       to, // Recipient email address
//       subject,
//       text,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.response);
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

// module.exports = sendEmail;
