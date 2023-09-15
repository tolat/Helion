require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const { handleCORS } = require("./utils/customMiddeware");
const favicon = require("serve-favicon");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: `${process.env.GOOGLE_APP_EMAIL}`,
    pass: `${process.env.GOOGLE_APP_PASSWORD}`,
  },
});

const app = express();
app.use(
  "/static",
  express.static(path.join(__dirname, "client/build/static/"))
);

app.use(favicon(__dirname + "/favicon.ico"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handle CORS
app.use((req, res, next) => {
  handleCORS(req, res, next);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// POST route for sending emailed message from the Contact form
app.post("/message", async (req, res) => {
  console.log("post message request received");
  try {
    await transporter.sendMail({
      from: req.body.email,
      to: `${process.env.GOOGLE_APP_EMAIL}`,
      subject: "Message From Heliosite ",
      text: `
      Name: ${req.body.firstName} ${req.body.lastName}\n
      Phone: ${req.body.phone}\n
      Email: ${req.body.email}\n\n
      ${req.body.message}`,
    });
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }

  res.send({ success: true });
});

// POST route for sending emailed quote request from the free quote form
app.post("/quote", async (req, res) => {
  console.log("post quote request received");
  try {
    await transporter.sendMail({
      from: req.body.userEmail,
      to: `${process.env.GOOGLE_APP_EMAIL}`,
      subject: "Quote Request From Helion Site",
      text: `
      Project Address: ${req.body.userAddress}\n
      Client Name: ${req.body.userFirstName} ${req.body.userLastName}\n
      Phone: ${req.body.userPhone}\n
      Email: ${req.body.userEmail}\n\n
      Roof Material: ${req.body.roofMaterial}\n
      Roof Age: ${req.body.roofAge}\n
      Average Bill: ${req.body.averageBill}\n
      Panel Rating: ${req.body.panelRating}\n`,
    });
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }

  res.send({ success: true });
});

app.get("*", (req, res) => {
  res.send("no path matched");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
