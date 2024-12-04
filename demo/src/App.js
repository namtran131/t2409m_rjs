import React from 'react';

import Login from './../src/pages/login/Login';
import Register from './../src/pages/register/Register';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
         </Routes>
    </div>
  );
}

export default App;
