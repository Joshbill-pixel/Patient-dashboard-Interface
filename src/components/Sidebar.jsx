import React from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ patientData }) => {
  const patients = [
    { name: 'Emily Williams', gender: 'Female', age: 18, avatar: '/img/Layer 8.png' },
    { name: 'Ryan Johnson', gender: 'Male', age: 45, avatar: '/img/Layer 1.png' },
    { name: 'Brandon Mitchell', gender: 'Male', age: 36, avatar: '/img/Layer 3.png' },
    { name: 'Jessica Taylor', gender: 'Female', age: 28, avatar: '/img/Layer 2.png', active: true },
    { name: 'Samantha Johnson', gender: 'Female', age: 56, avatar: '/img/Layer 6.png' },
    { name: 'Ashley Martinez', gender: 'Female', age: 54, avatar: '/img/Layer 12.png' },
    { name: 'Olivia Brown', gender: 'Female', age: 32, avatar: '/img/Layer 10.png' },
    { name: 'Tyler Davis', gender: 'Male', age: 19, avatar: '/img/Layer 9.png' },
    { name: 'Kevin Anderson', gender: 'Male', age: 30, avatar: '/img/Layer 4.png' },
    { name: 'Dylan Thompson', gender: 'Male', age: 36, avatar: '/img/Layer 5.png' },
    { name: 'Nathan Evans', gender: 'Male', age: 58, avatar: '/img/Layer 7.png' },
    { name: 'Mike Nolan', gender: 'Male', age: 31, avatar: '/img/pexels-photo-1222271.png' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Patients</h2>
        <Search size={18} className="search-icon" />
      </div>
      
      <div className="patient-list">
        {patients.map((patient, index) => (
          <div key={index} className={`patient-item ${patient.active ? 'active' : ''}`}>
            <img src={patient.avatar} alt={patient.name} className="patient-avatar" />
            <div className="patient-info">
              <span className="patient-name fs-6">{patient.name}</span>
              <span className="patient-details">{patient.gender}, {patient.age}</span>
            </div>
            <MoreHorizontal size={12} className="patient-menu" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;