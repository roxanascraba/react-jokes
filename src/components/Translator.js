import React , { useState } from "react";

import Field from "./Field";
import Languages from "./Languages";

const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'å', 'ä', 'ö', 'A', 'E', 'I', 'O', 'U', 'Å', 'Ä', 'Ö'];

export const charIsLetter = (char) => {
  return /^[a-zA-Z]+$/.test(char);
};

export const translateToRovare = (text) => {
  let translatedText = '';
  let translatedLetter = '';
  let textLength = 0;
  if (text) {
    textLength = text.length;
  }

  for (let i = 0; i < textLength; i++) {

    translatedLetter = text[i];

    if (!charIsLetter(text[i])) {
      translatedText = translatedText.concat(translatedLetter);
      continue;
    } 
    if (!vowelsArray.includes(text[i])){ 
      translatedLetter = text[i].concat("o", text[i]); 
    }
    translatedText = translatedText.concat(translatedLetter);
  }
  return translatedText;
};

const isRovareSyntax = (string) => { 
  if (typeof string !== 'string') {
    return false;
  }
  if(string[0] === string[2] && string[1] === 'o' ) {
    return true;
  }
  return false;
};

const translateFromRovare = (text) => {
  let translatedText = '';
  let translatedLetter = '';
  let textLength = text.length;

  for (let i = 0; i < textLength; i++) {
    translatedLetter = text[i];
    if (!charIsLetter(text[i])) { 
      translatedLetter = text[i];
    } else if (vowelsArray.includes(text[i])) {
      translatedLetter = text[i];
    } else if (isRovareSyntax(text[i].concat('o',text[i+2]))) {
      translatedLetter = text[i];
      i = i + 2;
    } else {
      return "No 'rövare' text here! Please add a real 'rövare' text!";
    }
    translatedText = translatedText.concat(translatedLetter);
  }
  return translatedText;
};

const Translator = () => {
  const [language, setLanguage] = useState("ro");
  const [text, setText] = useState("");

  const formatString = (language, string) => {
    let info = '';
    if (language === 'ro') {
      info = "Rövare: ";
    } else {
      info = "Translation: ";
    }
    return info.concat(string.charAt(0).toUpperCase().concat(string.slice(1)));
  };

  const renderTranslatedText = (text, language) => {
    let translatedText = '';

    if (!text) {
        return "Are you a 'rövare' or not? Add a text first!";
    }

    if (language === "ro") {
      translatedText = translateToRovare(text);
    } else { 
      translatedText = translateFromRovare(text);
    }
    return formatString(language, translatedText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <React.Fragment>
            <div className="dominant">
              <form onSubmit={handleSubmit} className="formTranslator">
                <div className="fromWord">From</div>
                <Field 
                  label="Enter text" 
                  id="title"
                  onChange={setText} 
                  value={text} 
                />
                <div className="toWord">to</div>
                <Languages 
                  language={language} 
                  onLanguageChange={setLanguage} 
                />
              </form>
            
            </div>
            <div className="translator">
              <div className="translatedText">
                {renderTranslatedText(text,language)}
              </div>
            </div>
      </React.Fragment>
  );
};
export default Translator;