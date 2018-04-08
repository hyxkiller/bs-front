import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Detail.scss'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all: [],
            msg: []
        }
    }
    
    componentDidMount() {
        const allid = []        
        axios.get('/port/list.json')
             .then( (res) => {
                 this.setState({
                     all: res.data
                 })
                 // 判断所有商品里的id和当前商品id是否匹配，匹配的拿出相应商品信息
                 this.state.all.map((item, index) => {
                     if(item.id === this.props.match.params.id){
                        this.setState({
                            msg: item
                        })
                     }
                 })

             })
    }

    back = () => {
        window.history.back()
    }

    render() {
        return (
            <div className="detail">
                <div className="det-head">
                    <div className="back" onTouchStart={this.back} >
                        <img src="https://static-as.missfresh.cn/frontend/img/login-back.png" alt=""/>
                    </div>
                    商品详情
                </div>
                <div className="det-content">
                    <img src={this.state.msg.img} alt=""/>
                    <div className="det-msg">
                        <div className="det-title">
                            {this.state.msg.title}
                        </div>
                        <div className="det-des">
                            {this.state.msg.des}
                        </div>
                        <div className="det-money">
                            ￥{this.state.msg.money}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Detail;