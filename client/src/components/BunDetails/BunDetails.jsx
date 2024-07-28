// src/components/BunDetails.js
import React, { useEffect, useState } from 'react';
import { database } from '../../firebase';
import { ref, get } from 'firebase/database';
import './BunDetail.css';  // Import the CSS file

function BunDetails() {
  const [buns, setBuns] = useState({});

  useEffect(() => {
    const fetchBunDetails = async () => {
      const bunTypes = ['GalBanis', 'CreamBanis', 'FishBun'];
      const bunData = {};

      for (const bunType of bunTypes) {
        const bunRef = ref(database, `Bun&Run/${bunType}`);
        const snapshot = await get(bunRef);

        if (snapshot.exists()) {
          bunData[bunType] = snapshot.val();
        }
      }

      setBuns(bunData);
    };

    fetchBunDetails();
  }, []);

  return (
    <div className="bun-details-container">
      <h1>Bun Container Counts</h1>
      <table className="bun-details-table">
        <thead>
          <tr>
            <th>Bun Type</th>
            <th>Count</th>
            <th>Expire Date</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(buns).map(bunType => (
            <tr key={bunType}>
              <td>{bunType}</td>
              <td>{buns[bunType].count}</td>
              <td>{buns[bunType].ExpireDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BunDetails;
