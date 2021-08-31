export default async (req, res) => {
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
    try {
        const emailResponse = await transporter.sendMail(mailData);
        return res.status(200).json({ emailResponse });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}