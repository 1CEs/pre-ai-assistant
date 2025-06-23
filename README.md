# AI Teaching Assistant API

A lightweight API service that provides AI-powered answer validation for educational purposes. This service evaluates student answers against provided correct answers using the OpenRouter AI platform.

## Features

- 🚀 Fast and lightweight API built with Elysia.js and Bun
- 🤖 Integrates with OpenRouter AI for answer validation
- 📝 Evaluates student answers with detailed feedback
- 🔒 CORS enabled for easy frontend integration
- 📦 TypeScript support out of the box

## Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or later)
- [OpenRouter API Key](https://openrouter.ai/)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pre-ai-assistant
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env` file in the root directory and add your OpenRouter API key:
```env
OPEN_ROUTER_API_KEY=your_openrouter_api_key_here
```

## Usage

### Running the Server

Start the development server:
```bash
bun run dev
```

The server will start on `http://localhost:3000`.

### API Endpoint

#### POST `/api/assistant`

Evaluate a student's answer against the correct answer.

**Request Body:**
```json
{
  "question": "What is the capital of France?",
  "answer": "The capital of France is Paris.",
  "student_answer": "Paris is the capital of France."
}
```

**Response:**
```json
{
  "status": 200,
  "message": "OK",
  "data": {
    "id": "chatcmpl-123",
    "object": "chat.completion",
    "created": 1685474884,
    "model": "google/gemma-3-27b-it:free",
    "choices": [
      {
        "index": 0,
        "message": {
          "role": "assistant",
          "content": "ถูก"
        },
        "finish_reason": "stop"
      }
    ],
    "usage": {
      "prompt_tokens": 42,
      "completion_tokens": 1,
      "total_tokens": 43
    }
  }
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages for different scenarios:

- `400 Bad Request`: Missing required fields in the request body
- `500 Internal Server Error`: Missing API key or other server-side errors
- `5xx`: Errors from the OpenRouter API

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPEN_ROUTER_API_KEY` | Yes | Your OpenRouter API key |

## Development

### Project Structure

```
src/
├── controller/          # Request handlers
│   └── assistant.controller.ts
├── schema/              # Request/Response schemas
│   └── index.schema.ts
├── types/               # TypeScript type definitions
│   └── index.d.ts
├── utils/               # Utility functions
│   └── prompt.ts
└── index.ts             # Application entry point
```

### Available Scripts

- `bun run dev`: Start the development server with hot-reload
- `bun test`: Run tests (TBD)

## Deployment

This application is designed to be deployed on any platform that supports Node.js applications. For production deployment:

1. Set the appropriate environment variables
2. Build the application (if needed)
3. Start the server

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.