import React, { Component } from 'react';
import '../styles/Mine_com.scss'

class Header_Mine extends Component {
    render() {
        return (
            <div className="mine-com">
                <div className="mine-head">
                    {this.props.title}
                </div>
                <div className="mine-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Header_Mine;