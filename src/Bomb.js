import React from 'react';

class Bomb extends React.Component {

    state = { secondsLeft: this.props.initialCount }

    secondsRemaining = () => {
        if (this.state.secondsLeft > 0) {
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        } else if (this.state.secondsLeft === 0) {
            return <p>Boom!</p>
        }
    }

    render() {
        return <div>{this.secondsRemaining()}</div>
    }
}

export default Bomb