import PropTypes from 'prop-types';
import { Calendar, User, Phone, Shield } from 'lucide-react';
import './PatientProfile.css';

const PatientProfile = ({ patientData }) => {
  if (!patientData) return null;

  return (
    <div className="patient-profile">
      <div className="profile-header">
        <img 
          src="./img/Layer 2.png" 
          alt={patientData.name}
          className="profile-image"
        />
        <h2 className="patient-name">{patientData.name}</h2>
      </div>
      
      <div className="profile-details">
        <div className="detail-item">
          <Calendar size={20} />
          <div className="detail-content">
            <span className="detail-label">Date Of Birth</span>
            <span className="detail-value">{patientData.date_of_birth}</span>
          </div>
        </div>
        
        <div className="detail-item">
          <User size={20} />
          <div className="detail-content">
            <span className="detail-label">Gender</span>
            <span className="detail-value">{patientData.gender}</span>
          </div>
        </div>
        
        <div className="detail-item">
          <Phone size={20} />
          <div className="detail-content">
            <span className="detail-label">Contact Info.</span>
            <span className="detail-value">{patientData.phone_number}</span>
          </div>
        </div>
        
        <div className="detail-item">
          <Phone size={20} />
          <div className="detail-content">
            <span className="detail-label">Emergency Contacts</span>
            <span className="detail-value">{patientData.emergency_contact}</span>
          </div>
        </div>
        
        <div className="detail-item">
          <Shield size={20} />
          <div className="detail-content">
            <span className="detail-label">Insurance Provider</span>
            <span className="detail-value">{patientData.insurance_type}</span>
          </div>
        </div>
      </div>
      
      <button className="show-all-btn">
        Show All Information
      </button>
    </div>
  );
};

PatientProfile.propTypes = {
  patientData: PropTypes.shape({
    name: PropTypes.string,
    date_of_birth: PropTypes.string,
    gender: PropTypes.string,
    phone_number: PropTypes.string,
    emergency_contact: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    insurance_type: PropTypes.string,
  }),
};

export default PatientProfile;