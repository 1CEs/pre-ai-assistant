import { t } from "elysia"

export const QuestionValidatorSchema = t.Object({
    question: t.String({ description: "The question to ask the assistant" }),
    answer: t.String({ description: "The answer from the assistant" }),
    student_answer: t.String({
        description: "The student's answer to the question",
    }),
})