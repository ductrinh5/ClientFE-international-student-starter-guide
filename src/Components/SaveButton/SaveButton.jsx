import React, { useState } from 'react';
import './SaveButton.css';

function SaveButton({ destinationId, destinationTitle, className = '' }) {
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSaved(!isSaved);
        // TODO: Add logic to save/unsave destination to dashboard
        console.log(`${isSaved ? 'Unsaved' : 'Saved'} destination: ${destinationTitle} (ID: ${destinationId})`);
    };

    return (
        <button
            className={`save-btn ${isSaved ? 'saved' : ''} ${className}`}
            onClick={handleSave}
            title={isSaved ? 'Remove from Dashboard' : 'Save to Dashboard'}
            aria-label={isSaved ? 'Remove from Dashboard' : 'Save to Dashboard'}
        >
            <i className={`fa-light ${isSaved ? 'fa-heart' : 'fa-heart'}`}></i>
            <span className="save-text">{isSaved ? 'Saved' : 'Save'}</span>
        </button>
    );
}

export default SaveButton;
