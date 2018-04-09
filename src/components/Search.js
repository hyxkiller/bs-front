import React, { Component } from 'react';
import axios from 'axios'
import '../styles/Search.scss'
import { connect } from 'react-redux';
import * as actions from '../redux/actions'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goods: [],
            goodsMsg: [],
            changeSearch: ''
        }
    }

    showHome = () => {
        this.props.history.push('/home')
    }
    
    ipt = (e) => {
        this.setState({
            changeSearch: e.target.value
        })
    }

    search = () => {
        const search = this.state.changeSearch;  // 用户输入的查询内容
        const goodsName = []
        const goodsAll = []
        this.state.goods.forEach((val, item) => {
            goodsName.push(val.title)   // 先循环保存所有商品title进行筛选
        })
        if(search.length > 0){
            // 筛选结果保存为变量result
            let result = goodsName.filter((val, index, arr) => {
                if(val.indexOf(search) !== -1 ){
                    return val          
                }
            })
            // 再到整个商品数组中获取查询到的商品所有信息
            this.state.goods.forEach((val, index) => {
                for(var i = 0, len = result.length; i<len; i++){
                    if(val.title.indexOf(result[i]) !== -1 ){
                        goodsAll.push(val)
                        this.setState({
                            goodsMsg: goodsAll
                        })
                    }
                }
            })
        }
    }

    componentDidMount() {
        axios.get('/port/list.json')
             .then( res => {
                 this.setState({
                     goods: res.data
                 })
             })
    }

    render() {
        return (
            <div className="sear">
                <div className="sear-head">
                    <div className="back" onTouchStart={this.showHome} >
                        <img src="https://static-as.missfresh.cn/frontend/img/login-back.png" alt=""/>
                    </div>
                    <input type="text" className="sear-ipt" placeholder="请输入商品名称" onInput={this.ipt}/>     
                    <button className="sear-btn" onTouchStart={this.search}>搜索</button>
                </div>
                <div className="sear-content">
                    <ul className="sear-ul">
                        {
                            this.state.goodsMsg.map((item, index) => {
                                return <li key={item.id} style={{backgroundColor: 'white', marginTop: '0.2rem'}}>
                                        <div style={{ height: '50px',padding:'0 15px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
                                        {item.title}
                                        </div>
                                        <div onTouchStart={() => {
                                            this.props.history.push(`/detail/${item.id}`)       // 跳转详情页                    
                                        }} style={{ display: 'flex', padding: '15px' }}>
                                        <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={item.img} alt="" />
                                        <div style={{ flex: '1' }}>
                                            <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{item.des}</div>
                                            <div style={{ fontSize: '16px' }}>￥<span style={{ fontSize: '30px', color: '#FF6E27' }}>{item.money}</span>
                                            <div onTouchStart={(e) => {
                                                e.stopPropagation()
                                                this.props.goods(item)    // 添加购物车
                                            }} style={{ display: 'inline-block', float: 'right', width: '50px', height: '50px' }} ><img style={{width: '100%', height: '100%'}} src="https://j-image.missfresh.cn/img_20170425134548759.png" alt=""/> </div>
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                            })
                        }
                    </ul>

                </div>
            </div>
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
            goods(msg) {
                actions.goods(dispatch, msg)
            }
        }
    }
)(Search);