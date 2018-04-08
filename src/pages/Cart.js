import React, { Component } from 'react';
import '../styles/Cart.scss'
import { connect } from 'react-redux';
import * as actions from '../redux/actions'

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            haveCart: false,
            goodsMsg: []
        }
    }
    componentWillMount() {
        let msg = [];
        if(localStorage.getItem('goods')){
            const aa = localStorage.getItem('goods')
            this.setState({
                haveCart: true
            })
            
        }
    }

    componentWillUnmount() {
        localStorage.removeItem('goods')
    }


    render() {
        const haveCart = this.state.haveCart;
        return (
            <div className="cart">
                {
                    haveCart === true ? (
                        <div className="cart-msg">
                            <div className="cart-head">购物车</div>
                            <div className="cart-content">
                                {
                                    this.props.goods.map((item, index) => {
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
                                                    </div>
                                                </div>
                                                </div>
                                            </li>
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                        <div className="cart-nothing">
                            <p className="cart-p">
                                您还没有添加任何商品
                            </p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            goods: state.goods
        }
    },
    (dispatch) => {
        return {

        }
    }
)(Cart);