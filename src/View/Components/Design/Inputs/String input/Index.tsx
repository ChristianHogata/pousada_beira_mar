import React from 'react';

interface StringInputProps {
    label?: string,
    placeholder?: string,
    maxLength?: number,
    pattern?: string;
  }
  
  const StringInput: React.FC<StringInputProps> = ({ label, placeholder, maxLength, pattern }) => {
      return (
          <div>
              <label className="form-label">{label}</label>
              <input type="text" id="StringInput" className="form-control" placeholder={placeholder} maxLength={maxLength} pattern={pattern}></input>
          </div>
        );
    }

export default StringInput;