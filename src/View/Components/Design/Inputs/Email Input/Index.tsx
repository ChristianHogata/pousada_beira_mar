import React from 'react';

interface StringInputProps {
    label: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const EmailInput: React.FC<StringInputProps> = ({ label, onChange}) => {
      return (
          <div>
              <label className="form-label">{label}</label>
              <input type="email" id="EmailInput" className="form-control" onChange={onChange}></input>
          </div>
        );
    }

export default EmailInput;