const BASE_URL = "http://localhost:8080/api";

export const getEvents = async () => {
  const response = await fetch(`${BASE_URL}/events`);
  return response.json();
};

export const createEvent = async (eventData) => {
  const response = await fetch(`${BASE_URL}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(eventData)
  });
  return response.json();
};
