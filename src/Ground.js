import React from 'react';

const shiftUpAmount = 125;
const shiftAnimationAmount = 1500;
const shiftAnimationBegin = 2000;
const shiftAnimationEnd = shiftAnimationBegin + shiftAnimationAmount;

class Ground extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            top: window.innerHeight + 5
        }
        this.initialPosition = this.state.top;
        this.shiftGround = this.shiftGround.bind(this);
    }

    componentDidMount(){
        window.addEventListener("scroll", this.shiftGround);
    }

    shiftGround() {
        if (window.scrollY < shiftAnimationBegin){
            this.setState({
                top: this.initialPosition
            });
        }
        if (window.scrollY > shiftAnimationBegin && window.scrollY <= shiftAnimationEnd){
            this.setState({
                top: this.initialPosition - ((window.scrollY - shiftAnimationBegin)/shiftAnimationAmount)*shiftUpAmount
            });
            //console.log('initial position: ' + this.initialPosition + '; current position: ' + this.state.top);
        }
    }

    render() {
        return(
            <div className="ground" style={{top: this.state.top}}></div>
        )
    }
}

export default Ground;