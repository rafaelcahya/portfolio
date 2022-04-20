import React from 'react';

const Background = ( { children } ) =>
{
    return (
        <div className="transition-all">
            {children}
        </div>
    )
}

export default Background;