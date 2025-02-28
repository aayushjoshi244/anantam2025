import React, { useState, useEffect } from 'react';
import "./Story.css"

const dayData = [
  {
    title: 'Day 1',
    tasks: [
      { time: '09:00 AM', description: 'Entry for the participants', date: '1 April 2025' },
      { time: '10:00 AM', description: 'Breakfast', date: '1 April 2025' },
      { time: '10:45 AM', description: 'Hacking Starts', date: '1 April 2025' },
      { time: '11:30 AM', description: 'Coding Workshop', date: '1 April 2025' },
      { time: '13:30 PM', description: 'Lunch+Dance', date: '1 April 2025' },
      { time: '16:00 PM', description: 'Mentoring Round 1', date: '1 April 2025' },
      { time: '20:00 PM', description: 'Dinner', date: '1 April 2025' },
      { time: '00:00 PM', description: 'Midnight DJ', date: '1 April 2025' }
    ],
  },
  {
    title: 'Day 2',
    tasks: [
      { time: '06:00 AM', description: 'Early Morning Tea', date: '2 April 2025' },
      { time: '08:30 AM', description: 'Breakfast', date: '2 April 2025' },
      { time: '11:00 AM', description: 'Event', date: '2 April 2025' },
      { time: '13:00 PM', description: 'Lunch', date: '2 April 2025' },
      { time: '15:00 PM', description: 'TBD', date: '2 April 2025' },
      { time: '16:30 PM', description: 'Some Activity', date: '2 April 2025' },
      { time: '18:30 PM', description: 'Unknown Event', date: '2 April 2025' },
    ],
  },
  {
    title: 'Day 3',
    tasks: [
      { time: '06:00 AM', description: 'Early Morning Tea', date: '3 April 2025' },
      { time: '08:30 AM', description: 'Breakfast', date: '3 April 2025' },
      { time: '11:00 AM', description: 'Event Round 2', date: '3 April 2025' },
      { time: '13:00 PM', description: 'Lunch', date: '3 April 2025' },
      { time: '15:00 PM', description: 'Random Event', date: '3 April 2025' },
      { time: '16:30 PM', description: 'Judgement Round Begins', date: '3 April 2025' },
      { time: '18:30 PM', description: 'Winner Declaration', date: '3 April 2025' },
    ],
  },
];

const TimeLine = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [isBetween768And900, setIsBetween768And900] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsBetween768And900(width >= 768 && width <= 900);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="dockery p-4 mt-38 sm:mt-48 md:pl-24 bg-black h-[700px]">
      <h1 className="text-8xl sm:text-[14rem] md:text-[13rem] font-bebas text-[#f2be22] font-bold text-center mb-12">
        EVENT SCHEDULE
      </h1>

      <div className="relative mb-20 hidden md:flex between-768-900:hidden">
      <div className="absolute bg-[#f2be22] h-1 top-3 left-20 right-16 z-0"></div>
        {dayData[selectedDay].tasks.map((task, index) => (
          <div key={index} className="flex flex-col items-center relative px-4">
            <div className="bg-white w-8 h-8 rounded-full border-8 border-purple z-10"></div>
            <div className="flex flex-col items-center ">
              <span className="text-lg text-white font-bold text-center mt-7">{task.description}</span>
              <span className="text-xs text-white mt-1">{`${task.date} | ${task.time}`}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-12 mb-8 md:block between-768-900:hidden">
        {dayData.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index)}
            className={`ml-[500px] px-6 py-2 font-bold rounded-full items-center ${selectedDay === index ? 'bg-[#f2be22] text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            {day.title}
          </button>
        ))}
      </div>

      <div className="block md:hidden relative mb-10 between-768-900:hidden">
        <div className="absolute bg-purple-600 w-1 left-1/5 z-0"></div>
        <div className="flex flex-col items-start justify-between pl-[15%] relative">
          {dayData[selectedDay].tasks.map((task, index) => (
            <div key={index} className="relative flex justify-between items-start mb-8">
              <div className="flex-shrink-0 relative">
                <div className="bg-white w-8 h-8 rounded-full border-8 border-purple z-10"></div>
                {index < dayData[selectedDay].tasks.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-[9vh] bg-[#f2be22] z-0"></div>
                )}
              </div>
              <div className="ml-4">
                <span className="text-lg text-white font-bold">{task.description}</span>
                <br />
                <span className="text-sm text-white mt-1">{`${task.date} | ${task.time}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
