import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home';
import RoomExchange from './RoomExchange';
import Booking from './Booking';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/RoomExchange" element={<RoomExchange />} />
          <Route path="/Home/Booking" element={<Booking />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;