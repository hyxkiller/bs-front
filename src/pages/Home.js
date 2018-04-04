import React, { Component } from 'react';
import '../styles/Home.scss'
import Carousels from '../components/Carousels'
import List from '../components/List'
import Address from '../components/Address'
import Search from '../components/Search'

// import { CSSTransition } from 'react-transition-group'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
        console.log(this.props.history.push('/search'))
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
                    <div className="address" onClick={this.showAddress}><b>次日到达</b><span>{this.state.city}</span></div>
                    <div className={this.state.addr ? "addr-2" : "addr-1"}>
                        <Address showHome={this.showHome} changeCity={this.changeCity}></Address>
                    </div>
                    <div className="search" onClick={this.showSearch}></div>
                </div>
                <Carousels></Carousels>
                <List></List>
     
            </div>
        );
    }
}

export default Home;