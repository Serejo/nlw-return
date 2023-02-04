import { SubmitFeedbackService } from "./SubmitFeedbackService";

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () =>{
        const submitFeedback = new SubmitFeedbackService(
            {create: async () => {}},
            {sendMail: async ()=> {}}
        )


       await expect(submitFeedback.execute({
            type: "BUG",
            comment: "exemple comment",
            screenshot: "teste,jpg"
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendEmailSpy).toHaveBeenCalled();
    });

});