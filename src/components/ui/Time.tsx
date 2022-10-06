import { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [output, setOutput] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setOutput(new Date().toLocaleTimeString());
    }, 1000);
  });

  return <span className="font-digital text-4xl">{output}</span>;
};

export default Clock;