import React from "react";

export default async (req, res) => {

    const fs = require('fs');

    const emailArray = fs.readFileSync('emailList.txt').toString();
    const jsEmailArray = JSON.parse(emailArray);

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.FORM_EMAIL,
            pass: process.env.FORM_PASSWORD,
        },
        secure: true,
    })
    const mailData = {
        from: process.env.FORM_EMAIL,
        to: jsEmailArray,
        subject: req.body.subject,
        text: `<h1>${req.body.title}</h1> <br/> <p>${req.body.bodyCopy}</p> <a href='https://www.youtube.com/'>Find out more</a>`,
        html: `<h1>${req.body.title}</h1> <br/> <p>${req.body.bodyCopy}</p> <a href='https://www.youtube.com/'>Find out more</a>`,
    }

    try {
        const emailResponse = await transporter.sendMail(mailData);
        return res.status(200).json({ emailResponse });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}