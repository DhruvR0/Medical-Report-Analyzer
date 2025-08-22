const express = require('express');
const multer = require('multer');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const pdfParse = require('pdf-parse'); // Assuming this is needed for PDF parsing
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies

const upload = multer(); // Set up multer for handling file uploads
const genAI = new GoogleGenerativeAI('AIzaSyC3IUYEi5I1n9HWKBVxPUYE3TE1PGL9BOk');

async function generateDietPlan(userInformation) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-flush-1.5' });

    const prompt = `
You are an AI bot designed to analyze the medical report. Here is patient information:

${JSON.stringify(userInformation, null, 2)}

and you have to follow the following output structure 

{
  "patient_info": {
    "patient_id": "string",
    "name": "string",
    "age": "integer",
    "gender": "string",
    "date_of_birth": "YYYY-MM-DD",
    "report_date": "YYYY-MM-DD",
    "doctor": "string",
    "hospital": "string"
  },
  "report_details": {
    "report_type": "string", 
    "report_summary": "string",
    "report_sections": [
      {
        "section_title": "string",
        "findings": "string",
        "conclusion": "string",
        "data": {
          "parameters": [
            {
              "name": "string",
              "value": "string/number",
              "units": "string",
              "reference_range": "string"
            }
          ],
          "images": [
            {
              "image_type": "string",
              "description": "string",
              "image_url": "string"
            }
          ]
        }
      }
    ]
  },
  "analysis": {
    "diagnosis": [
      {
        "condition": "string",
        "severity": "mild/moderate/severe",
        "description": "string"
      }
    ],
    "treatment_recommendations": [
      {
        "treatment": "string",
        "medication": {
          "name": "string",
          "dosage": "string",
          "duration": "string"
        },
        "other_treatment": "string"
      }
    ],
    "lifestyle_recommendations": [
      {
        "recommendation": "string",
        "description": "string"
      }
    ],
    "follow_up": {
      "required": true,
      "follow_up_date": "YYYY-MM-DD",
      "tests_suggested": [
        {
          "test_name": "string",
          "reason": "string"
        }
      ]
    }
  },
  "additional_info": {
    "general_health_advice": [
      {
        "topic": "string",
        "advice": "string"
      }
    ],
    "related_articles": [
      {
        "title": "string",
        "link": "string"
      }
    ]
  }
}

if any value is null then give reason why is it null
 .
`;

    const result = await model.generateContent(prompt);
    const response = result.response.candidates[0].content.parts[0].text;

    console.log('Raw response:', response); // Log the raw response

    // // Clean and parse the response
    // let cleanResponse = response.replace(/^ JSON\n/, '').trim();
    // console.log('Cleaned response:', cleanResponse); // Log cleaned response

    // let jsonString = cleanResponse.replace(/json/gi, '');
    // console.log('JSON string:', jsonString); // Log the JSON string

    // const dietPlan = JSON.parse(jsonString);
    // return dietPlan;/
    return response;
  } catch (error) {
    console.error('Error generating diet plan:', error);
    throw error;
  }
}

app.post('/upload', upload.single('report'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    // Parse PDF data (if you are uploading a PDF)
    const userInformation = await pdfParse(req.file.buffer);
    // console.log(userInformation);

    const dietPlan = await generateDietPlan(userInformation.text); // Assuming userInformation contains a 'text' property
    console.log('Medical report:', dietPlan);

    res.json({ success: true, gemini: dietPlan });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Error generating medical report' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


