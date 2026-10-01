import React from 'react'

function TranslationForm() {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Text to translate</p>
                <textarea />
                <p>Select language</p>
                <input type="radio" value="french" />
                <label>French</label>

                <input type="radio" value="spanish" />
                <label>Spanish</label>

                <input type="radio" value="japanese" />
                <label>Japanese</label>

                <button type="submit">Translate</button>
            </form>
        </div>
    )
}

export default TranslationForm
