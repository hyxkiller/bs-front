import React, { Component } from 'react';
import Login from '../components/Login'
import Register from '../components/Register'
import '../styles/Mine.scss'

class Mine extends Component {
    render() {
        return (
            <div className="mine">
                <Register></Register>
            </div>
        );
    }
}

export default Mine;