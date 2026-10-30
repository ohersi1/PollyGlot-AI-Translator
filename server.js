import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";
import cors from "cors";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
  }),
);

app.use(express.json({ limit: "10kb" }));

app.post("/api/translate", async (req, res) => {
  try {
    const { inputText, selectedLanguage } = req.body ?? {};

    // Check the text is valid
    if (
      typeof inputText !== "string" ||
      !inputText.trim() ||
      inputText.length > 2000
    ) {
      return res.status(400).json({
        error: "Please enter text between 1 and 2000 characters.",
      });
    }

    const supportedLanguages = ["French", "Spanish", "Japanese"];

    if (!supportedLanguages.includes(selectedLanguage)) {
      return res.status(400).json({
        error: "Please select a supported language.",
      });
    }

    const response = await client.responses.create({
      model: "gpt-6-luna",
      instructions: `
        You are a translation assistant.
        Translate the provided text into the requested target language.
        Return only the translated text.
      `,
      input: `
        Text: ${inputText}
        Target language: ${selectedLanguage}
      `,
    });

    return res.json({
      message: response.output_text,
    });
  } catch (error) {
    console.error("Translation error:", error);

    return res.status(500).json({
      error: "Translation failed. Please try again.",
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
