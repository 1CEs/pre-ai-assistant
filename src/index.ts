import cors from "@elysiajs/cors";
import { Elysia, t } from "elysia";
import { QuestionValidatorSchema } from "./schema/index.schema";
import { AssistantController } from "./controller/assistant.controller";

const app = new Elysia({ prefix: "/api" })
  .use(cors({ origin: "*" }))
  .decorate("controller", new AssistantController())
  .get("/assistant", async ({ body, controller }) => controller.useAssistant(body), {
    body: QuestionValidatorSchema,
  })

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
