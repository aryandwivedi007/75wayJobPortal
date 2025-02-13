import nodemailer from 'nodemailer';

export const sendEMail = async (
  toEmail: string,
  subject: string,
  text: string,
  htmlBody: string
) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.PORTAL_EMAIL,
      pass: process.env.PORTAL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.PORTAL_EMAIL,
    to: toEmail,
    subject: subject,
    text: text,
    html: htmlBody,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(`Error: ${error}`);
    }
    console.log(`Message Sent: ${info.response}`);
  });
};
