import React, { Component } from 'react';

class App extends Component {
    state = {
        todos: [
            { 
                id: 1,
                content: 'Go shopping'
            }, {
                id: 2,
                content: 'See some movie'
            }
        ]
    }

    render() {
        return (
            <div className="App">

            </div>
        );
    }
}

export default App;
