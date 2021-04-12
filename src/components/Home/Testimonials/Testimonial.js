import React from 'react';

const Testimonial = (props) => {
    const { quote, name, from, img } = props.testimonial;

    return (
        <div className='card shadow-sm'>
            <div className="card-body text-justify">
                <p className="card-text text-secondary  text-center">{quote}</p>
            </div>

            <div className="card-footer d-flex p-3  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-success">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>


        </div>
    );
};

export default Testimonial;