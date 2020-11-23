    import React, { Component } from 'react';

class Messeges extends Component {
    render() {
        return (
            <div>
                {this.props.messeges.map((messege , messegeIndex) => 
                <div key={messegeIndex}>
                <div className="user">{messege.user}</div>    
                <div className="content">{messege.content}</div>    
                </div>     
                )}

            </div>
        );
    }
}

export default Messeges;