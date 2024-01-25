import React, { useState, useEffect } from 'react';

export const Input = ({ title, placeholder, type, onChange }) => {
  const isNumberInput = type === 'number';
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (isNumberInput) {
      setInputValue((prevValue) => prevValue.replace(/[^0-9.]/g, ''));
    }
  }, [isNumberInput, inputValue]);

  const handleChange = (event) => {
    const value = event.target.value;

    if (isNumberInput) {
      if (!/^[0-9.]*$/.test(value)) {
        setError('Solo se permiten números');
      } else {
        setError('');
        setInputValue(value);
        onChange && onChange(value);
      }
    } else {
      setInputValue(value);
      onChange && onChange(value);
    }
  };

  return (
    <div>
      <div>
        <p style={{ fontWeight: 700, color: "#002859", marginBottom: "2px" }}>
          {title}
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          style={{
            border: "solid",
            borderWidth: "1px",
            paddingLeft: "0.5rem",
            paddingTop: "0.2rem",
            paddingBottom: "0.2rem",
            width: "100%",
            borderColor: error ? 'red' : '#E5E9F2',
            borderRadius: "6px",
            padding: "0.6rem 0.4rem",
          }}
        />
      </div>
      {error && (
        <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
          {error}
        </div>
      )}
    </div>
  );
};
