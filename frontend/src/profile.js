import './profile.css'
import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Fetch candidates from the backend API
  useEffect(() => {
      axios.get('http://localhost:4000/api/candidates')
      .then(response => {
       
        setCandidates(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the candidates!', error);
      });
  }, []);

  const filteredCandidates = candidates.filter(candidate => {
    const lowercasedSearch = search.toLowerCase();
    return candidate.name.toLowerCase().includes(lowercasedSearch) ||
      candidate.skills.toLowerCase().includes(lowercasedSearch); 
  });

  const sortedCandidates = filteredCandidates.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.experience - b.experience;
    } else {
      return b.experience - a.experience;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <h1>Candidate List Viewer</h1>
      <input
        type="text"
        placeholder="Search by name or skills"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={toggleSortOrder}>
        click Me({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>

      {/* Table of Candidates */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th>Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          {sortedCandidates.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.skills}</td> {/* Ensure the backend provides `skills` */}
              <td>{candidate.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
