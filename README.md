# PollyGlot AI Translator

PollyGlot is an AI-powered translation app that translates user-provided text into one of three preset languages: **French, Spanish, or Japanese**.

The project is being built as the final challenge from the **Intro to AI Engineering** chapter on Scrimba, applying concepts including AI API integration, prompting, system and user roles, and securely handling API requests.

I'm also using the project to put my **TypeScript** knowledge into practice by building the application with React and TypeScript.

## 🚧 Project Status

PollyGlot is currently under development.

## ✨ Features

- **AI-Powered Translation**  
  Translates user-provided text using an AI model rather than relying on predefined translations.

- **Three Translation Languages**  
  Users can translate their text into **French, Spanish, or Japanese**.

- **Simple Translation Interface**  
  Users enter a word, phrase, or longer piece of text, select their desired language, and receive the translated result.

- **Prompt-Controlled AI Behaviour**  
  System instructions define the AI's role and expected translation behaviour, while the user's input is supplied separately as the content to translate.

- **Secure API Integration**  
  AI requests are handled through a backend so that sensitive credentials such as API keys are not exposed in the browser.

- **Type-Safe Development**  
  Built with TypeScript to add static type checking to the React application and catch potential errors during development.

## 🧑‍💻 How It Works

1. The user enters the text they want to translate.
2. The user selects **French, Spanish, or Japanese**.
3. The React frontend sends the translation request to the backend.
4. The backend securely communicates with the AI API using an API key stored as an environment variable.
5. System instructions provide the AI with the context and rules required to behave as a translator.
6. The user's text and selected language are supplied to the model.
7. The translated response is returned to the frontend and displayed to the user.

## 🧠 What I'm Learning

PollyGlot was created to put the concepts from Scrimba's **Intro to AI Engineering** chapter into practice rather than only following individual coding examples.

Through this project, I'm applying my understanding of:

- Making requests to AI models using the OpenAI API.
- Working with AI instructions and user input.
- Using system instructions to control how an AI model should behave.
- Capturing and using model-generated responses inside an application.
- Understanding model parameters such as **temperature** and **top_p**, and how they can influence the randomness and variety of model responses.
- Keeping API keys and other sensitive information out of client-side code.
- Using Node.js and Express as a backend layer between the frontend and an external API.
- Managing sensitive configuration using environment variables and `process.env`.
- Applying TypeScript to a React project for stronger type safety.

The chapter also introduced **few-shot prompting**, where examples are included in a prompt to help produce more consistent model responses. PollyGlot provides an opportunity to consider when additional prompting techniques are useful and when simpler instructions are sufficient.

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- HTML
- CSS

### Backend

- Node.js
- Express

### AI

- OpenAI API

## 🔐 API Key Security

The OpenAI API key is stored as an environment variable and is **not exposed in the React frontend**.

The frontend communicates with the Node/Express backend, which accesses the API key through `process.env` and makes the request to the OpenAI API.

Environment files containing sensitive credentials should not be committed to the repository.

## 🚀 Live Demo

Coming soon.

## 📸 Preview

Coming soon.

## 👤 Author

- Osman Hersi
- [Portfolio Website](https://www.osmanhersi.co.uk/)
- [GitHub](https://www.github.com/ohersi1)

## 🙏 Acknowledgements

PollyGlot is based on a project challenge from Scrimba's **Intro to AI Engineering** course. The project is being completed as part of my AI engineering studies, with TypeScript incorporated independently to reinforce my previous TypeScript learning.