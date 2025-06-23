import cors from "@elysiajs/cors";
import { Elysia, t } from "elysia";
import { QuestionValidatorSchema } from "./schema/index.schema";

const app = new Elysia({ prefix: "/api" })
  .use(cors({ origin: "*" }))
  .get("/assistant", () => "Hello, Elysia!", {
    body: QuestionValidatorSchema,
  })

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
