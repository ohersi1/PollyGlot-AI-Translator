import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";

app.use(express.json());
app.post("/api/translate", async(req, res) => {
  const { inputText, selectedLanguage } = req.body;

  console.log(inputText);
  console.log(selectedLanguage);
  //   res.json(req.body);
  const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
res.json({message: response.output_text})
});



app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
