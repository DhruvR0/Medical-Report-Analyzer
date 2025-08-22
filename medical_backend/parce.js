const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse'); // PDF parsing library
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Set up Multer for file uploads
const upload = multer(); 

// Route for handling PDF file upload and parsing
app.post('/upload', upload.single('report'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    // Parse the PDF using pdf-parse
    const pdfBuffer = req.file.buffer; // Get the file buffer from the uploaded file
    const data = await pdfParse(pdfBuffer); // Parse the PDF data

    // Log and return the extracted text
    console.log('PDF Text:', data.text); // You can process this text as needed
    res.json({ success: true, text: data.text });

  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).json({ success: false, message: 'Error parsing PDF' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
