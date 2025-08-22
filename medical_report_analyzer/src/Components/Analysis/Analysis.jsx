import React from 'react';
import './Analysis.scss';

const Analysis = ({ analysis }) => {
  return (
    <div className="analysis">
      <h2>Analysis</h2>
      <div className="diagnosis">
        <h3>Diagnosis</h3>
        {analysis.diagnosis.map((diag, index) => (
          <div key={index} className="diagnosis-item">
            <p><strong>Condition:</strong> {diag.condition}</p>
            <p><strong>Severity:</strong> {diag.severity}</p>
            <p>{diag.description}</p>
          </div>
        ))}
      </div>
      <div className="treatment-recommendations">
        <h3>Treatment Recommendations</h3>
        {analysis.treatment_recommendations.map((treat, index) => (
          <div key={index} className="treatment-item">
            <p><strong>Treatment:</strong> {treat.treatment}</p>
            <p><strong>Medication:</strong> {treat.medication.name}, {treat.medication.dosage} for {treat.medication.duration}</p>
            <p>{treat.other_treatment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analysis;
