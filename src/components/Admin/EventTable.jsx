import React, { useState } from 'react';

function EventTable() {
  const [events, setEvents] = useState([
    { id: 1, name: "Tech Conference", date: "2026-02-20", location: "Chennai" },
    { id: 2, name: "AI Workshop", date: "2026-02-25", location: "Bangalore" }
  ]);

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit functionality for event ID ${id} will be added later.`);
  };

  return (
    <div>
      <h2>Manage Events</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>
                <button onClick={() => handleEdit(event.id)}>Edit</button>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;