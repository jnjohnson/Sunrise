import React from 'react';

const fadeEnd = 2000;

class TitleCard extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            opacity: 1
        }
        this.changeTitleCardOpacity = this.changeTitleCardOpacity.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.changeTitleCardOpacity);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeTitleCardOpacity);
    }

    changeTitleCardOpacity() {
        this.setState({
            opacity: 1 - (window.scrollY / fadeEnd)
        });
    }

    render() {
        return(
            <div className="title-card-bg" style={{opacity: this.state.opacity}}>
                <div className="title-card-wrapper">
                    <h1 className="title">SUNRISE</h1>
                    <h2 className="subtitle">Scroll To Begin</h2>
                </div>
            </div>
        );
    }
}

export default TitleCard;