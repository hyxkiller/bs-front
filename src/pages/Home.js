import React, { Component } from 'react';
import '../styles/Home.scss'
import Carousels from '../components/Carousels'
import List from '../components/List'
import Address from '../components/Address'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '北京市'
        }
    }

    showAddress = () => {
        console.log(1)
    }


    render() {

        return (
            <div className="home">
                <div className="head">
                    <div className="address" onClick={this.showAddress}><b>次日到达</b><span>{this.state.city}</span></div>
                    <div className="addr">
                        <Address ></Address>
                    </div>
                    <div className="search"></div>
                </div>
                <Carousels></Carousels>
                <List></List>
     
            </div>
        );
    }
}

export default Home;