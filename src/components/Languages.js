import React, { useState } from "react";
import { Link } from "react-router-dom";

const LANGUAGES = [
  { label: "Rövare language", value: "ro" },
  { label: "Your language  ", value: "lang"}
];

const Languages = ({ language, onLanguageChange }) => {
  if (language === undefined) {
    language = "ro";
  }
  const languageConfig = LANGUAGES.find(l => l.value === language);
  if (!languageConfig) {
    throw new Error(`Unknown language code '${language}'`);
  }

  const [open, setOpen] = useState(false);

  const onSelect = language => {
    setOpen(false);
    onLanguageChange(language);
  };

  return (
    <div className="addLanguage">
      <label className="label">Choose Language</label>
      <div className={`dropdown ${open && "is-active"}`}>
        <div className="dropdown-trigger">
          <button className="button" onClick={() => setOpen(!open)}>
            <span>{languageConfig.label}</span>
            <span className="icon">
              <i className="arrow down" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {LANGUAGES.map(({ label, value }) => {
              return (
                <Link
                  to="/"
                  onClick={() => onSelect(value)}
                  className="dropdown-item"
                  key={label}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
