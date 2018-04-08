import React, { Component } from 'react';
import Mine_com from '../components/Mine_com'
import '../styles/Register.scss'
import axios from 'axios';

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg: ''
        }
    }

    register = () => {
        const user = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
        // if(/^1[34578][0-9]{9}$/.test(user.username) && /^[0-9a-zA-Z-_=&\$#@]{6,12}$/.test(user.password)) {
            axios({
                method: 'post',
                url: '/api/users/signUp',
                data: user
            }).then( (res) => {
                if(res.data.data.success){
                    this.props.history.push('/mine/login');
                }else{
                    this.setState({
                        msg: '用户名已注册'
                    })
                    setTimeout(() => {
                        this.setState({
                            msg: ''
                        })
                    }, 2000);
                }
            }).catch( (err) => {
                console.log(err)
            })
        // }else{

        // }

    }

    componentDidMount() {

    }

    toRegister = () => {
        this.props.history.push('/mine/login');
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
                    <p style={{textAlign: 'center'}}>{this.state.msg}</p>
                    <p onTouchStart={this.toLogin} className="login-p">去注册</p>                    
                </div>
            </Mine_com>
        );
    }
}

export default Register;