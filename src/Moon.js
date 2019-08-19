import React from 'react';

const moonTraverseBegin     = 4500;
const moonTraverseAmount    = 4500;
const moonTraverseEnd       = moonTraverseBegin + moonTraverseAmount;
const windowWidth           = window.innerWidth;

class Moon extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            left: -203,
            top: 50,
        }
        this.initialPositionX = this.state.left;
        this.initialPositionY = this.state.top;
        this.traverseMoon = this.traverseMoon.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.traverseMoon);
    }

    traverseMoon(){
        if (window.scrollY <= moonTraverseBegin) {
            this.setState({
                left: this.initialPositionX,
                top: this.initialPositionY,
            });
        }
        else if (window.scrollY > moonTraverseBegin && window.scrollY <= moonTraverseEnd){
            let x = this.initialPositionX + ((window.scrollY - moonTraverseBegin)/moonTraverseAmount) * (windowWidth * 1.2);
            this.setState({
                left: this.initialPositionX + ((window.scrollY - moonTraverseBegin)/moonTraverseAmount) * (windowWidth * 1.2),
                top: 0.0004*Math.pow(x - (windowWidth/2 + this.initialPositionX + 90), 2) + this.initialPositionY
            })
        }
        else if (window.scrollY > moonTraverseEnd) {
            this.setState({
                left: windowWidth + 203,
                top: 0
            })
        }
    }

    render() {
        return (
            <div className="moon" style={{left: this.state.left, top: this.state.top}}>
                <div className="crater-1"></div>
                <div className="crater-2"></div>
                <div className="crater-3"></div>
                <div className="crater-4"></div>
                <div className="crater-5"></div>
            </div>
        )
    }
}

export default Moon;