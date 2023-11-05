import React from 'react';
import './app-info.css'
function AppInfo(props) {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N </h1>
            <h2>Общее число сотрудников:{props.users}</h2>
            <h2>Премию получат: {props.increases}</h2>
        </div>
    );
}

export default AppInfo;