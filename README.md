
# PollyGlot AI Translator

PollyGlot is a full-stack AI-powered translation application that translates user-provided text into **French, Spanish, or Japanese** using the OpenAI API.

Built with **React, TypeScript, Node.js, and Express**, the application uses a backend API to handle translation requests securely, with the frontend and backend deployed separately.

## 🚀 Live Demo

**[Live Link](https://pollyglot.osmanhersi.co.uk)**

*Note: The backend is hosted on Render's free tier, so the first translation request may take longer while the server starts up.*

## 📸 Preview

*Screenshot of the application coming soon.*

## ✨ Features

- **AI-Powered Translation** – Translates user-provided text into French, Spanish, or Japanese using the OpenAI API.
- **Interactive React Interface** – Users enter text, select a language, and view the translated result.
- **Loading and Error States** – Displays loading feedback during API requests and user-friendly messages when requests fail.
- **Input Validation** – Validates submitted text and supported languages, with a 2,000-character input limit.
- **Secure API Integration** – Routes OpenAI requests through an Express backend, keeping the API key out of the frontend.
- **Environment-Based Configuration** – Uses environment variables to manage API credentials, frontend origins, and deployment URLs.

## 🧑‍💻 How It Works

1. The user enters text and selects French, Spanish, or Japanese.
2. The React frontend sends a POST request to the Express `/api/translate` endpoint.
3. The backend validates the input text and selected language.
4. The backend sends the translation request to the OpenAI Responses API, using instructions to control the model's translation behaviour.
5. The translated response is returned as JSON and displayed in the React interface.
6. Users can start another translation using the **Start Over** button.

The frontend handles loading states, unsuccessful HTTP responses, and network errors to provide a smoother user experience.

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- HTML & CSS

### Backend
- Node.js
- Express
- CORS
- dotenv

### AI
- OpenAI Responses API

### Deployment
- **Hostinger** – React frontend hosted on a custom subdomain
- **Render** – Express backend deployed as a web service
- **GitHub** – Version control and source repository

## 💻 Running Locally

### Prerequisites

- Node.js and npm
- An OpenAI API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ohersi1/PollyGlot-AI-Translator.git
   ```

2. Navigate into the project:

   ```bash
   cd pollyglot-ai-translator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root, using `.env.example` as a reference:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

5. Start the Express backend in one terminal:

   ```bash
   npm start
   ```

6. Start the React development server in another terminal:

   ```bash
   npm run dev
   ```

7. Open the local URL displayed by Vite, typically `http://localhost:5173`.

The Vite development proxy forwards requests from `/api` to the Express server running on port 3000.

For local development, leave `VITE_API_URL` unset so requests use the Vite proxy.

## 🔐 Security

- The OpenAI API key is stored server-side using environment variables and is never included in the frontend bundle.
- Sensitive `.env` files are excluded from Git using `.gitignore`.
- Backend validation checks input type, length, and supported languages before sending requests to OpenAI.
- CORS restricts which browser origins can access the backend; it does not prevent direct API requests.
- API errors are handled without exposing internal server error details to users.

## 🧠 What I Learned

Building PollyGlot helped me apply AI engineering concepts to a complete, deployed application.

Key areas of learning included:

- Integrating the OpenAI Responses API into an Express backend.
- Using AI instructions to control translation behaviour.
- Building asynchronous API requests with React and TypeScript.
- Handling loading states, HTTP errors, and failed network requests.
- Implementing server-side input validation and error handling.
- Managing environment variables across local development and production.
- Configuring CORS for communication between separately hosted frontend and backend applications.
- Deploying a React application to Hostinger and an Express API to Render.
- Managing Git commits and synchronising local changes with GitHub.

## 👤 Author

**Osman Hersi**

- [Portfolio Website](https://www.osmanhersi.co.uk/)
- [GitHub](https://github.com/ohersi1)

## 🙏 Acknowledgements

PollyGlot was developed from a project challenge in Scrimba's **Intro to AI Engineering** course.

I extended the learning exercise by using React with TypeScript, implementing backend validation and error handling, and deploying the completed frontend and backend as a live full-stack application.
