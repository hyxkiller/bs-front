import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios'
import '../styles/Carousel.scss'

class Carousels extends Component {
    state = {
        data: [],
        imgHeight: 176,
        slideIndex: 0,
    }
    componentDidMount() {
            axios.get('/port/carousel.json')
                 .then((res) => {
                     this.setState({
                         data: res.data 
                     })
                 })
    }   
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    autoplayInterval={3000}
                    infinite
                    selectedIndex={1}
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val}
                            alt=""
                            style={{ display: 'block', width: '100%', height: '100%'}}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            // this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default Carousels;