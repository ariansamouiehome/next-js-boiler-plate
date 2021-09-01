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
        to: req.body.email,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + process.env.FORM_EMAIL,
        html: req.body.message
    }

    try {
        const emailResponse = await transporter.sendMail(mailData);
        return res.status(200).json({ emailResponse });
    } catch (err) {
        return res.status(500).json(err || { error: 'ERROR' });
    }
}