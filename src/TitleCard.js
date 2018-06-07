import React from 'react';

class TitleCard extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        var background = document.getElementsByClassName('title-card-bg')[0];
        background.style.opacity = 1 - (window.scrollY / this.props.fadeEnd);
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