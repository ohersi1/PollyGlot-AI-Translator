import React, { useState } from 'react'

function TranslationForm() {
    const [inputText, setInputText] = useState("");
    const [SelectedLanguage, setSelectedLanguage] = useState("");
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const rawResponse = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputText, SelectedLanguage })
        });
        const content = await rawResponse.json();

        console.log(content);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Text to translate</p>
                <textarea value={inputText} onChange={e => setInputText(e.target.value)} placeholder="How are you?" required/>
                <p>Select language</p>
                <input type="radio" name="language" onChange={e => setSelectedLanguage(e.target.value)}  value="french" required/>
                <label>French</label>

                <input type="radio" name="language" onChange={e => setSelectedLanguage(e.target.value)} value="spanish" required/>
                <label>Spanish</label>

                <input type="radio" name="language" onChange={e => setSelectedLanguage(e.target.value)} value="japanese" required/>
                <label>Japanese</label>

                <button type="submit">Translate</button>
            </form>
        </div>
    )
}

export default TranslationForm
