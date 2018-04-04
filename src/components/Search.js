import React, { Component } from 'react';
import axios from 'axios'
import '../styles/Search.scss'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goods: [],
            sgoods: [],
            changeSearch: '',
            search: ''
        }
    }

    showHome = () => {
        this.props.history.push('/home')
    }
    
    ipt = (e) => {
        this.setState({
            changeSearch: e.target.value
        })
        console.log(this.state.changeSearch)
    }

    search = () => {
        if(this.state.changeSearch != null){
            this.setState({
                search: this.state.changeSearch
            })
            console.log(this.state.search)
        }
    }

    componentDidMount() {
        axios.get('/port/list.json')
             .then( res => {
                 this.setState({
                     goods: res.data
                 })
                 console.log(this.state.goods)
             })
    }

    render() {
        return (
            <div className="sear">
                <div className="sear-head">
                    <div className="back" onClick={this.showHome} >
                        <img src="https://static-as.missfresh.cn/frontend/img/login-back.png" alt=""/>
                    </div>
                    <input type="text" className="sear-ipt" placeholder="请输入商品名称" onInput={this.ipt}/>     
                    <button className="sear-btn" onClick={this.search}>搜索</button>
                </div>
                <div className="sear-content">
                    <ul>

                    </ul>

                </div>
            </div>
        );
    }
}

export default Search;