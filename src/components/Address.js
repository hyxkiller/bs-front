import React, { Component } from 'react';
import axios from 'axios'
import '../styles/Address.scss'

class Address extends Component {
    constructor(props){
        super(props)
        this.state = {
            allCity: []
        }
    }

    showHome = () => {
        this.props.showHome()
    }

    changeCity = (data) => {
        this.props.changeCity(data)
        this.showHome()
    }
        
    componentDidMount() {
        axios.get('/port/city.json')
             .then( (res) => {
                this.setState({
                    allCity: res.data
                })
             })
    }

    render() {
        return (
            <div className="pos">
                <div className="pos-head">
                    <div className="back" onClick={this.showHome} >
                        <img src="https://static-as.missfresh.cn/frontend/img/login-back.png" alt=""/>
                    </div>
                    选择地址                    
                </div>
                <ul className="pos-content">
                    {
                        this.state.allCity.map( (item) => {
                            return <li key={item.id} onClick={() => {
                                this.changeCity(item.city)}
                            }>
                                {item.city}
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Address;