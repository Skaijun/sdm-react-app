import React from 'react';

const LanguageSelect = ({ lang, onLanguageSelect }) => {
    return (
        <div>
        <span title={lang.title} onClick={() => onLanguageSelect(lang)}>
            {lang.text}
        </span>
        </div>
    )
};

export default LanguageSelect;