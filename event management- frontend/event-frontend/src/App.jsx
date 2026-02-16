import { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const fetchEvents = async () => {
    const response = await fetch("http://localhost:8080/api/events");
    const data = await response.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAdd = async () => {
    await fetch("http://localhost:8080/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
        location
      })
    });

    setTitle("");
    setDescription("");
    setLocation("");

    fetchEvents();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Event Management</h1>

      <input
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <br /><br />

      <button onClick={handleAdd}>Add Event</button>

      <hr />

      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <b>{event.title}</b> | {event.description} | {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
