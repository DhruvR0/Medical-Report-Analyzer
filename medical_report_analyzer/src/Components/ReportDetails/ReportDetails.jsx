import React from 'react';
import './ReportDetails.scss';

const ReportDetails = ({ reportDetails }) => {
  return (
    <div className="report-details">
      <h2>Report Details</h2>
      <p><strong>Report Type:</strong> {reportDetails.report_type}</p>
      <p><strong>Summary:</strong> {reportDetails.report_summary}</p>
      {reportDetails.report_sections.map((section, index) => (
        <div key={index} className="report-section">
          <h3>{section.section_title}</h3>
          <p><strong>Findings:</strong> {section.findings}</p>
          <p><strong>Conclusion:</strong> {section.conclusion}</p>
          <div className="parameters">
            {section.data.parameters.map((param, idx) => (
              <div key={idx} className="parameter">
                <p><strong>{param.name}:</strong> {param.value} {param.units}</p>
                <p><small>Reference Range: {param.reference_range}</small></p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportDetails;
