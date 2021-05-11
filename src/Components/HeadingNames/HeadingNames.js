import React from 'react';
import './HeadingNames.css'

const HeadingNames = () => {
    return (
       <div className="header">
           <p className="header-information">Country</p>
           <p className="header-information">Cases</p>
           <p className="header-information">Deaths</p>
           <p className="header-information">Recovered</p>
       </div>
    );
};

export default HeadingNames;