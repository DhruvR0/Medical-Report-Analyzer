const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique file name
  }
});

// Initialize multer with storage configuration
const upload = multer({ storage: storage });

// Handle POST request to upload the PDF
app.post('/upload', upload.single('report'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  // Log the file info for debugging
  console.log(`File uploaded: ${req.file.filename}`);

  // Send response
  res.send({
    message: 'File uploaded successfully',
    file: req.file,
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
