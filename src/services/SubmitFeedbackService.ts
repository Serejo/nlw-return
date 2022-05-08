import { FeedbackRepository } from "../repositories/FeedbackRepository";

interface SubmitFeedbackServiceRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService {

    constructor(
        private feedbackRepository: FeedbackRepository,
    ){}

    async execute(request: SubmitFeedbackServiceRequest){ 
        const { type, comment, screenshot} = request;
        
        await this.feedbackRepository.create({
            type,
            comment,
            screenshot,
        })

    }
}