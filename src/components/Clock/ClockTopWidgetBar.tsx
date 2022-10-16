import React from "react";
import ClockNav from "./ClockNav";
import Weather from "./Weather";
import AlarmSwitch from "./AlarmSwitch";

interface ClockTopWidgetBarProps {
  zip: string;
  alarmPower: (mode: boolean) => void;
}

const ClockTopWidgetBar: React.FC<ClockTopWidgetBarProps> = ({
  zip,
  alarmPower,
}) => {
  return (
    <div className="flex flex-col-reverse w-full gap-14 opacity-60 text-center lg:flex-row lg:justify-between lg:gap-0">
      <Weather zip={zip} />
      <AlarmSwitch alarmPower={alarmPower} />
      <ClockNav />
    </div>
  );
};

export default ClockTopWidgetBar;
