const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3005;

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

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
      to: `whatsapp:${process.env.WHATSAPP_PHONE_NUMBER}`,
      body: whatsappMessage,
    });

    res.status(200).send("WhatsApp message sent successfully");
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    res.status(500).send("Failed to send WhatsApp message");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
