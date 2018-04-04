import React, { Component } from 'react';
import Mine_com from '../components/Mine_com'
import '../styles/Login.scss'
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props)
    }

    login = () => {
        const user = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
        axios({
            url: '/api/users/signIn',
            method: 'post',
            data: user
        }).then( (res) => {
            console.log(res)
        }).catch( (err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <Mine_com title="用户登录">
                <div className="login">
                    <div className="login-ipt">
                        <input ref="username" type="number" placeholder="请输入手机号"/>
                        <input ref="password" type="password" placeholder="请输入密码"/>                        
                    </div>
                    <button className="login-btn" onClick={this.login}>
                        登录
                    </button>
                </div>
            </Mine_com>
        );
    }
}

export default Login;