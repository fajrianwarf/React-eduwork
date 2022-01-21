import React from 'react';

const Card = (props) => {
    return (
        <div className='col'>
            <div className='card mb-4 rounded-3 shadow-sm'>
                <div className='card-header py-3'>
                    <h4 className='my-0 fw-normal'>{props.bundle}</h4>
                </div>
                <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>{props.price}</h1>
                    <ul className='list-unstyled mt-3 mt-3 mb-4'>
                        <li>list 1</li>
                        <li>list 2</li>
                    </ul>
                    <button type='button' className='w-100 btn btn-lg btn-outline-primary'>Sign up</button>
                </div>
            </div>
        </div>
    )
};

export default Card;