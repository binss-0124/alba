import React from 'react';
import './TodaysSchedule.css';

interface TodaysScheduleProps {
  date: string;
  schedule: string;
  location: string;
  status: '근무 예정' | '근무 중' | '근무 없음';
}

const TodaysSchedule: React.FC<TodaysScheduleProps> = ({ date, schedule, location, status }) => {
  const statusClass = status === '근무 중' ? 'in-progress' : status === '근무 예정' ? 'scheduled' : 'no-work';

  return (
    <div className="todays-schedule">
      <div className="schedule-header">
        <span className="schedule-date">{date}</span>
        <span className={`schedule-status ${statusClass}`}>{status}</span>
      </div>
      <div className="schedule-details">
        <p className="schedule-item"><strong>시간:</strong> {schedule}</p>
        <p className="schedule-item"><strong>장소:</strong> {location}</p>
      </div>
    </div>
  );
};

export default TodaysSchedule;
