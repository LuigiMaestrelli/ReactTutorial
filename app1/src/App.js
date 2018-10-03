import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
    state = {
        ninjas: [
            { id: 1, name: 'Luigi', age: 27, belt: 'black' },
            { id: 2, name: 'Mario', age: 30, belt: 'white' },
            { id: 3, name: 'aaaaa', age: 21, belt: 'blue' },
            { id: 4, name: 'bbbbb', age: 16, belt: 'red' }
        ]
    }
    
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    addNinja = (newNinja) => {
        newNinja.id = this.getRandomInt(10000);

        let ninjas = [...this.state.ninjas, newNinja];

        this.setState({
            ninjas: ninjas
        });
    }

    deleteNinja = (ninjaId) => {

    }

    render() {
        return (
            <div className="App">
                <h1>My first App</h1>
                <p>Welcome</p>

                <AddNinja addNinja={ this.addNinja } deleteNinja={ this.deleteNinja }/>
                <Ninjas ninjas={ this.state.ninjas }/>
            </div>
        );
    }
}

export default App;
