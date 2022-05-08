import express from "express"
import nodemailer from "nodemailer"
import { prisma } from "./prisma";

export const routes = express.Router();


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0018ee1920475b",
      pass: "a4e3fc8af96c7d"
    }
  });

routes.post('/feedback', async (req, res)=> {
    const {type , comment, screenshot} = req.body;

    const feedback = 

    transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to:'Erick Serejo <erick.erfs@gmail.com>',
        subject: 'Novo feedback',
        html:[
            `<div stype="font-family: sans-serif, font-size:16px, color:#111;">`,
            `<p>Tipo do feedback ${type} </p>`,
            `<p>Comentário do feedback ${comment} </p>`,
            `</div>`
        ].join('')
    
    })
 return res.status(201).json({data: feedback})   
}) 