import React, { Component } from 'react';

class TitleCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scrollTop = 0,
        }

        this.props = {
            fadeBegin = 0,
            fadeEnds = 1500
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        var titleCard = document.getElementsByClassName("title-card-bg");
        console.log(titleCard[0].getBoundingClientRect().top);
    }

    render() {
        return(
            <div className="title-card-bg">
                <div className="title-card-wrapper">
                    <h1 className="title">SUNRISE</h1>
                    <h2 className="subtitle">Scroll To Begin</h2>
                </div>
            </div>
        );
    }
}

export default TitleCard;