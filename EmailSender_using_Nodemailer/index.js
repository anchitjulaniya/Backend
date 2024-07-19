const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

const transporter = nodemailer.createTransport({
    service : "gmail",
    host: "smtp@gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "anchitjulaniyaofficial@gmail.com",
        pass: "",
  },
});

app.use(express.json())

app.post("/send/mail", async (req, res) => {
  try {
    const receiverEmail = req.body.email;
    
    console.log(receiverEmail)

    const emailData = {
      to: receiverEmail,
      from: "do-not-reply@unknown.com",
      subject: "Your Friend is sharing a email with you!",
      html: `
            <p>Your friend has shared a file with you via filesharing app, please click the link to download the fil</p>
            `,
    };
    transporter.sendMail(emailData, (error, info) => {
        if (error){
        
        console.log(error);
        
        return res.json({
            success: false,
            message: "Unable to send email",
            error: error,
        });
        }
      
      console.log(info);
      
      res.json({
        status: true,
        message: "Email send successfully.",
      })

    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong. Please try again!",
      errorMessage: error
    });
  }
});

app.listen(4123, () => {
  console.log(`Server is running on 10000 port.`);
});
