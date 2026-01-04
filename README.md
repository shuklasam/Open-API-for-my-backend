🚀 TSOA-Based OpenAPI Backend Server

A backend server built using Node.js, TypeScript, and tsoa to automatically generate OpenAPI (Swagger) documentation, enabling developers to explore and test APIs without diving into the codebase.

✨ Key Features

⚙️ Type-safe APIs using TypeScript

📜 Automatic OpenAPI (Swagger) generation with tsoa

🧩 Controller-based architecture

🧪 Interactive API testing via Swagger UI

🔒 Centralized request validation using decorators

📦 Clean and scalable backend structure

🛠️ Tech Stack

Node.js

TypeScript

tsoa

Express.js

OpenAPI / Swagger UI

📌 Why tsoa?

tsoa allows you to:

Define APIs using TypeScript decorators

Auto-generate OpenAPI specs

Enforce request/response validation

Keep documentation and implementation in sync

This removes the need to manually maintain API docs and reduces runtime bugs.

📂 Project Structure
├── src
│   ├── controllers      # API route controllers
│   ├── routes           # Auto-generated routes by tsoa
│   ├── models           # Request/Response models
│   ├── app.ts           # Express app configuration
│   └── server.ts        # Server bootstrap
├── build
├── tsoa.json
├── package.json
└── README.md

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install Dependencies
npm install

3️⃣ Generate OpenAPI Spec & Routes
npm run tsoa


This command:

Generates OpenAPI (swagger.json)

Creates route bindings automatically

4️⃣ Start the Server
npm run dev


The server will start on:

http://localhost:3000

📖 API Documentation (Swagger UI)

Once the server is running, access the API documentation at:

http://localhost:3000/docs

🔍 What You Can Do

Explore all available endpoints

View request/response schemas

Test APIs directly from the browser

Understand the backend without reading source code

🧪 Example Controller (tsoa)
@Route("users")
@Tags("Users")
export class UserController extends Controller {

  @Get("{userId}")
  public async getUser(
    @Path() userId: number
  ): Promise<User> {
    return getUserById(userId);
  }
}


➡️ This automatically reflects in Swagger documentation.

🧩 Available Scripts
npm run dev       # Start development server
npm run build     # Build the project
npm run tsoa      # Generate OpenAPI spec & routes

📈 Benefits of OpenAPI Integration

No need to read backend code

Faster frontend-backend collaboration

Clear contract between services

Easy API testing and onboarding

🧑‍💻 Ideal Use Cases

Backend services for frontend teams

Public or internal API platforms

Microservices architecture

Rapid prototyping with strong typing
