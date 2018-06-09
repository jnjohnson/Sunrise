import React from 'react';

const shiftUpEnd    = 3000;

class StarField extends React.Component {
    componentDidMount(){
        window.addEventListener('scroll', this.shiftStars);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.shiftStars);
    }

    shiftStars() {
        var starField = document.getElementsByClassName('star-field')[0];
        starField.style.top = 0 - ((window.scrollY / shiftUpEnd) * 100);
    }

    renderStars() {
        var stars = [];
        for (let i=0; i < 75; i++){
            stars.push(<Star key={i} />);
        }
        return stars;
    }

    render() {
        return (
            <div className="star-field">
                {this.renderStars()}
            </div>
        );
    }
}

class Star extends React.Component {

    /*componentDidMount(){
        this.interval = Math.floor(Math.random() * 10000); //Sets interval as some fraction of 10 seconds
        this.timerID = setInterval(this.twinkle(), this.interval);
        return;
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    twinkle() {
        console.log("Hello");
    }*/

    generateX() {
        return Math.floor(Math.random() * window.innerWidth);
    }

    generateY() {
        return Math.floor(Math.random() * window.innerHeight);
    }

    render() {
        var divStyle = {
            top: this.generateY(),
            left: this.generateX()
        };

        return(
            <div style={divStyle} className="star"></div>
        );
    }
}

export default StarField;