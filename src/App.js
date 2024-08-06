import React, { useState, useEffect } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from './Redux/Actions';
export default function App() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);

  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchDataRequest());
    const val = data.data.filter((val) => val.title.includes(value));
    setResult(val);
  }, [result]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const styles = {
    listItem: {
      listStyleType: 'none',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px 0',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      borderRadius: '8px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    input: {
      borderRadius: '10px',
      padding: '4px 8px',
    },
  };
  return (
    <div>
      <div>
        <h1>Redux Saga Example</h1>
        {loading ? 'Loading...' : ''}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          onChange={handleChange}
          style={styles.input}
          value={value}
          type="search"
        />
        <ul>
          {result.map((item) => {
            return (
              <li key={item.id} style={styles.listItem}>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <img src={item.image} style={styles.image} alt="image" />
                <p>{item.description}</p>
                <button style={styles.button}>Add to Cart</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
