import React from 'react';

export default function Header( { title, children } ) {
    return (
        <div className="container">
            <div className="text-center my-4">
                <h1>{title}</h1>
            </div>
            <div className="mx-auto">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )
}