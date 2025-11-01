import React from 'react';
import './DiagnosticList.css';

const DiagnosticList = ({ patientData }) => {
  if (!patientData) return null;

  return (
    <div className="diagnostic-list container">
      <h3 className="section-title">Diagnostic List</h3>
     
      <div className="diagnostic-table">
        <div className="table-header">
          <span>Problem/Diagnosis</span>
          <span>Description</span>
          <span>Status</span>
        </div>
        
        <div className="table-body">
          {patientData.diagnostic_list.map((item, index) => (
            <div key={index} className="table-row">
              <span className="diagnosis-name">{item.name}</span>
              <span className="diagnosis-description">{item.description}</span>
              <span className={`diagnosis-status ${item.status.toLowerCase().replace(' ', '-')}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;