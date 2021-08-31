export default function (req, res) {
    console.log(process.env.FORM_EMAIL);
    let nodemailer = require('nodemailer')
    require('dotenv').config()
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
        to: 'abubakr.anwar@nbrown.co.uk',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}