export interface FeedbackCreateDatabase{
    type: string;
    comment: string;
    screenshot: string;
}

export interface FeedbackRepository {
    create: (data: FeedbackCreateDatabase) => Promise<void>;
}