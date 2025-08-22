const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(express.json());

// Make sure GEMINI_API_KEY is set in .env file
if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is required in .env file');
}

const googleAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const model = googleAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // Choose the desired Gemini model
    const result = await model.generateContent(prompt);
    const response = result.response.candidates[0].content.parts[0].text;
    console.log(response)

    res.json({ response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while generating content' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});