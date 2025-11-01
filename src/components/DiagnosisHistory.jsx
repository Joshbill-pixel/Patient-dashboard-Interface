import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChevronDown, ArrowUp, ArrowDown, ArrowDownRightFromCircle, ArrowDownSquare, LucideArrowDown } from 'lucide-react';
import './DiagnosisHistory.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosisHistory = ({ patientData }) => {
  if (!patientData) return null;

  // Prepare chart data from patient's diagnosis history
  const chartData = {
    labels: patientData.diagnosis_history.map(entry => {
      const date = new Date(entry.month + ' ' + entry.year);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }),
    datasets: [
      {
        label: 'Systolic',
        data: patientData.diagnosis_history.map(entry => entry.blood_pressure.systolic.value),
        borderColor: '#E879F9',
        backgroundColor: '#E879F9',
        pointBackgroundColor: '#E879F9',
        pointBorderColor: '#E879F9',
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
      },
      {
        label: 'Diastolic',
        data: patientData.diagnosis_history.map(entry => entry.blood_pressure.diastolic.value),
        borderColor: '#8B5CF6',
        backgroundColor: '#8B5CF6',
        pointBackgroundColor: '#8B5CF6',
        pointBorderColor: '#8B5CF6',
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#374151',
        bodyColor: '#374151',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 180,
        ticks: {
          stepSize: 20,
          color: '#6B7280',
        },
        grid: {
          color: '#F3F4F6',
        },
        border: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: '#6B7280',
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        hoverRadius: 8,
      },
    },
  };

  // Get latest vital signs
  const latestData = patientData.diagnosis_history[patientData.diagnosis_history.length - 1];
  
  return (
    <div className="diagnosis-history">
      <h2 className="section-title">Diagnosis History</h2>
      
      <div className="chart-section">
        <div className="chart-header">
          <h3>Blood Pressure</h3>
          <div className="time-filter">
            <span>Last 6 months</span>
            <ChevronDown size={16} />
          </div>
        </div>
        
        <div className="chart-container">
          <Line data={chartData} options={chartOptions} />
        </div>
        
        <div className="blood-pressure-stats">
          <div className="bp-stat">
            <div className="bp-indicator systolic"></div>
            <div className="bp-info">
              <span className="bp-label">Systolic</span>
              <span className="bp-value">{latestData.blood_pressure.systolic.value}</span>
              <div className="bp-status">
                <ArrowUp size={14} />
                <span>{latestData.blood_pressure.systolic.levels}</span>
              </div>
            </div>
          </div>
          
          <div className="bp-stat">
            <div className="bp-indicator diastolic"></div>
            <div className="bp-info">
              <span className="bp-label">Diastolic</span>
              <span className="bp-value">{latestData.blood_pressure.diastolic.value}</span>
              <div className="bp-status">
                <ArrowDown size={14} />
                <span>{latestData.blood_pressure.diastolic.levels}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="vital-signs">
        <div className="vital-card respiratory">
          <div className="vital-icon">
            <img width={55} height={55} src="./img/respiratory rate.png" alt="respiratory rate Icon" />
          </div>
          <div className="vital-info">
            <span className="vital-label">Respiratory Rate</span>
            <span className="vital-value">{latestData.respiratory_rate.value} bpm</span>
            <span className="vital-status">{latestData.respiratory_rate.levels}</span>
          </div>
        </div>
        
        <div className="vital-card temperature">
          <div className="vital-icon">
            <img width={55} height={55} src="./img/temperature.png" alt="temperature Icon" />
          </div>
          <div className="vital-info">
            <span className="vital-label">Temperature</span>
            <span className="vital-value">{latestData.temperature.value}°F</span>
            <span className="vital-status">{latestData.temperature.levels}</span>
          </div>
        </div>
        
        <div className="vital-card heart-rate">
          <div className="vital-icon">
            <img width={55} height={55} src="./img/HeartBPM.png" alt="Heart icon" />
          </div>
          <div className="vital-info">
            <span className="vital-label">Heart Rate</span>
            <span className="vital-value">{latestData.heart_rate.value} bpm</span>
            <span className="vital-status">
              <LucideArrowDown size={12} />   
              Lower than Average
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;