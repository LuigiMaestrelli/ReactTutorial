import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];

    const randomIndex = Math.floor(Math.random() * 5);
    const randomColor = colours[randomIndex];
    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent />
            </div>
        );
    };
};

export default Rainbow;