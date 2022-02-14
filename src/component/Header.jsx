import React from 'react';

export default function Header( { children } ) {
    return (
        <div className="container">
            <div className="py-3 text-center">
                <h1>React News API</h1>
            </div>
            <div className="mx-auto">
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    )
}