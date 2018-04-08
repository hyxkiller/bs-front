import React, { Component } from 'react';
import Mine_com from '../components/Mine_com'
import '../styles/Login.scss'
import axios from 'axios';
import { connect} from 'react-redux'
import * as actions from '../redux/actions'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg: ''
        }
    }

    login = () => {
        const user = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
        // if(/^1[34578][0-9]{9}$/.test(user.username) && /^[0-9a-zA-Z-_=&\$#@]{6,12}$/.test(user.password)) {

        // }
        axios({
            url: '/api/users/signIn',
            method: 'post',
            data: user
        }).then( (res) => {
            if(res.data.data.login === 0){    //登录成功
                this.props.history.push('/mine/msg')
                this.props.login(user.username)
            }else if(res.data.data.login === 2){
                this.setState({
                    msg: '用户名密码错误，请重新输入'
                })
                setTimeout(() => {
                    this.setState({
                        msg: ''
                    })
                }, 2000);
            }else if(res.data.data.login === 1){
                this.setState({
                    msg: '用户名不存在，请注册'
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
    }

    toRegister = () => {
        this.props.history.push('/mine/register');
    }

    render() {
        return (
            <Mine_com title="用户登录">
                <div className="login">
                    <div className="login-ipt">
                        <input ref="username" type="number" placeholder="请输入手机号"/>
                        <input ref="password" type="password" placeholder="请输入密码"/>                        
                    </div>
                    <p style={{textAlign: 'center', marginTop: '1rem', fontSize: '14px'}}>{this.state.msg}</p>                                        
                    <button className="login-btn" onClick={this.login}>
                        登录
                    </button>
                    <p onTouchStart={this.toRegister} className="login-p">去注册</p>
                </div>
            </Mine_com>
        );
    }
}

export default connect(
    (state) => {
        return {

        }
    },
    (dispatch) => {
        return {
            login(id) {
                actions.login(dispatch,id) 
            }
        }
    }
)(Login);