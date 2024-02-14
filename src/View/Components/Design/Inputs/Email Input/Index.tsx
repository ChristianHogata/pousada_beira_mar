import React from 'react';

interface StringInputProps {
    label: string;
  }
  
  const EmailInput: React.FC<StringInputProps> = ({ label }) => {
      return (
          <div>
              <label className="form-label">{label}</label>
              <input type="email" id="EmailInput" className="form-control"></input>
          </div>
        );
    }

export default EmailInput;