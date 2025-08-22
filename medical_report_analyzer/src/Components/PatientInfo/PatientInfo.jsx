import React from 'react';
import './PatientInfo.scss';

const PatientInfo = ({ patientInfo }) => {
  return (
    <div className="patient-info">
      <h2>Patient Information</h2>
      <div className="info-section">
        <p><strong>ID:</strong> {patientInfo.patient_id}</p>
        <p><strong>Name:</strong> {patientInfo.name}</p>
        <p><strong>Age:</strong> {patientInfo.age}</p>
        <p><strong>Gender:</strong> {patientInfo.gender}</p>
        <p><strong>Date of Birth:</strong> {patientInfo.date_of_birth}</p>
        <p><strong>Report Date:</strong> {patientInfo.report_date}</p>
        <p><strong>Doctor:</strong> {patientInfo.doctor}</p>
        <p><strong>Hospital:</strong> {patientInfo.hospital}</p>
      </div>
    </div>
  );
};

export default PatientInfo;
