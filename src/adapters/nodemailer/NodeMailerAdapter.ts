import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0018ee1920475b",
      pass: "a4e3fc8af96c7d"
    }
  });

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
       await  transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to:'Erick Serejo <erick.erfs@gmail.com>',
        subject,
        html: body,
    
    })
    };

}