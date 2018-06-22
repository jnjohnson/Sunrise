import React from 'react';

const shiftUpEnd = 3000;
const fadeAnimationLength = 3000;
const fadeAnimationFrames = 60;

class StarField extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            top: 0
        }

        this.shiftStars = this.shiftStars.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.shiftStars);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.shiftStars);
    }

    shiftStars() {
        this.setState({
            top: -Math.ceil((window.scrollY / shiftUpEnd) * 50)
        });
    }

    renderStars() {
        var stars = [];
        for (let i=0; i < 100; i++){
            stars.push(<Star key={i} id={i} />);
        }
        return stars;
    }

    render() {
        return (
            <div className="star-field" style={{top: this.state.top}}>
                {this.renderStars()}
            </div>
        );
    }
}

class Star extends React.Component {
    constructor(props){
        super(props);
        let top = this.generateY();
        let left = this.generateX(); 
        this.state = {
            isMounted: true,
            opacity: Math.random(),
            fadeDirection: (Math.random() >= 0.5 ? -1 : 1), //Sets the inital direction of the fade randomly
            top: top,
            left: left
        };
        this.opacityDifference = 0;
        this.defaultOpacity = this.state.opacity;
        this.twinkleExecutionDelay = Math.floor(Math.random() * (500 - 100) + 100);
        this.twinkle = this.twinkle.bind(this);
    }

    componentDidMount(){
        var star = this;
        setTimeout(function(){
            window.requestAnimationFrame(star.twinkle);
        }, star.twinkleExecutionDelay);
        
    }

    componentWillUnmount(){
        this.setState({
            isMounted: false
        })
    }

    twinkle() {
        var star = this;
        setTimeout(function(){
            if (star.state.isMounted) {
                star.setState({
                    opacity: star.state.opacity + star.state.fadeDirection/fadeAnimationFrames
                });
                star.opacityDifference = Math.abs(star.state.opacity - star.defaultOpacity);
                //Reverses the direction of the opacity change if opacity is greater than 1, less than zero, 
                //or if the difference from the default opacity is greater than 0.3
                if (star.state.opacity > 1 || star.state.opacity < 0 || star.opacityDifference > 0.3){
                    star.setState({
                        fadeDirection:  star.state.fadeDirection * -1
                    });
                }
                window.requestAnimationFrame(star.twinkle);
            }
        }, fadeAnimationLength/fadeAnimationFrames);
    }

    generateX() {
        return Math.floor(Math.random() * window.innerWidth);
    }

    generateY() {
        return Math.floor(Math.random() * window.innerHeight);
    }

    render() {
        return(
            <div style={{top: this.state.top, left: this.state.left, opacity: this.state.opacity}} className="star"></div>
        );
    }
}

export default StarField;