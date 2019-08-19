import React from 'react';

const shiftUpAmount         = 125;
const shiftAnimationAmount  = 1500;
const shiftAnimationBegin   = 2000;
const shiftAnimationEnd     = shiftAnimationBegin + shiftAnimationAmount;

class Ground extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            bottom: -shiftUpAmount - 5
        }
        this.initialPosition = this.state.bottom;
        this.shiftGround = this.shiftGround.bind(this);
    }

    componentDidMount(){
        window.addEventListener("scroll", this.shiftGround);
    }

    shiftGround() {
        if (window.scrollY < shiftAnimationBegin){
            this.setState({
                bottom: this.initialPosition
            });
        }
        else if (window.scrollY > shiftAnimationBegin && window.scrollY <= shiftAnimationEnd){
            this.setState({
                bottom: this.initialPosition + ((window.scrollY - shiftAnimationBegin)/shiftAnimationAmount)*shiftUpAmount
            });
            //console.log('initial position: ' + this.initialPosition + '; current position: ' + this.state.top);
        }
        else if (window.scrollY > shiftAnimationEnd) {
            this.setState({
                bottom: 0
            })
        }

    }

    render() {
        return(
            <div className="ground" style={{bottom: this.state.bottom}}></div>
        )
    }
}

export default Ground;