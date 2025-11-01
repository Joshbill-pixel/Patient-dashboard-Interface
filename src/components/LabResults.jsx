import React from 'react';
import { Download } from 'lucide-react';
import './LabResults.css';

const LabResults = () => {
  const labResults = [
    'Blood Tests',
    'CT Scans',
    'Radiology Reports',
    'X-Rays',
    'Urine Test'
  ];

  return (
    <div className="lab-results">
      <h3 className="section-title">Lab Results</h3>
      
      <div className="results-list">
        {labResults.map((result, index) => (
          <div key={index} className="result-item">
            <span className="result-name">{result}</span>
            <Download size={16} className="download-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;