import React, { Component } from 'react';
import { connect} from 'react-redux'
import * as actions from '../redux/actions'
import axios from 'axios';

class Mine_msg extends Component {
    constructor(props){
        super(props)
        this.msgList = [
            '账户与安全',
            '我的地址',
            '下载App',
            '客服与帮助',
            '意见反馈',
            '关于我们',
            '设置'            
        ]
    }

    componentWillMount() {
        if(localStorage.getItem('login')){
            console.log(localStorage.getItem('login'))
            this.props.login(localStorage.getItem('login'))
        }
    }

    logout = () => {
        axios.get('/api/users/logout')
             .then((res) => {
                 if(res.data.data.logout) {
                     localStorage.removeItem('login')
                     this.props.history.push('/mine/login')
                 }
             })
    }

    render() {
        return (
            <div>
                <div className="user">
                    {/* 添加用户信息 */}
                    <div className="welcome" style={{margin: '2rem auto 0', textAlign: 'center', fontSize: '1rem'}}>
                        欢迎
                        <p style={{textAlign: 'center', margin: '1rem auto 0'}}>{this.props.username}</p> 
                    </div>
                    <button onTouchStart={this.logout} className="logout" style={{margin: '2rem auto 0', textAlign: 'center',display: 'block', width: '3rem', height: '2rem',background: 'lightblue', borderRadius: '0.5rem'}}>
                        退出
                    </button>
                </div>
                <div className="scroll">
                    <ul className="scroll-x">
                        <li className="scroll-li">
                            <img src="https://j-image.missfresh.cn/img_20171028202643589.png?iopcmd=convert&dst=png&q=80" alt=""/>
                            <p>购物返现</p>
                        </li>
                        <li className="scroll-li">
                            <img src="https://j-image.missfresh.cn/img_20171103161358679.png?iopcmd=convert&dst=png&q=80" alt=""/>
                            <p>会员专享价</p>
                        </li>
                        <li className="scroll-li">
                            <img src="https://j-image.missfresh.cn/img_20171028202735028.png?iopcmd=convert&dst=png&q=80" alt=""/>
                            <p>一小时送达</p>
                        </li>
                        <li className="scroll-li">
                            <img src="https://j-image.missfresh.cn/img_20180105021625371.png?iopcmd=convert&dst=png&q=80" alt=""/>
                            <p>专属红包</p>
                        </li>
                        <li className="scroll-li"> 
                            <img src="https://j-image.missfresh.cn/img_20171028202909231.png?iopcmd=convert&dst=png&q=80" alt=""/>
                            <p>专属客服</p>
                        </li>
                        <li className="scroll-li">
                            <img src="https://j-image.missfresh.cn/img_20180105021607945.png?iopcmd=convert&dst=png&q=80" alt=""/>
                            <p>敬请期待</p>
                        </li>
                    </ul>
                </div>
                <ul className="mine-msg">
                    {
                        this.msgList.map( (item, index) => {
                            return <li key={index}>{item}
                                <img src="https://static-as.missfresh.cn/frontend/img/right-jiantou.png" alt=""/>
                            </li>   
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            username: state.login
        }
    },
    (dispatch) => {
        return {
            login(id) {
                actions.login(dispatch,id) 
            }
        }
    }
)(Mine_msg);