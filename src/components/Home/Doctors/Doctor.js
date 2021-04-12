import React from 'react';
import img from '../../../images/doc.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid rounded mb-3 w-75" src={img} alt=""/>
            <h4>Dr. Ishtiak Ahmed</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-1434342</p>
        </div>
    );
};

export default Doctor;