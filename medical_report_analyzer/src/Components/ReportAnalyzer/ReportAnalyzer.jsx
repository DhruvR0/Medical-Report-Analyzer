import React, { useState, useRef } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import './ReportAnalyzer.css';
import image from '../../assets/image.jpg';
import loader from "../../assets/Loading (1).gif";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReportAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const fileType = selectedFile.type;

      if (fileType !== "application/pdf" && fileType !== "application/json") {
        toast.error("❌ Only PDF and JSON files are allowed.");
        setFile(null);
        setFileName('');
        return;
      }

      // File size validation (e.g., 2MB max)
      const maxSize = 2 * 1024 * 1024;
      if (selectedFile.size > maxSize) {
        toast.error("❌ File size exceeds 2MB limit.");
        setFile(null);
        setFileName('');
        return;
      }

      setFile(selectedFile);
      setFileName(selectedFile.name);
      toast.success("✅ File uploaded successfully!");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.warning("⚠️ Please upload a lab report first.");
      return;
    }

    if (file.type === "application/json") {
      toast.info("ℹ️ JSON file uploaded successfully, but it won't be analyzed.");
      return;
    }

    const formData = new FormData();
    formData.append('pdf', file);
    setLoading(true);

    try {
      const response = await axios.post('/api/upload-pdf', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success("✅ File uploaded and sent for analysis!");
      navigate('/Visualize', { state: response.data.gptResponse });

    } catch (error) {
      console.error('❌ Error uploading file:', error);
      toast.error("❌ Upload failed. Check server or internet connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      {loading ? (
        <div className="loading">
          <img className="gif" src={loader} alt="Loading..." />
          <p>Uploading...</p>
        </div>
      ) : (
        <div className="card-container">
          <div className="card1">
            <h2 className="title">Upload Lab Report</h2>
            <p className="subtitle">Please attach a lab report to proceed</p>

            <div className="upload-section">
              <input
                type="file"
                accept=".pdf"
                id="fileInput"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <button className="upload-button" onClick={handleButtonClick} disabled={loading}>
                <FaCloudUploadAlt />
                <span>Upload Lab Report</span>
              </button>
            </div>

            <div className="divider"></div>

            <div className="attached-section">
              <p className="attached-title">Attached Lab Report</p>
              <p className="attached-placeholder">
                {fileName || 'Uploaded lab report will be shown here'}
              </p>
            </div>

            <button className="continue-button" onClick={handleUpload}>
              Continue
            </button>
          </div>

          <div className="card2">
            <h2 className="card-title">Guide to upload a lab report</h2>
            <div className="card-content">
              <img src={image} className="card-image" alt="Guide to upload lab report" />
              <ul className="card-instructions">
                <li>Don't crop out any part of the image</li>
                <li>Avoid blurred image</li>
                <li>Supported file types: JSON (.json), PDF (.pdf)</li>
                <li>Maximum allowed file size: 2MB</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportAnalyzer;
