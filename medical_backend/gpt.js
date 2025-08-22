const express = require('express');
const axios = require('axios');
const pdfParse = require('pdf-parse');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 5000; // Changed from 3000 to avoid conflicts
app.use(cors());

// Set up Multer for file upload
const upload = multer({ storage: multer.memoryStorage() });

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle PDF upload, parsing, and sending parsed text to OpenAI GPT
app.post('/api/upload-pdf', upload.single('pdf'), async (req, res) => {
    if (!req.file) {

        return res.status(400).json({ error: 'PDF file is required' });
    }

    try {
        // Parse the PDF content
        const data = await pdfParse(req.file.buffer);

        const prompt = `You are an AI bot designed to analyze medical reports. Here is the patient's report:

${JSON.stringify(data, null, 2)}

Follow this JSON structure for your response:
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
}`;

        // Ensure API Key is set
        if (!process.env.OPENAI_API_KEY) {
            return res.status(500).json({ error: 'Missing OpenAI API Key in .env file' });
        }

        // Call OpenAI API
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo", // Use GPT-4 if necessary
                messages: [{ role: 'user', content: prompt }],
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Secure API key
                    'Content-Type': 'application/json',
                },
            }
        );

        // Send GPT response back to client
        res.json({ gptResponse: response.data.choices[0]?.message?.content });

    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to process PDF or communicate with OpenAI API' });
    }
});

// Start the Express.js server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// const express = require('express');
// const axios = require('axios');
// const pdfParse = require('pdf-parse');
// const cors = require('cors');
// const multer = require('multer');
// require('dotenv').config(); // Load environment variables from .env file

// const app = express();
// const port = 5000;

// // Enable CORS
// app.use(cors());

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Multer setup for in-memory file upload
// const upload = multer({ storage: multer.memoryStorage() });

// // ✅ Health check route
// app.get('/', (req, res) => {
//     res.send('✅ Backend is working');
// });

// // 📄 PDF Upload Route
// app.post('/api/upload-pdf', upload.single('pdf'), async (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ error: 'PDF file is required' });
//     }

//     try {
//         // Parse the PDF content
//         const data = await pdfParse(req.file.buffer);
//         console.log("📄 Parsed PDF Text Length:", data.text.length);

//         const prompt = `You are an AI bot designed to analyze medical reports. Here is the patient's report:

// ${JSON.stringify(data, null, 2)}

// Follow this JSON structure for your response:
// {
//   "patient_info": {
//     "patient_id": "string",
//     "name": "string",
//     "age": "integer",
//     "gender": "string",
//     "date_of_birth": "YYYY-MM-DD",
//     "report_date": "YYYY-MM-DD",
//     "doctor": "string",
//     "hospital": "string"
//   },
//   "report_details": {
//     "report_type": "string", 
//     "report_summary": "string",
//     "report_sections": [
//       {
//         "section_title": "string",
//         "findings": "string",
//         "conclusion": "string",
//         "data": {
//           "parameters": [
//             {
//               "name": "string",
//               "value": "string/number",
//               "units": "string",
//               "reference_range": "string"
//             }
//           ]
//         }
//       }
//     ]
//   },
//   "analysis": {
//     "diagnosis": [
//       {
//         "condition": "string",
//         "severity": "mild/moderate/severe",
//         "description": "string"
//       }
//     ],
//     "treatment_recommendations": [
//       {
//         "treatment": "string",
//         "medication": {
//           "name": "string",
//           "dosage": "string",
//           "duration": "string"
//         },
//         "other_treatment": "string"
//       }
//     ],
//     "lifestyle_recommendations": [
//       {
//         "recommendation": "string",
//         "description": "string"
//       }
//     ],
//     "follow_up": {
//       "required": true,
//       "follow_up_date": "YYYY-MM-DD",
//       "tests_suggested": [
//         {
//           "test_name": "string",
//           "reason": "string"
//         }
//       ]
//     }
//   },
//   "additional_info": {
//     "general_health_advice": [
//       {
//         "topic": "string",
//         "advice": "string"
//       }
//     ],
//     "related_articles": [
//       {
//         "title": "string",
//         "link": "string"
//       }
//     ]
//   }
// }`;

//         // Make sure the OpenAI API key is available
//         if (!process.env.OPENAI_API_KEY) {
//             console.error("❌ Missing OpenAI API Key");
//             return res.status(500).json({ error: 'Missing OpenAI API Key in .env file' });
//         }

//         // Call OpenAI API
//         const response = await axios.post(
//             'https://api.openai.com/v1/chat/completions',
//             {
//                 model: "gpt-3.5-turbo",
//                 messages: [{ role: 'user', content: prompt }],
//             },
//             {
//                 headers: {
//                     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//                     'Content-Type': 'application/json',
//                 },
//             }
//         );

//         // ✅ Send GPT response back to frontend
//         console.log("✅ GPT response received");
//         res.json({ gptResponse: response.data.choices[0]?.message?.content });

//     } catch (error) {
//         console.error("🔴 Error occurred while processing:");
//         if (error.response) {
//             console.error("🧾 Response Data:", error.response.data);
//             console.error("📟 Status:", error.response.status);
//             console.error("📋 Headers:", error.response.headers);
//         } else if (error.request) {
//             console.error("📡 No response received:", error.request);
//         } else {
//             console.error("❌ Error message:", error.message);
//         }

//         res.status(500).json({ error: 'Failed to process PDF or communicate with OpenAI API' });
//     }
// });

// // 🚀 Start Server
// app.listen(port, () => {
//     console.log(`✅ Server running at: http://localhost:${port}`);
// });
