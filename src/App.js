// src/App.js

import React, { useState } from 'react';
import { postData, putData } from './api';

const App = () => {
  const [postResponse, setPostResponse] = useState(null);
  const [putResponse, setPutResponse] = useState(null);

  const handlePost = async () => {
    try {
      const data = { key: 'value' }; // Replace with your data
      const response = await postData(data);
      setPostResponse(response);
    } catch (error) {
      console.error('Error in POST request:', error);
    }
  };

  const handlePut = async () => {
    try {
      const id = '123'; // Replace with the appropriate ID
      const data = { key: 'newValue' }; // Replace with your data
      const response = await putData(id, data);
      setPutResponse(response);
    } catch (error) {
      console.error('Error in PUT request:', error);
    }
  };

  return (
    <div>
      <h1>API Call Example</h1>
      <button onClick={handlePost}>Make POST Request</button>
      <button onClick={handlePut}>Make PUT Request</button>

      {postResponse && (
        <div>
          <h2>POST Response</h2>
          <pre>{JSON.stringify(postResponse, null, 2)}</pre>
        </div>
      )}

      {putResponse && (
        <div>
          <h2>PUT Response</h2>
          <pre>{JSON.stringify(putResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
