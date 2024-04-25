import React, { useEffect, useState } from "react";
import { Card } from "xl";

const SSE = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const source = new EventSource("/api/sse");
    console.log(source);
    source.onopen = (e) => console.log("opened", e);
    source.addEventListener("message", (event) => {
      const message = event.data;
      setEvents((prev) => {
        if (prev.length === 10) prev.shift();
        return [...prev, message];
      });
    });
    return () => {
      source.close();
    };
  }, []);

  return (
    <Card title="服务器推送">
      {events.map((event) => (
        <p key={event}>{event}</p>
      ))}
    </Card>
  );
};

export default SSE;
