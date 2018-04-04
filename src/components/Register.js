import React, { Component } from 'react';
import Mine_com from '../components/Mine_com'
import '../styles/Register.scss'
import axios from 'axios';

class Register extends Component {
    constructor(props){
        super(props)
    }

    register = () => {
        const user = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
        axios({
            url: '/api/users/signUp',
            method: 'post',
            data: user
        }).then( (res) => {
            console.log(res)
        }).catch( (err) => {
            console.log(err)
        })

    }

    componentDidMount() {
    }

    render() {
        return (
            <Mine_com title="用户注册">
                <div className="register">
                    <div className="register-ipt">
                        <input ref="username" id="reg-phone" type="number" placeholder="请输入手机号"/>
                        <input ref="password" id="reg-pwd" type="password" placeholder="请输入密码"/>                        
                    </div>
                    <button className="register-btn" onClick={this.register}>
                        注册
                    </button>
                </div>
            </Mine_com>
        );
    }
}

export default Register;