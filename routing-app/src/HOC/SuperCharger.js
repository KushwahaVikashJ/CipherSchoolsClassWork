// Prospective Component as prop
import React from 'react';

const SuperCharger = ProspectiveComponent => {
    const color =['red', 'blue', 'green', 'yellow', 'purple', 'violet'];
    const randomColor = color[Math.floor(Math.random() * 5)];

    // red-text - materialize

    const className = randomColor+ '-text';

    return (props) => {
        return(
           <div className={className}>
                <ProspectiveComponent {...props} />
           </div> 
        )
    }
}

export default SuperCharger;