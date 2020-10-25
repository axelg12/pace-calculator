import React from 'react';
import './Input.css';

interface InputProps {
  value: number | string;
  label: string;
  onChange: (e: any) => void;
  placeholder: string;
}

function Input({ value, label, onChange, placeholder }: InputProps) {
  return (
    <div className="Input">
      <label htmlFor={label}>{label}</label>
      <input
        placeholder={placeholder}
        name={label}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        value={value}
      />
    </div>
  );
}

export default Input;
