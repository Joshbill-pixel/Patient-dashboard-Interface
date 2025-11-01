import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import PatientProfile from './components/PatientProfile';
import './App.css';

function App() {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            'Authorization': 'Basic Y29hbGl0aW9uOnNraWxscy10ZXN0'
          }
        });
        const data = await response.json();
       
        // Find Jessica Taylor's data
        const jessicaData = data.find(patient => patient.name === 'Jessica Taylor');
        setPatientData(jessicaData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patient data:', error);
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading patient data...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <div className="container-fluid py-4">
        <div className="row g-4">
          <div className="col-lg-3 col-md-4 sidebar-container">
            <Sidebar className="sidebar" patientData={patientData} />
          </div>
          <div className="col-lg-6 col-md-8 main-content-container">
            <MainContent patientData={patientData} />
          </div>
          <div className="col-lg-3 col-12 patient-profile-container">
            <PatientProfile patientData={patientData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;