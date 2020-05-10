const nodemailer = require("nodemailer");

async function send_notification(to, question, answer) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ptmssigcra@gmail.com",
      pass: "itisoveranakin", // naturally, replace both with your real credentials or an application-specific password
    },
  });

  const html_message = `Ai primit un raspuns la intrebarea: <br/> ${question} <br/> Raspunsul tau este: <br/> ${answer}`;

  let info = await transporter.sendMail({
    from: "capraneagra@temapw.ro", // sender address
    to: to, // list of receivers
    subject: "Capra Neagra - Answer ", // Subject line
    html: html_message, // html body
  });

  console.log("Message sent: %s", info.messageId);
  return true;
}

async function send(to, id, rnd) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ptmssigcra@gmail.com",
      pass: "itisoveranakin", // naturally, replace both with your real credentials or an application-specific password
    },
  });

  const link_auth = `http://localhost:3000/cont/confirmare?id=${id}&rnd=${rnd}`;

  const html_message = `Bine ati venit la Capra Neagra!<br>Va rugam sa apasati <a href=\"${link_auth}\">aici</a> pentru activatea contului de membru!`;

  let info = await transporter.sendMail({
    from: "capraneagra@temapw.ro", // sender address
    to: to, // list of receivers
    subject: "Capra Neagra - Password Authentication", // Subject line
    html: html_message, // html body
  });

  console.log("Message sent: %s", info.messageId);
  return true;
}

module.exports = {
  send,
  send_notification,
};
