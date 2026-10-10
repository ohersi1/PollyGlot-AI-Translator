import React, { useState } from 'react'
import './TranslationForm.css'
function TranslationForm() {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [translatedView, setTranslatedView] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const rawResponse = await fetch('/api/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputText, selectedLanguage })
        });
        const content = await rawResponse.json();
        setLoading(false);
        setTranslatedView(true);
        setOutputText(content.message);
    }
    const handleReset = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInputText("");
        setOutputText("");
        setSelectedLanguage("");
        setTranslatedView(false);
    }
    return (
        <div>
            {loading ? <div className='loading'><h1>Loading...</h1></div> :
                !translatedView ?
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
                    </form> :
                    <form onSubmit={handleReset}>
                        <p className='first_p para'>Original text 👇</p>
                        <textarea id='inputText' value={inputText} disabled/>
                        <p className='second_p para'>Your translation 👇</p>
                        <textarea id='outputText' value={outputText} placeholder="Translation..." disabled />
                        <button type="submit">Start Over</button>
                    </form>
            }
        </div>
    )
}

export default TranslationForm
