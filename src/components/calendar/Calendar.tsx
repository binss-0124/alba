import React, { useState } from 'react';
import { DayCell } from './DayCell';
import './Calendar.css';

interface WorkRecord {
  id: string;
  date: string;
  clockIn?: string;
  clockOut?: string;
  workHours?: number;
  dailySalary?: number;
}

interface CalendarProps {
  workRecords: WorkRecord[];
  onDateClick: (date: string) => void;
  currentMonth?: Date;
}

export const Calendar: React.FC<CalendarProps> = ({
  workRecords,
  onDateClick,
  currentMonth = new Date(),
}) => {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const getWorkRecordForDate = (date: string) => {
    return workRecords.find(record => record.date === date);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setSelectedMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(selectedMonth);
  const monthName = selectedMonth.toLocaleDateString('ko-KR', { 
    year: 'numeric', 
    month: 'long' 
  });

  const renderCalendarDays = () => {
    const days = [];
    
    // 이전 달의 마지막 날들
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="day-cell empty"></div>);
    }

    // 현재 달의 날들
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = selectedMonth.toISOString().split('T')[0].slice(0, -2) + 
                        day.toString().padStart(2, '0');
      const workRecord = getWorkRecordForDate(dateString);
      
      days.push(
        <DayCell
          key={day}
          day={day}
          workRecord={workRecord}
          onClick={() => onDateClick(dateString)}
        />
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button 
          onClick={() => navigateMonth('prev')}
        >
          ‹
        </button>
        <h2 className="calendar-title">{monthName}</h2>
        <button 
          onClick={() => navigateMonth('next')}
        >
          ›
        </button>
      </div>
      
      <div className="calendar-weekdays">
        <div className="weekday">일</div>
        <div className="weekday">월</div>
        <div className="weekday">화</div>
        <div className="weekday">수</div>
        <div className="weekday">목</div>
        <div className="weekday">금</div>
        <div className="weekday">토</div>
      </div>
      
      <div className="calendar-grid">
        {renderCalendarDays()}
      </div>
    </div>
  );
};
