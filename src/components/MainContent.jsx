import React from 'react';
import DiagnosisHistory from './DiagnosisHistory';
import DiagnosticList from './DiagnosticList';
import LabResults from './LabResults';
import './MainContent.css';

const MainContent = ({ patientData }) => {
  return (
    <div className="main-content">
      <DiagnosisHistory patientData={patientData} />
      <div className="bottom-section">
        <DiagnosticList patientData={patientData} />
        <LabResults />
      </div>
    </div>
  );
};

export default MainContent;