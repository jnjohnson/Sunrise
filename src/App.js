import React from 'react';
import Star from './Star';
import TitleCard from './TitleCard';

class App extends React.Component {

    renderStars() {
        var stars = [];
        for (let i=0; i < 75; i++){
            stars.push(<Star key={i} />);
        }
        return stars;
    }

    render() {
        return (
            <div className="background">
                <TitleCard fadeEnd={1500} />
                <div className="stars-wrapper">
                    {this.renderStars()}
                </div>
            </div>
        );
    }
}

export default App;