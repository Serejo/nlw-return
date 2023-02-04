import { MailAdapter } from "../adapters/MailAdapter";
import { FeedbackRepository } from "../repositories/FeedbackRepository";

interface SubmitFeedbackServiceRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService {

    constructor(
        private feedbackRepository: FeedbackRepository,
        private mailAdapter: MailAdapter,
    ){}

    async execute(request: SubmitFeedbackServiceRequest){ 
        const { type, comment, screenshot} = request;
        
        await this.feedbackRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                `<div stype="font-family: sans-serif, font-size:16px, color:#111;">`,
                `<p>Tipo do feedback ${type} </p>`,
                `<p>Comentário do feedback ${comment} </p>`,
                `</div>`
            ].join('\n')
        })

    }
}