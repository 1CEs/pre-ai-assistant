type QuestionValidatorPayload = {
    question: string;
    answer: string;
    student_answer: string;
}

type ReturnResponse = {
    status: number;
    message: string;
    data?: any;
}