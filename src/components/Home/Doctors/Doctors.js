import React from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <h1  className="text-center  text-success mb-5">We are ready to help you</h1>
                <div className="row">
                    <Doctor />
                    <Doctor />
                    <Doctor />
                </div>
            </div>
        </section>
    );
};

export default Doctors;