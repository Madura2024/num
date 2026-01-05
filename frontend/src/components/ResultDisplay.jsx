import React from 'react';

const ResultDisplay = ({ dayNum, lpNum, daySteps, lpSteps, message, isMatch }) => {

    // Style for the main result box
    const resultStyle = {
        padding: '1.5rem',
        borderRadius: '16px',
        background: isMatch ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
        border: `2px solid ${isMatch ? '#4ade80' : '#f87171'}`,
        color: isMatch ? '#4ade80' : '#f87171',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: '1.5rem',
        boxShadow: `0 0 20px ${isMatch ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
    };

    return (
        <div className="result-container">

            {/* Comparison Result */}
            <div style={resultStyle}>
                {message}
            </div>

            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>

                {/* Day Number Box */}
                <div style={{ flex: 1, minWidth: '250px', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px' }}>
                    <h3 style={{ color: '#cbd5e1' }}>Day Number</h3>
                    <div className="number-circle" style={{ margin: '1rem auto', width: '80px', height: '80px', fontSize: '2.5rem', borderColor: '#a855f7' }}>
                        {dayNum}
                    </div>
                    <ul style={{ textAlign: 'left', color: '#94a3b8', paddingLeft: '1.2rem' }}>
                        {daySteps && daySteps.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </div>

                {/* Life Path Box */}
                <div style={{ flex: 1, minWidth: '250px', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px' }}>
                    <h3 style={{ color: '#cbd5e1' }}>Life Path Number</h3>
                    <div className="number-circle" style={{ margin: '1rem auto', width: '80px', height: '80px', fontSize: '2.5rem', borderColor: '#ec4899' }}>
                        {lpNum}
                    </div>
                    <ul style={{ textAlign: 'left', color: '#94a3b8', paddingLeft: '1.2rem' }}>
                        {lpSteps && lpSteps.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ResultDisplay;
