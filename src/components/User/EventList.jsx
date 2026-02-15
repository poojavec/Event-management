import React from 'react';

function EventList() {
  const events = [
    { id: 1, name: "Tech Conference", date: "2026-02-20", location: "Chennai" },
    { id: 2, name: "AI Workshop", date: "2026-02-25", location: "Bangalore" }
  ];

  return (
    <div>
      <h2>Available Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name} - {event.date} - {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;