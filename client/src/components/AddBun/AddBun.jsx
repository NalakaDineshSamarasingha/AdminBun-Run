// src/components/AddBun.js
import React, { useState } from 'react';
import { database } from '../../firebase';
import { ref, set } from 'firebase/database';
import './AddBun.css';

function AddBun() {
  const [bunType, setBunType] = useState('');
  const [count, setCount] = useState('');
  const [expireDate, setExpireDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (bunType && count && expireDate) {
      try {
        // Update database
        const bunRef = ref(database, `Bun&Run/${bunType}`);
        await set(bunRef, {
          count: parseInt(count, 10),
          ExpireDate: expireDate
        });

        // Notify user
        alert('Bun details added successfully!');

        // Refresh page
        window.location.reload();
      } catch (error) {
        console.error('Error adding bun details: ', error);
        alert('Error adding bun details. Please try again.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="add-bun-container">
      <h1>Change Bun Count</h1>
      <form onSubmit={handleSubmit} className="add-bun-form">
        <label>
          Bun Type:
          <select
            value={bunType}
            onChange={(e) => setBunType(e.target.value)}
            required
          >
            <option value="">Select Bun Type</option>
            <option value="GalBanis">GalBanis</option>
            <option value="CreamBanis">CreamBanis</option>
            <option value="FishBun">FishBun</option>
          </select>
        </label>
        <label>
          Count:
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            required
          />
        </label>
        <label>
          Expire Date:
          <input
            type="date"
            value={expireDate}
            onChange={(e) => setExpireDate(e.target.value)}
            required
          />
              </label>
              <div className="btn">  
                <button type="submit">Submit</button>
              </div>
      </form>
    </div>
  );
}

export default AddBun;
