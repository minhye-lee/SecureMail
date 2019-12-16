const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()
const creactEmail = require('./email.js')

router.post("/api/submit", (req, res) => submitEmail(req, res))

module.exports = router

const submitEmail = (req, res) => {
    const sender = req.body.senderInfo
    const receiver = req.body.receiverInfo
    const content = req.body.contentInfo
    const config = {
        mailer : {
            service : 'Gmail',
            host : 'localhost',
            port : '465',
            user : sender.email,
            password : sender.password,
        }
    }
    creactEmail(content.text, content.password)
        .then((html) => {
            const FROM = sender.email
            const TO =  receiver.email
            const SUBJECT = content.title
            const mailOptions = {
                from : FROM,
                to : TO,
                subject : SUBJECT,
                attachments : [
                    {
                        filename : 'email.html',
                        content : html,

                    }
                ]
            }
            const transporter = nodemailer.createTransport({
                service : config.mailer.service,
                host : config.mailer.host,
                port : config.mailer.port,
                auth : {
                    user : config.mailer.user,
                    pass : config.mailer.password,
                }
            })

            transporter.sendMail(mailOptions, (error, res) => {
                if(error) {
                    console.log(error)
                    res.send({send : false})
                } else {
                    console.log('Email sent! : ', res)
                    res.send({send : true})
                }
            })

        })


}
