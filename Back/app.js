// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const path = require("path");
// const router = require("./routes/configRoutes");
// const { connectToDB } = require("./db/mongo");
// const cookieParser = require("cookie-parser");
// require("dotenv").config();

// const app = express();

// const initServer = async () => {
//   await connectToDB();

//   createServer();
//   const server = http.createServer(app);
//   const port = process.env.PORT || 3010;
//   server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// };

// initServer();

// const createServer = async () => {
//   app.use(
//     cors({
//       // origin: "https://daniela-clinic.netlify.app",
//       origin: "http://localhost:3000",
//       credentials: true,
//     })
//   );

//   app.use(express.json());
//   app.use(cookieParser());
//   app.use("/images", express.static(path.join(__dirname, "Images")));
//   app.use(router);
// };

const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const cors = require("cors");
require("dotenv").config();
// const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3005;

const twilioClient = twilio(process.env.Account_SID, process.env.Auth_Token);

app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://netanel-lewinstein.onrender.com",
  })
);

app.post("/send-whatsapp", async (req, res) => {
  const { name, phone } = req.body;
  const whatsappMessage = `שלום, אני ${name} ואני מעוניין ליצור קשר. מספר טלפון: ${phone}`;

  try {
    await twilioClient.messages.create({
      from: `whatsapp:${process.env.Twilio_phone_number}`,
      to: `whatsapp:+972543644512`,
      body: whatsappMessage,
    });
    res.status(200).send("WhatsApp message sent successfully");
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    res.status(500).send("Failed to send WhatsApp message");
  }
});

// const transporter = nodemailer.createTransport({
//   service: "gmail", // or any other email service
//   auth: {
//     user: "your-email@gmail.com",
//     pass: "your-email-password", // use environment variables in production
//   },
// });

// app.post("/send-email", (req, res) => {
//   const { name, phone } = req.body;
//   const emailSubject = "New Contact Request";
//   const emailBody = `Name: ${name}\nPhone: ${phone}`;

//   const mailOptions = {
//     from: "your-email@gmail.com",
//     to: "recipient-email@example.com", // Change to recipient email
//     subject: emailSubject,
//     text: emailBody,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       return res.status(500).send("Failed to send email");
//     }
//     res.status(200).send("Email sent successfully");
//   });
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
