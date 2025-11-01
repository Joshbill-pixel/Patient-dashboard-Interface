import React from 'react';
import { Settings } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img className='logo-text' src="/img/TestLogo.png" alt="Tech.Care Logo" />
        </div>
       
        <nav className="nav">
          <a href="#" className="nav-item">
            <span>
              <img src="/img/home_FILL0_wght300_GRAD0_opsz24.png" alt="Home Icon" />
            </span>
            Overview
          </a>
          <a href="#" className="nav-item active">
            <span>
              <img src="/img/group_FILL0_wght300_GRAD0_opsz24.png" alt="User Icon" />
            </span>
            Patients
          </a>
          <a href="#" className="nav-item">
            <span>
              <img src="/img/calendar_today_FILL0_wght300_GRAD0_opsz24.png" alt="Calender Icon" />
            </span>
            Schedule
          </a>
          <a href="#" className="nav-item">
            <span>
              <img src="/img/chat_bubble_FILL0_wght300_GRAD0_opsz24.png" alt="Chat Icon" />
            </span>
            Message
          </a>
          <a href="#" className="nav-item">
            <span>
              <img src="/img/credit_card_FILL0_wght300_GRAD0_opsz24.png" alt="Credit Card Icon" />
            </span>
            Transactions
          </a>
        </nav>
        
        <div className="user-profile">
          <img 
            src="/img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" 
            alt="Dr. Jose Simmons" 
            className="user-avatar"
          />
          <div className="user-info">
            <span className="user-name">Dr. Jose Simmons</span>
            <span className="user-title">General Practitioner</span>
          </div>
          <div className="user-actions">
            <img src="/img/settings_FILL0_wght300_GRAD0_opsz24.png" alt="settings icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;