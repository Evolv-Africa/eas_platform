import { useState } from "react";
import { scheduleData, days } from "./constants";

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="2" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.2" />
    <line x1="1" y1="5.5" x2="15" y2="5.5" stroke="currentColor" strokeWidth="1.2" />
    <line x1="5" y1="1" x2="5" y2="4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="11" y1="1" x2="11" y2="4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-60">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const PersonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="opacity-50">
    <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.2" />
    <path d="M3 14c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="relative px-5 py-10 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-320 space-y-8 md:space-y-14">

        <p className="font-neue-machina font-extrabold text-3xl md:text-[56px] leading-tight text-semantic-text-primary">
          Event Schedule
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">

          <div className="flex flex-row md:flex-col z-10 gap-3 md:min-w-[180px] overflow-x-auto pb-1 md:pb-0 md:overflow-visible flex-shrink-0">
            {days.map(({ day, label, date, suffix, month }) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all text-left font-poppins flex-shrink-0
                  ${activeDay === day
                    ? "border-[#4CAF50] bg-[#f6fff6]"
                    : "border-semantic-border bg-white hover:border-[#4CAF50]"
                  }`}
              >
                <div className={`w-8 h-8 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors
                  ${activeDay === day ? "border-[#4CAF50] text-[#4CAF50]" : "border-semantic-border text-semantic-text-secondary"}`}
                >
                  <CalendarIcon />
                </div>
                <div>
                  <p className="text-[11px] text-semantic-text-secondary">{label}</p>
                  <p className="font-neue-machina font-bold text-[15px] text-semantic-text-primary">
                    {date}<sup className="text-[10px]">{suffix}</sup> {month}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="relative flex-1 flex flex-col gap-4 pb-16">
            {scheduleData[activeDay].map((event) => (
              <div key={event.id} className="relative z-10 bg-[#f7f7f7] rounded-xl px-4 sm:px-6 py-5 space-y-3">
                <div className="inline-block bg-[#e6f4ea] text-[#2e7d32] text-[11px] font-semibold font-poppins px-3 py-1 rounded-full tracking-wide">
                  {event.time}
                </div>
                <p className="font-neue-machina font-bold text-lg sm:text-xl text-semantic-text-primary">
                  {event.title}
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                  <span className="flex items-center gap-1.5 text-[13px] text-semantic-text-secondary font-poppins">
                    <LocationIcon />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-[13px] text-semantic-text-secondary font-poppins">
                    <PersonIcon />
                    {event.host}
                  </span>
                </div>
                <p className="text-[13px] text-semantic-text-secondary font-poppins leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[330px] w-screen pointer-events-none z-0 overflow-hidden">
          <svg
            viewBox="0 0 1600 250"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[220px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,140 C120,-20 220,280 380,120 C520,-10 620,260 780,100 C940,-20 1040,250 1220,90 C1360,0 1480,180 1600,50"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="35"
              strokeLinecap="round"
            />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default EventSchedule;