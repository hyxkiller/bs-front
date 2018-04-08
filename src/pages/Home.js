import React, { Component } from 'react';
import '../styles/Home.scss'
import Carousels from '../components/Carousels'
import List from '../components/List'
import Address from '../components/Address'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '北京',
            addr: false
        }
    }

    showAddress = () => {
        this.setState({
            addr: true
        })
    }
    showHome = () => {
        this.setState({
            addr: false
        })
    }
    
    showSearch = () => {
        this.props.history.push('/search')
    }

    //和Address间的父子组件穿传参 
    changeCity = (data) => {
        this.setState({
            city: data
        })
    }

    render() {

        return (
            <div className="home">
                <div className="head">
                    <div className="address"><b>次日到达</b><span onTouchStart={this.showAddress}>{this.state.city}</span></div>
                    <div className={this.state.addr ? "addr-2" : "addr-1"}>
                        <Address showHome={this.showHome} changeCity={this.changeCity}></Address>
                    </div>
                    <div className="search" onClick={this.showSearch}></div>
                </div>
                <Carousels></Carousels>
                <List history={this.props.history}></List>
            </div>
        );
    }
}

export default Home;