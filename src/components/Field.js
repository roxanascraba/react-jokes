import React from "react";

const Field = ({ label, id, value, onChange }) => {
  return (
    <div className="addText">
      <label className="label" htmlFor={id}>{label}</label>
      <input
        className="input"
        id={id}
        value={value}
        // onChange={e => onChange(e.target.value.replace(/[^A-Z ]/ig,'').replace(/ o /g,' '))}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default Field;