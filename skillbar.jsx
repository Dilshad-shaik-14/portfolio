// skillbar.jsx
import React from 'react';

const ProgressBar3 = ({ skill, level }) => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-white">{skill}</span>
                <span className="text-sm font-medium text-white">{level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-blue-300 to-blue-900 h-2.5 rounded-full" style={{ width: level }}></div>
            </div>
        </div>
    );
};

export default ProgressBar3;
