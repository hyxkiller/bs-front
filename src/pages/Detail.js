import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div>
                detail
                <br/>
                {this.props.match.params.id}
            </div>
        );
    }
    componentDidMount() {
        console.log(this.props)
    }
}

export default Detail;