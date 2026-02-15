import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/User/EventList';
import RegisterForm from './components/User/RegisterForm';
import EventForm from './components/Admin/EventForm';
import EventTable from './components/Admin/EventTable';

function UserPage() {
  return (
    <div>
      <h3>User Section</h3>
      <EventList />
      <RegisterForm />
    </div>
  );
}

function AdminPage() {
  return (
    <div>
      <h3>Admin Section</h3>
      <EventForm />
      <EventTable />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Event Management System</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;