import cors from "@elysiajs/cors";
import { Elysia, t } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .use(cors({ origin: "*" }))
  .get("/assistant", () => "Hello, Elysia!", {
    body: t.Object({
      question: t.String({ description: "The question to ask the assistant" }),
      answer: t.String({ description: "The answer from the assistant" }),
      student_answer: t.String({
        description: "The student's answer to the question",
      }),
    }),
  })

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
