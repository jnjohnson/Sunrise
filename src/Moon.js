import React from 'react';

const moonTraverseBegin = 4500;
const windowWidth       = window.innerWidth;

class Moon extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            left: -203,
            top: 400,
        }

        this.traverseMoon = this.traverseMoon.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.traverseMoon);
    }

    traverseMoon(){
        if (window.scrollY >= moonTraverseBegin){
            this.setState({
                left: this.state.left + (window.scrollY - moonTraverseBegin),
                top: this.state.top + -0.05*Math.pow(moonTraverseBegin - window.scrollY, 2)    
            })
            const x=1;
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