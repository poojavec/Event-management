import React, { useEffect, useState } from "react";
import API from "../api";

function EventManager() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [editId, setEditId] = useState(null);

  // Load Events
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await API.get("/events");
    setEvents(res.data);
  };

  // Add or Update Event
  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = { title, description, location };

    if (editId) {
      await API.put(`/events/${editId}`, eventData);
      setEditId(null);
    } else {
      await API.post("/events", eventData);
    }

    setTitle("");
    setDescription("");
    setLocation("");
    fetchEvents();
  };

  const handleEdit = (event) => {
    setTitle(event.title);
    setDescription(event.description);
    setLocation(event.location);
    setEditId(event.id);
  };

  const handleDelete = async (id) => {
    await API.delete(`/events/${id}`);
    fetchEvents();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Management</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">
          {editId ? "Update Event" : "Add Event"}
        </button>
      </form>

      <hr />

      <h3>All Events</h3>

      {events.map((event) => (
        <div key={event.id} style={{ marginBottom: "10px" }}>
          <strong>{event.title}</strong> - {event.location}
          <br />
          {event.description}
          <br />
          <button onClick={() => handleEdit(event)}>Edit</button>
          <button onClick={() => handleDelete(event.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default EventManager;
