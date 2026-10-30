import React, { useState } from "react";
import "./TranslationForm.css";

function TranslationForm() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [translatedView, setTranslatedView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const rawResponse = await fetch(
        `${import.meta.env.VITE_API_URL || ""}/api/translate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputText, selectedLanguage }),
        },
      );
      if (!rawResponse.ok) {
        throw new Error("Translation failed");
      }
      const content = await rawResponse.json();

      if (!rawResponse.ok) {
        throw new Error(content.error || "Translation failed.");
      }

      setOutputText(content.message);
      setTranslatedView(true);
    } catch (err) {
      console.error("Translation error:", err);
      handleReset(e);

      setError("Unable to translate your text. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputText("");
    setOutputText("");
    setSelectedLanguage("");
    setTranslatedView(false);
    setError("");
  };

  return (
    <main>
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : !translatedView ? (
        <form onSubmit={handleSubmit}>
          <p className="first_p para">Text to translate 👇</p>

          <textarea
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="How are you?"
            maxLength={2000}
            required
          />

          <p className="second_p para">Select language 👇</p>

          <div className="language_options">
            <label>
              <input
                id="french"
                type="radio"
                name="language"
                onChange={(e) => setSelectedLanguage(e.target.value)}
                value="French"
                required
              />
              French 🇫🇷
            </label>

            <label>
              <input
                id="spanish"
                type="radio"
                name="language"
                onChange={(e) => setSelectedLanguage(e.target.value)}
                value="Spanish"
                required
              />
              Spanish 🇪🇸
            </label>

            <label>
              <input
                id="japanese"
                type="radio"
                name="language"
                onChange={(e) => setSelectedLanguage(e.target.value)}
                value="Japanese"
                required
              />
              Japanese 🇯🇵
            </label>
          </div>

          {error && (
            <p role="alert" className="error">
              {error}
            </p>
          )}

          <button type="submit">Translate</button>
        </form>
      ) : (
        <form onSubmit={handleReset}>
          <p className="first_p para">Original text 👇</p>
          <textarea id="inputText" value={inputText} disabled />

          <p className="second_p para">Your translation 👇</p>
          <textarea
            id="outputText"
            value={outputText}
            placeholder="Translation..."
            disabled
          />

          <button type="submit">Start Over</button>
        </form>
      )}
    </main>
  );
}

export default TranslationForm;