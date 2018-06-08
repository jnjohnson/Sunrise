import React from 'react';

class Star extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        }
    }

    componentDidMount(){
        this.interval = Math.floor(Math.random() * 10000); //Sets interval as some fraction of 10 seconds
        this.timerID = setInterval(this.twinkle(), this.interval);
        return;
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    twinkle() {
        console.log("Hello");
    }

    generateX() {
        return Math.floor(Math.random() * this.state.windowWidth);
    }

    generateY() {
        return Math.floor(Math.random() * this.state.windowHeight);
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

export default Star;