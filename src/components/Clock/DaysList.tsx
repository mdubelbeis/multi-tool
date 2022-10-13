import React from "react";

const DAYS = [
  { day: "mon", id: 1 },
  { day: "tues", id: 2 },
  { day: "wed", id: 3 },
  { day: "thurs", id: 4 },
  { day: "fri", id: 5 },
  { day: "sat", id: 6 },
  { day: "sun", id: 0 },
];

interface DaysListProps {
  day: string;
}

const DaysList: React.FC<DaysListProps> = ({ day }) => {
  return (
    <ul className="hidden lg:flex lg:gap-10">
      {DAYS.map((weekday) => {
        return (
          <li
            key={weekday.id}
            className={`${
              weekday.day === day
                ? "text-green-900 uppercase border-b-2 border-green-900"
                : "text-green-500"
            } tracking-wider`}
          >
            {weekday.day}
          </li>
        );
      })}
    </ul>
  );
};

export default DaysList;