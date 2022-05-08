import { prisma } from "../../prisma";
import { FeedbackCreateDatabase, FeedbackRepository } from "../FeedbackRepository";

export class PrismaFeedbackRepository implements FeedbackRepository{
    async create ({type, comment, screenshot}: FeedbackCreateDatabase) {
        await prisma.feedback.create({
            data:{
                type,
                comment,
                screenshot
            }
        })
        
    }; 
}