import React, { useState } from 'react'
import './TranslationForm.css'
function TranslationForm() {
    const [inputText, setInputText] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const rawResponse = await fetch('/api/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputText, selectedLanguage })
        });
        const content = await rawResponse.json();
        console.log(content);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p className='first_p para'>Text to translate 👇</p>
                <textarea id='inputText' value={inputText} onChange={e => setInputText(e.target.value)} placeholder="How are you?" required />
                <p className='second_p para'>Select language 👇</p>
                <div className="language_options">
                    <label><input id='french' type="radio" name="language" onChange={e => setSelectedLanguage(e.target.value)} value="french" required />French 🇫🇷</label>
                    <label><input id='spanish' type="radio" name="language" onChange={e => setSelectedLanguage(e.target.value)} value="spanish" required />Spanish 🇪🇸</label>
                    <label><input id='japanese' type="radio" name="language" onChange={e => setSelectedLanguage(e.target.value)} value="japanese" required />Japanese 🇯🇵</label>
                </div>
                <button type="submit">Translate</button>
            </form>
        </div>
    )
}

export default TranslationForm
