import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Obiwan from '../assets/Obiwan.jpg';

const ApiForm = () => {
  const [type, setType] = useState('people');
  const [id, setId] = useState(0);
  // By default I want no errors
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://swapi.dev/api/${type}/${id}`)
      .then((res) => {
        console.log(res);
        setError(false);
        navigate(`/display/${type}/${id}`);
        setType('people');
        setId(0);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <div>
      {type === 'vehicles' ? (
        <p>
          4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37,
          38, 44 are valid IDs for vehicles
        </p>
      ) : null}
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div style={{ marginTop: '10px', marginRight: '5px' }}>
          <label htmlFor="type">Search For:</label>
          <select
            value={type}
            name="type"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
            <option value="vehicles">Vehicles</option>
            <option value="starships">Starships</option>
          </select>
        </div>

        <div style={{ marginTop: '10px', marginRight: '5px' }}>
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <button style={{ marginTop: '10px', height: '26px', width: '56px' }}>
          Search
        </button>
      </form>

      {error ? (
        <div>
          <img src={Obiwan} alt="ObiwanImage" />
          <p>These are not the droids you are looking for</p>
        </div>
      ) : null}
    </div>
  );
};

export default ApiForm;
