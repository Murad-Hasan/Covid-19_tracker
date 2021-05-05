import React from 'react';
import './CovidResultCard.css'


const CovidResultCard = (props) => {
    return (
        <div className="worldState-box">
            <h1 className="totalNumbers">
                {props.total}
            </h1>
            <p className="about">
                {props.about}
                </p>
        </div>
    );
};

export default CovidResultCard;