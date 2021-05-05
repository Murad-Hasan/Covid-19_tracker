import React from 'react';
import './Countries.css'

const Countries = () => {
    return (
        <div className="countries">
            <h2 className="countries-heading">Countries</h2>
            <div className="filtering">
                <input type="text" placeholder='Enter Country Name'/>
                <select className="sort-by">
                    <option value="Height">Height</option>
                    <option value="Lowest">Lowest</option>
                </select>
            </div>
        </div>
    );
};

export default Countries;