import React, { Component } from 'react';

class Createmessege extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
    }
    
    changemessenge = (e) => {
        this.setState({
            message: e.target.value,
        })
    }
    
    send = (e) => {
        e.preventDefault();
        const message = {
            user: 'gust',
            content: this.state.message
        }
        this.props.createmessege(message);
    }
    render() {
        return (
            <form onSubmit={this.send}>
            <input type="text" placeholder="message" value={this.state.message} onChange={this.changemessenge} /> 
            <input type="submit" />
            </form>
        );
    }
}

export default Createmessege;