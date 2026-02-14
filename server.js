require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const OPENAI_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_KEY) {
    console.warn('WARNING: OPENAI_API_KEY not set. See .env.example');
}

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { message } = req.body || {};
    if (!message) return res.status(400).json({ error: 'message required' });

    try {
        const resp = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant that suggests projects, learning paths and practical advice based on user strengths and weaknesses.' },
                    { role: 'user', content: message }
                ],
                max_tokens: 500,
                temperature: 0.8
            })
        });

        if (!resp.ok) {
            const text = await resp.text();
            return res.status(502).json({ error: 'OpenAI error', detail: text });
        }

        const data = await resp.json();
        const reply = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content ? data.choices[0].message.content : '';
        res.json({ reply });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'server error' });
    }
});

app.listen(PORT, () => console.log(`AI proxy running on http://localhost:${PORT}`));
