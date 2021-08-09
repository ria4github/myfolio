import React from 'react';

class Button extends React.Component {
    render() {
        return (
            
                <a class="ctg" href="#"><button>{this.props.text}</button></a>
            
        )
    }
}

export default Button;