import React, { Component } from 'react';
import Login from '../components/Login'
import Register from '../components/Register'
import Mine_msg from '../components/Mine_msg';
import '../styles/Mine.scss'
import { BrowserRouter as Router  , Switch, Route} from 'react-router-dom'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'

class Mine extends Component {
    componentWillMount() {
        // axios.get('/api/users/islogin')
        //      .then((res) => {
        //         if(res.data.data.login){
        //             this.props.history.push('/mine/msg')
        //         }else{
        //             this.props.history.push('/mine/login')
        //         }
        //      })
        if(localStorage.getItem('login')){
            this.props.login(localStorage.getItem('login'))
            this.props.history.push('/mine/msg')
        }else{
            this.props.history.push('/mine/login')
        }
    }
    render() {
        return (
            <Router>
                <div className="mine">
                    <Switch>
                        <Route exact path="/mine/msg" component={Mine_msg}></Route>
                        <Route exact path="/mine/login" component={Login}></Route>
                        <Route exact path="/mine/register" component={Register}></Route>                    
                    </Switch>
                    
                </div>
            </Router>
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
)(Mine);