# sign-up-register-app

This project uses Node.js with the Express framework to create a web server that serves a registration form. The server renders an EJS (Embedded JavaScript) template and serves static files.

**Server-Side Code**

The server-side code is written in JavaScript using Express. Here are the main components:

**Dependencies:**

Express is required for server handling.
EJS is used as the view engine.

**Configuration:**

The server listens on port 3000 or a port specified by the environment variable.
JSON payloads are parsed using express.json().
Static files are served from the "views" directory.

**Routes:**

The root route ("/") renders a registration form from an EJS template.
An error-handling middleware sends a JSON response in case of server errors.

**Server Initialization:**

The server starts listening on the specified port and logs a message.

**Client-Side Code**

The client-side code is an HTML file with embedded JavaScript for form validation.

**HTML Structure:**

Contains a registration form with fields for full name, email, password, and confirm password.
Uses Bootstrap for styling and Google Fonts for typography.

**Validation Scripts:**

JavaScript functions to validate email format and ensure password and confirm password fields match.


<img width="960" alt="Screenshot 2024-07-30 091100" src="https://github.com/user-attachments/assets/e79b9f9e-f6ca-4f21-9612-7a862f0196d1">

<img width="960" alt="Screenshot 2024-07-30 091159" src="https://github.com/user-attachments/assets/a8bd0dc5-3bdb-4c8f-bdb4-9401497e33eb">

