import React, { useEffect, useState } from 'react';
import './ReportDropdown.css';

const ReportDropdown = () => {
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch('/churches.json')
      .then(res => res.json())
      .then(data => {
        setOptions(data);
        setFilteredOptions(data);
      });
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredOptions(
      options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
    setShowDropdown(true);
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option);
    setShowDropdown(false);
  };

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 150);
  };

  return (
    <div className="dropdown-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        onBlur={handleBlur}
        className="dropdown-input"
      />
      {showDropdown && filteredOptions.length > 0 && (
        <ul className="dropdown-list">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              onMouseDown={(e) => e.preventDefault()}
              className="dropdown-item"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReportDropdown;
